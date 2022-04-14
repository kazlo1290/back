const asyncHandler = require('express-async-handler')

const Post = require('../models/postModel')
const User = require('../models/userModel')

// @desc Get Posts
// @route GET /api/posts
// @access Private
const getPosts = asyncHandler(async (req, res) => {
    const posts = await Post.find({ user: req.user.id })

    res.status(200).json(posts)
})

// @desc Get Posts
// @route GET /api/posts/all
// @access Public
const getAllPosts = asyncHandler(async (req, res) => {
    const posts = await Post.find()

    res.status(200).json(posts)
})

// @desc Set Posts
// @route POST /api/posts
// @access Private
const setPosts = asyncHandler(async (req, res) => {
    if (!req.body.title) {
        res.status(400)
        throw new Error('Title нэмнэ үү')
    }

    const post = await Post.create({
        title: req.body.title,
        content: req.body.content,
        imagePath: req.body.url,
        user: req.user.id,
        author: req.user.name,
    })

    res.status(200).json(post)
})

// @desc Update Posts
// @route PUT /api/posts/:id
// @access Private
const updatePosts = asyncHandler(async (req, res) => {
    const post = await Post.findById(req.params.id)

    if(!post) {
        res.status(400)
        throw new Error('Олдсонгүй')
    }

    const user = await User.findById(req.user.id)

    // Check For User
    if(!user) {
        res.status(401)
        throw new Error('Хэрэглэгч олдсонгүй')
    }

    // Make sure the logged in user matches tl
    if(post.user.toString() !== user.id) {
        res.status (401)
        throw new Error('Хэрэглэгч зөвшөөрөлгүй')
    }

    const updatedPosts = await Post.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(200).json(updatedPosts)
})

// @desc Delete Posts
// @route DELETE /api/posts/:id
// @access Private
const deletePosts = asyncHandler(async (req, res) => {
    const post = await Post.findById(req.params.id)

    if(!post) {
        res.status(400)
        throw new Error('Олдсонгүй')
    }

    const user = await User.findById(req.user.id)

    // Check For User
    if(!user) {
        res.status(401)
        throw new Error('Хэрэглэгч олдсонгүй')
    }

    // Make sure the logged in user matches tl
    if(post.user.toString() !== user.id) {
        res.status (401)
        throw new Error('Хэрэглэгч зөвшөөрөлгүй')
    }

    await post.remove()

    res.status(200).json({ id: req.params.id })
})

module.exports = {
    getAllPosts,
    getPosts,
    setPosts,
    updatePosts,
    deletePosts
}