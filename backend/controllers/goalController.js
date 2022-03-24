const asyncHandler = require('express-async-handler')

const Goal = require('../models/goalModel')
const User = require('../models/userModel')

// @desc Get Goals
// @route GET /api/goals
// @access Private
const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find({ user: req.user.id })

    res.status(200).json(goals)
})

// @desc Get All Goals
// @route GET /api/goals/all
// @access Public
const getPublicGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find()

    res.status(200).json(goals)
})

// @desc Set Goals
// @route POST /api/goals
// @access Private
const setGoals = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Text nem')
    }

    const goal = await Goal.create({
        text: req.body.text,
        user: req.user.id,
    })

    res.status(200).json(goal)
})

// @desc Update Goals
// @route PUT /api/goals/:id
// @access Private
const updateGoals = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)

    if(!goal) {
        res.status(400)
        throw new Error('Goal oldsongvi')
    }

    const user = await User.findById(req.user.id)

    // Check For User
    if(!user) {
        res.status(401)
        throw new Error('Хэрэглэгч олдсонгүй')
    }

    // Make sure the logged in user matches tl
    if(goal.user.toString() !== user.id) {
        res.status (401)
        throw new Error('Хэрэглэгч зөвшөөрөлгүй')
    }

    const updatedGoals = await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(200).json(updatedGoals)
})

// @desc Delete Goals
// @route DELETE /api/goals/:id
// @access Private
const deleteGoals = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)

    if(!goal) {
        res.status(400)
        throw new Error('Oldsngvo')
    }

    const user = await User.findById(req.user.id)

    // Check For User
    if(!user) {
        res.status(401)
        throw new Error('Хэрэглэгч олдсонгүй')
    }

    // Make sure the logged in user matches tl
    if(goal.user.toString() !== user.id) {
        res.status (401)
        throw new Error('Хэрэглэгч зөвшөөрөлгүй')
    }

    await goal.remove()

    res.status(200).json({ id: req.params.id })
})


module.exports = {
    getGoals,
    getPublicGoals,
    setGoals,
    updateGoals,
    deleteGoals
}