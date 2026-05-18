const express = require("express")
const router = express.Router()
const Test = require("../models/Test")

// CREATE TEST
router.post("/create", async (req, res) => {
    try {
        const test = new Test(req.body)
        await test.save()

        res.json({
            message: "Test Created Successfully",
            test
        })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

// GET ALL TESTS
router.get("/", async (req, res) => {
    try {
        const tests = await Test.find().sort({ createdAt: -1 })
        res.json(tests)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

module.exports = router