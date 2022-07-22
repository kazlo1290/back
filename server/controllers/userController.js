const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const asyncHandler =  require('express-async-handler')
const User = require('../models/userModel')
const Sitedata = require('../json/Sitedata.json')
const userRole = Sitedata.role;

// @desc Register New User
// @route POST /users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
    const { username, name, email, phone, password} = req.body

    if(!username || !name || !password) {
         res.status(400)
         throw new Error('Утга нэмнэ үү')
    }
    // Хэрэв хэрэглэгч бүртгэлтэй бол
    const userNameExists = await User.findOne({username})
    const userPhoneExists = await User.findOne({phone})
    const userEmailExists = await User.findOne({email})
    if(userNameExists) {
        res.status(400)
        throw new Error('Нэвтрэх нэр бүртгэлтэй байна')
    }
    if(phone){
        if(userPhoneExists) {
            res.status(400)
            throw new Error('Дугаар бүртгэлтэй байна')
        }
    }
    if(email){
        if(userEmailExists) {
            res.status(400)
            throw new Error('Имэйл бүртгэлтэй байна')
        }
    }

    // Нууц үг Hash
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // Шинэ хэрэглэгч
    const user = await User.create({
        username,
        name,
        email,
        phone,
        password: hashedPassword,
    })

    if(user) {
        res.status(201).json({
            _id: user.id,
            username: user.username,
            name: user.name,
            email: user.email,
            phone: user.phone,
            profileImg: user.profileImg,
            date: user.date,
            verify: user.verify,
            organization: user.organization,
            role: user.role,
            theme: user.theme,
            c_date: user.c_date,
            token: generateToken(user._id),
        })
    } else {
        res.status(400)
        throw new Error('Алдаа: Дахин оролдоно уу!')
    }
})

// @desc Authenticate a User
// @route POST /users/login
// @access Public
const userLogin = asyncHandler(async (req, res) => {
    const {username, password} = req.body

     if(!username || !password) {
        res.status(400)
        throw new Error('Алдаа: Мэдээллээ оруулна уу!')
     }
    // Хэрэглэгч шалгах
    const user = await User.findOne({username})

    if(!user){
        res.status(400)
        throw new Error('Хаяг олдсонгүй')
    }
    if(user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user.id,
            username: user.username,
            name: user.name,
            email: user.email,
            phone: user.phone,
            role: user.role,
            theme: user.theme,
            c_date: user.c_date,
            token: generateToken(user._id),
        })
    } else if(password !== user.password){
        res.status(400)
        throw new Error('Нууц үг буруу')
    }
})

// @desc Get User Data
// @route GET /api/users/me
// @access Private
const getMe = asyncHandler(async (req, res) => {
    const me = await User.findById(req.user.id) 

    res.status (200).json({me})
})

// @desc Get Other User Pro
// @route GET /users/:username
// @access Public
const getUserPro = asyncHandler(async (req, res) => {
    const userName = await User.findOne({username:req.params.username})

    if(!userName) {
         res.status(400)
        throw new Error('Алдаа: Хэрэглэгч олдсонгүй')
    }
     res.status(200).json({
        _id: userName._id,
        username: userName.username,
        profileImg: userName.profileImg,
        coverImg: userName.coverImg,
        followers: userName.followers,
        followings: userName.followings,
     })
})

// @desc Get User Data
// @route GET /api/users/all
// @access Private
const getAllUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user.id) 
    const allUser = await User.find().sort([['c_date', -1]])

    if(userRole.super_admin && userRole.admin !== user.role){
        res.status(400)
        throw new Error('Нэвтрэх эрхгүй')  
    }else {
        res.status(200).json(allUser)
    }
})

// @desc Update User Data
// @route PUT /api/users/:id
// @access Private
const updateUser = asyncHandler(async (req, res) => {
    const user = await User.findOne({id:req.params.id})
    // Хэрэглэгч шалгах
    if(!user) {
        res.status(401)
        throw new Error('Хэрэглэгч олдсонгүй')
    }

    if (req.body.id === req.params.id || req.user.role === userRole.super_admin && userRole.admin) {
    // Хэрэв бүртгэлтэй бол
    const {role, email, phone, username, password} = req.body
    if (password) {
        try {
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
        } catch (err) {
            return res.status(500).json(err);
        }
    }
    const userNameExists = await User.findOne({username})
    const userPhoneExists = await User.findOne({phone})
    const userEmailExists = await User.findOne({email})
    const roleDetect = await User.findOne({role})
    if(username){
        if(userNameExists) {
            res.status(400)
            throw new Error('Нэвтрэх нэр бүртгэлтэй байна')
        }
    }
    if(phone){
        if(userPhoneExists) {
            res.status(400)
            throw new Error('Дугаар бүртгэлтэй байна')
        }
    }
    if(email){
        if(userEmailExists) {
            res.status(400)
            throw new Error('Имэйл бүртгэлтэй байна')
        }
    }
    if (roleDetect !== '0') {
        if(role){
        res.status (401)
        throw new Error('Role өөрчлөх эрхгүй')
        }
    }
        try {
            const updatedUser = await User.findByIdAndUpdate(req.body.id, req.body, {
            new: true,
            })
            res.status(200).json({
                updatedUser,
                message: 'Амжилттай шинэчиллээ',
            })} catch(err) {
            res.status (401)
            throw new Error("Хэрэглэгч зөвшөөрөлгүй")
        }
    } else {
        res.status(403)
        throw new Error("Та зөвхөн өөрийн хаягаа засах боломжтой!");
    }
})

// @desc Delete User Data
// @route DELETE /api/users/:id
// @access Private
const deleteUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id) 
    // Хэрэглэгч шалгах
    if(!user) {
        res.status(401)
        throw new Error('Хэрэглэгч олдсонгүй')
    }

    if (req.body.id === req.params.id || req.user.role === userRole.super_admin && userRole.admin) {
        try {
        await user.remove();
        res.status(200).json({
            id: req.params.id,
            message: 'Хаяг амжилттай устгалаа',
        })
        } catch(err){
            res.status (401)
            throw new Error('Хэрэглэгч зөвшөөрөлгүй')
        }
    } else {
        res.status(403)
        throw new Error ("Та зөвхөн өөрийн хаягаа устгах боломжтой!");
    }
})

// Generate JWT
const generateToken = (id) => {
    return jwt.sign({ id}, process.env.JWT_SECRET, {
        expiresIn: '5d',
    })
}

module.exports = {
    registerUser,
    userLogin,
    getMe,
    getAllUser,
    updateUser,
    deleteUser,
    getUserPro,
}