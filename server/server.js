const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

require("dotenv").config()

const app = express()

// MIDDLEWARES
app.use(cors())

app.use(express.json())

// CONNECT MONGODB
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("MongoDB Connected")
  })
  .catch((err) => {
    console.log(err)
  })

// HOME ROUTE
app.get("/", (req, res) => {
  res.send("Server is running")
})

// IMPORT ROUTES
const authRoutes = require("./routes/auth")

const adminRoutes = require("./routes/admin")

const testRoutes = require("./routes/test")

const resultRoutes = require("./routes/result")

const announcementRoutes = require("./routes/announcement")

const activityRoutes = require("./routes/activity")

// USE ROUTES
app.use("/api/auth", authRoutes)

app.use("/api/admin", adminRoutes)

app.use("/api/tests", testRoutes)

app.use("/api/results", resultRoutes)

app.use("/api/announcements", announcementRoutes)

app.use("/api/activities", activityRoutes)

// PORT
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})