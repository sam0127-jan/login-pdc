const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()

const app = express()

app.use(cors())
app.use(express.json())

// MongoDB connect
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err))

// test route
app.get("/", (req, res) => {
    res.send("Server is running")
})


// 🚀 IMPORT ROUTES (IMPORTANT)
const authRoutes = require("./routes/auth")

// 🚀 USE ROUTES
app.use("/api/auth", authRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log("Server running on port", PORT)
})

const adminRoutes = require("./routes/admin")

app.use("/api/admin", adminRoutes)

const testRoutes = require("./routes/test")
app.use("/api/tests", testRoutes)