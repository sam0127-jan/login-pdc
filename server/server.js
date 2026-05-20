const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()

const app = express()

// Middlewares
app.use(cors())
app.use(express.json())

// MongoDB connect
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err))

// Test route
app.get("/", (req, res) => {
  res.send("Server is running")
})

// Import routes
const authRoutes = require("./routes/auth")
const adminRoutes = require("./routes/admin")
const testRoutes = require("./routes/test")
const resultRoutes = require("./routes/result")

// Use routes
app.use("/api/auth", authRoutes)
app.use("/api/admin", adminRoutes)
app.use("/api/tests", testRoutes)
app.use("/api/results", resultRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log("Server running on port", PORT)
})

const announcementRoutes = require("./routes/announcement")
const activityRoutes = require("./routes/activity")

app.use("/api/announcements", announcementRoutes)
app.use("/api/activities", activityRoutes)