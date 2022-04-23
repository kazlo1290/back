const asyncHandler =  require('express-async-handler')
const Role = require('../models/roleModel')
const User = require('../models/userModel')

// @desc Register New Role
// @route POST /api/roles
// @access Private
const newRole = asyncHandler(async (req, res) => {
    const { name, id} = req.body

    if (!name || !id) {
        res.status(400)
        throw new Error('Утга нэмнэ үү')
    }
    // Хэрэв Role бүртгэлтэй бол
    const roleExists = await Role.findOne({id})

    if(roleExists) {
        res.status(400)
        throw new Error('Role бүртгэлтэй байна')
    }


    const role = await Role.create({
        name: req.body.name,
        id: req.body.id,
        user: req.user.id,
        author: req.user.name,
    })

    res.status(200).json(role)
})


// @desc Get Role
// @route GET /api/roles/
// @access Private
const getRole = asyncHandler(async (req, res) => {
    const roles = await Role.find({ user: req.user.id })

    res.status(200).json(roles)
})


// @desc Update Role
// @route PUT /api/roles/:id
// @access Private
const updateRole = asyncHandler(async (req, res) => {
    const role = await Role.findById(req.params.id)

    if(!role) {
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
    if(role.user.toString() !== user.id) {
        res.status (401)
        throw new Error('Хэрэглэгч зөвшөөрөлгүй')
    }

    const updatedRole = await Role.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(200).json(updatedRole)
})

const deleteRole = asyncHandler(async (req, res) => {
    const role = await Role.findById(req.params.id)

    if(!role) {
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
    if(role.user.toString() !== user.id) {
        res.status (401)
        throw new Error('Хэрэглэгч зөвшөөрөлгүй')
    }

    await role.remove()

    res.status(200).json({ id: req.params.id })
})


module.exports = {
    newRole,
    getRole,
    updateRole,
    deleteRole,
}