const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    nameI: {
        type: String,
        trim: true,
        required: true
    },
    imageI: {
        type: String,
        trim: true,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Category', categorySchema);