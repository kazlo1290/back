const mongoose = require('mongoose')
const moment = require('moment');
// const date = moment(new Date())
const locale = moment.locale();
const dateYMD = moment().format('L')
const dateT = moment().format('LT')
const postSchema = mongoose.Schema(
    {
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
        },
    title: {
        type: String,
        required: [true, "Title нэмнэ үү"],
        },
    content: {
        type: String,
        required: [true, "Content нэмнэ үү"],
        },
    imagePath: {
        type: String,
        },
    dateYMD: { 
        type: String, 
        default: dateYMD, 
        required: true,
        },
    dateT: {
        type: String,
        default: dateT,
        required: true,
    },
    author: { 
        type: String, 
        ref: "User", 
        required: true,
        },
    slug: {
        type: String,
        slug: "title",
    },
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Post', postSchema)