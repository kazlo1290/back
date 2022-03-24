const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
    {
    name: {
        type: String,
        required: [true, 'Нэрээ оруулна уу']
    },
    email: {
        type: String,
        required: [true, 'Имэйл оруулна уу'],   
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Нууц үгээ оруулна уу']
    },
    role: {
        type: String,
        required: [true, 'Role']
    },
},
{
    timestamps: true,
}
)

module.exports = mongoose.model('User', userSchema)