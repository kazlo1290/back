import api from "../_boot/baseApi";

export const getLatestEpisodes = ({commit, state}, payload) => {
    console.log(payload.vm.isLoading);

    payload.vm.isLoading = true;
    api
        .get(`/api/m/latest/anime/1?page=${payload.vm.page ? payload.vm.page : 1}`)
        .then(({data}) => {
            if (payload.vm.page > 1) {
                let episodeList = [...state.latestEpisodes];
                data.data.forEach((item) => {
                    episodeList.push(item);
                });
                commit('setLatestEpisodes', episodeList);
            } else {
                commit('setLatestEpisodes', data.data);
            }

            setTimeout(() => {
                payload.vm.isLoadingPage = false;
                payload.vm.isLoading = false;
                payload.vm.isLoadingMore = false;
            }, 1000);

            if (data.current_page == data.last_page) {
                payload.vm.hasMore = false;
            } else {
                payload.vm.hasMore = true;
                payload.vm.page = data.current_page + 1;
            }
        })
        .catch(e => {
            console.log(e);
            payload.vm.isLoading = false;
        })
};

export const getHistoryEpisodes = ({commit, state}, payload) => {
    payload.vm.isLoading = true;
    api.get(`/api/m/history/${state.user.id}`)
        .then(({data}) => {
            commit("setHistoryEpisodes", data.data);
            payload.vm.isLoading = false;
        })
        .catch(e => {
            console.log(e);
            payload.vm.isLoading = false;
        })
};

export const getEpisodes = ({commit, state}, payload) => {
    console.log("working here");
    if (state.episodes.length == 0) {
        payload.vm.isLoading = true;
        api.get(`/api/m/episodes/${payload.mediaId}/${state.user ? state.user.id : null}`)
            .then(({data}) => {
                commit("setEpisodes", data);
                setTimeout(() => {
                    payload.vm.isLoading = false;
                }, 500)
            });
    }
};

export const getGroups = ({commit}, payload) => {
    payload.vm.isLoadingEpisodes = true;
    api.get(`/api/m/groups/${payload.anime}/${payload.vm.$user ? payload.vm.$user.id : null}`)
        .then(({data}) => {
            commit("setGroups", data);
            payload.vm.isLoadingEpisodes = false;
        });
};

export const getEpisodesByGroup = ({commit}, payload) => {
    payload.vm.isLoadingGroupEpisodes = true;
    api.get(`/api/m/episodes/group/${payload.group}/${payload.vm.$user ? payload.vm.$user.id : null}`)
        .then(({data}) => {
            commit("setGroupEpisodes", {episodes: data, group: payload.group});
            payload.vm.isLoadingGroupEpisodes = false;
        });
};

export const getEpisodeDetail = ({commit, state}, payload) => {
    commit('setLoadingEp', true);

    api.get(`/api/m/episode/${payload.episodeID}${state.user != null ? "/" + state.user.id : ""}`).then(async ({data}) => {
        commit('setEpisode', data);
        commit('setCommentCount', data.commentCount);
        commit('setLoadingEp', false);
        await checkPermission(payload.vm, state, commit);
        await addToHistory(state.episode.id, state.user.id);
    });
};

const addToHistory = (id, userId) => {
    if (userId != null) {
        api.get(`/api/m/episode/history/${id}/${userId}`);
    }
}

const checkPermission = (vm, state, commit) => {
    if (state.user != null) {
        if (state.episode.episode != null && state.episode.is_free == 1) {
            // vm.isLoading = false;
            commit("setCanWatchStatus", true);
        } else {
            api.get(`/api/m/payment/${state.user.id}`).then(({data}) => {
                if (data.status == true) {
                    commit("setCanWatchStatus", true);
                } else {
                    commit("setWarningMsg", "Та эрхээ сунгаж үзвэрээ үзнэ үү!");
                }
                console.log("I am here");
                vm.isLoading = false;
            });
        }
    } else {
        vm.isLoading = false;
        commit("setWarningMsg", "Та нэвтэрч орсны дараа үзэх боломжтой!");
    }
}

export const reportEpisode = ({state}, payload) => {
    if (state.user == null) {
        payload.vm.$message({
            message: "Нэвтэрч орсны дараа уг үйлдлийг хийх боломжтой",
            type: "error",
        });
        return;
    }

    payload.vm.reportLoader = true;
    api
        .post(`/api/m/report/${state.user.id}`, {
            report: payload.report,
            type: "ep",
            parent_id: state.episode.anime_id,
            media_id: state.episode.id,
        })
        .then(({data}) => {
            if (data.status) {
                setTimeout(() => {
                    payload.vm.reportLoader = false;
                    payload.vm.$message({
                        message:
                            "Таны репорт илгээгдлээ. Бид хүлээж аваад засварлах болно. Баярлалаа!",
                        type: "info",
                    });
                }, 1000);
            }
        });
}

export const searchEpisode = ({commit}, q) => {
    commit("searchEpisode", q);
};

export const sortEpisode = ({commit}) => {
    commit("sortEpisode");
};

export const setEpisode = ({commit}, payload) => {
    commit("episode", payload);
};

export const setEpStatus = ({state, commit}, payload) => {
    let vm = payload.vm;

    if (payload.action == "like" && state.episode !== null) {
        if (payload.value == 0) {
            commit('incEpDislike');
            if (state.episode.liked == 1) {
                commit('decEpLike')
            }
        }

        if (payload.value == 1) {
            commit('incEpLike');
            if (state.episode.liked == 0) {
                commit('decEpDislike');
            }
        }

        if (payload.value == null) {
            if (state.episode.liked == 1) {
                commit('decEpLike')
            }

            if (state.episode.liked == 0) {
                commit('decEpDislike');
            }
        }
        commit('setEpStatus', payload.value)
    }

    api.get(
        `/api/m/anime/status/${state.episode.id}/${state.user ? state.user.id : null}/ep/${payload.action}/${payload.value}`
    ).then(({data}) => {
        vm.$toast.info(data.msg);
    });
}

export const clearEpisode = ({commit}) => {
    commit('clearEpisode')
}

export const switchEpisode = ({commit}) => {
    commit('switchEpisode')
}