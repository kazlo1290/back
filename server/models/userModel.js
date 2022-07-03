const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
    {
    username: {
        type: String,
        required: [true,  'Нэвтрэх нэр'],
        unique: true,
        min: 3,
        max: 20,
    },
    name: {
        type: String,
        required: [true, 'Нэр']
    },
    email: {
        type: String,
        max: 50,
        required: [false, 'Имэйл'],   
    },
    phone: {
        type: Number,
        required: [false, 'Утас'],    
    },
    password: {
        type: String,
        required: [true, 'Нууц үг'],
        min: 8,
    },
    profileImg: {
        type: String,
        trim: true,
        default: "",
    },
    date: {
        type: String,
        default: Date,
        required: true,
    },
    verify: {
        type: Boolean,
        default: "no"
    },
    organization: {
        type: String,
        default: "0"
    },
    role: {
        type: String,
        enum: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        default: "9"
    },
    theme: {
        type: String,
        enum: ["theme", "theme_black"],
        default: "theme"
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