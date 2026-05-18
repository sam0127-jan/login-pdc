const express = require("express")
const router = express.Router()
const User = require("../models/User")

// REGISTER
router.post("/register", async (req, res) => {
    try {
        const user = new User(req.body)
        await user.save()
        res.json({ message: "User Registered" })
    } catch (err) {
        res.json({ error: err.message })
    }
})


// LOGIN (ADMIN + STUDENT)
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body

        const user = await User.findOne({ email, password })

        if (!user) {
            return res.json({ message: "Invalid credentials" })
        }

        res.json({
            message: "Login Success",
            role: user.role,
            user
        })

    } catch (err) {
        res.json({ error: err.message })
    }
})

module.exports = router