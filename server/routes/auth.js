const express = require("express")
const router = express.Router()
const User = require("../models/User")

// REGISTER
router.post("/register", async (req, res) => {
    try {
        const { name, email, password } = req.body

        const user = new User({ name, email, password })
        await user.save()

        res.json({ message: "User Registered" })

    } catch (err) {
        res.json({ error: err.message })
    }
})

module.exports = router