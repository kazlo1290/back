const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
    {
    username: {
        type: String,
        required: [true,  'Нэвтрэх нэр'],
        unique: true,
    },
    name: {
        type: String,
        required: [true, 'Нэрээ']
    },
    email: {
        type: String,
        required: [false, 'Имэйл'],   
    },
    phone: {
        type: Number,
        required: [false, 'Утас'],    
    },
    user_img: {
        data: Buffer,
        contentType: String
    },
    password: {
        type: String,
        required: [true, 'Нууц үг']
    },
    role: { 
        type: String, 
        ref: "Role", 
        required: [true, 'Role']
    },
    registeredDate: { 
        type: String, 
        default: Date,
        required: true,
    },
    lastActive: { 
        type: String, 
        default: Date,
        required: true,
    },
},
{
    timestamps: true,
}
)

module.exports = mongoose.model('User', userSchema)