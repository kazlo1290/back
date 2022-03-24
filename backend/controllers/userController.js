const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler =  require('express-async-handler')
const User = require('../models/userModel')

// @desc Register New User
// @route POST /api/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password} = req.body

    if(!name || !email || !password) {
         res.status(400)
         throw new Error('Утга нэмнэ үү')
    }

    // Хэрэв хэрэглэгч бүртгэлтэй бол
    const userExists = await User.findOne({email})

    if(userExists) {
        res.status(400)
        throw new Error('Хэрэглэгч бүртгэлтэй байна')
    }

    // Нууц үг Hash
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // Шинэ хэрэглэгч
    const user = await User.create({
        name,
        email,
        password: hashedPassword,
    })

    if(user) {
        res.status(201).json({
            id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
        })
    } else {
        res.status(400)
        throw new Error('Буруу хэрэглэгчийн өгөгдөл')
    }
})

// @desc Authenticate a User
// @route POST /api/users/login
// @access Public
const loginUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body

    // email шалгах
    const user = await User.findOne({email})

    if(user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
        })
    } else {
        res.status(400)
        throw new Error('Буруу итгэмжлэл')
    }
})

// @desc Get User Data
// @route GET /api/users/me
// @access Private
const getMe = asyncHandler(async (req, res) => {
    const { _id, name, email } = await User.findById(req.user.id) 

    res.status (200).json({
        id: _id,
        name,
        email,
    })
})

// @desc Get User Data
// @route GET /api/users/all
// @access Public
const getAllUser = asyncHandler(async (req, res) => {
    const user = await User.find() 

    res.status(200).json(user)
})

// Generate JWT
const generateToken = (id) => {
    return jwt.sign({ id}, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
}

module.exports = {
    registerUser,
    loginUser,
    getMe,
    getAllUser,
}