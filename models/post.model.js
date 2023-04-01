// modules
const mongoose = require('mongoose');

const postSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    title: {
      type: String,
      required: [true, 'Title нэмнэ үү'],
    },
    content: {
      type: String,
      required: [true, 'Content нэмнэ үү'],
    },
    imagePath: {
      type: String,
    },
    status: {
      type: String,
      enum: ['ноорог', 'нийтэлсэн', 'устгасан'],
      default: 'ноорог',
    },
    date: {
      type: String,
      default: Date,
      required: true,
    },
    author: {
      type: String,
      ref: 'User',
      required: true,
    },
    slug: {
      type: String,
      slug: 'title',
    },
  },
  {
    timestamps: {
      createdAt: 'c_date',
      updatedAt: 'u_date',
    },
  },
);

module.exports = mongoose.model('Post', postSchema);
