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
        required: [true, 'Нэрээ']
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
    images: {
        profilePicture: {
            type: String,
            trim: true,
            default: "",
        },
        profilePictureName: {
            type: String,
            trim: true,
            default: "",
        },
    },
    followers: {
      type: Array,
      default: [],
    },
    followings: {
      type: Array,
      default: [],
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