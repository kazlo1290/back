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
        required: [true, 'Нууц үг'],
        length: 8,
    },
    role: { 
        type: String, 
        ref: "Role", 
        required: [true, 'Role']
    },
    date: {
        type: String,
        default: Date,
        required: true,
    },
    role: {
        type: String,
        enum: ["0", "1", "2"],
        default: "2"
    }
},
    { 
        timestamps: { 
        createdAt: 'c_date',
        updatedAt: 'u_date',
        }
    }
)

module.exports = mongoose.model('User', userSchema)