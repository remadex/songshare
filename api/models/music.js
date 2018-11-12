const mongoose = require('mongoose')



let musicSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
        trim: true
    },
    autor: {
        type: String,
        trim: true,
        unique: true,
        lowercase: true
    },
    path: String,
    img: String,
    year: String,
    timestamp: Date,
    genre: [String],
    description: String
});


module.exports = mongoose.model("music", musicSchema);