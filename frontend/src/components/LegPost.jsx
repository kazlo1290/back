import { React, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import PostItemPublic from './PostItemPublic'
import Spinner from './Spinner'
import { getAllPosts, reset } from '../api/posts/postSlice'


class EEE extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className='content'>
        {this.props.posts.length > 0 ? <div className='goals'>
          {this.props.posts.map(post => <PostItemPublic key={post._id} post={post} />)}
        </div> : <h3>Нийтлэл алга</h3>}
      </section>
    );
  }
}


function LegPostsJSX() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { posts, isLoading, isError, message } = useSelector(
    (state) => state.posts
  )

  useEffect(() => {
    if (isError) {
      console.log(message)
    }
    dispatch(getAllPosts())

    return () => {
      dispatch(reset())
    }
  }, [navigate, isError, message, dispatch])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>


      <EEE posts={posts}></EEE>
    </>
  )
}

export default LegPostsJSX