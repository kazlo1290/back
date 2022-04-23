const mongoose = require('mongoose')

const roleSchema = mongoose.Schema(
    {
    name: {
        type: String,
        required: [true, 'Role нэр']
    },
    id: {
        type: String,
        required: [true, 'Role ID']
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
        },
    author: { 
        type: String, 
        ref: "User", 
        required: true,
        },
    },
    {
    timestamps: true,
    }
)

module.exports = mongoose.model('Role', roleSchema)