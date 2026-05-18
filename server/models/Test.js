const mongoose = require("mongoose")

const questionSchema = new mongoose.Schema({
    question: String,
    options: [String],
    answer: String
})

const testSchema = new mongoose.Schema({
    title: String,
    description: String,
    duration: {
        type: Number,
        default: 300
    },
    warningLimit: {
        type: Number,
        default: 5
    },
    questions: [questionSchema],
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Test", testSchema)