const mongoose = require("mongoose")

const resultSchema = new mongoose.Schema({
  studentName: String,
  studentEmail: String,
  branch: String,
  year: String,

  testId: String,
  testTitle: String,

  score: Number,
  totalQuestions: Number,
  warnings: Number,

  submittedAt: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model("Result", resultSchema)