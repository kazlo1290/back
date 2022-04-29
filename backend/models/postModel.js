const mongoose = require('mongoose')

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
    Date: { 
        type: String, 
        default: Date, 
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