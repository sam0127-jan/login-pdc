const mongoose = require("mongoose")

const activitySchema = new mongoose.Schema({
  title: String,
  date: String,
  venue: String,
  description: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model("Activity", activitySchema)