const express = require("express")
const router = express.Router()

const Result = require("../models/Result")

// SAVE RESULT
router.post("/submit", async (req, res) => {
  try {

    const result = new Result(req.body)

    await result.save()

    res.json({
      message: "Result Saved Successfully",
    })

  } catch (err) {

    res.status(500).json({
      error: err.message,
    })

  }
})


// ADMIN GET ALL RESULTS
router.get("/", async (req, res) => {
  try {

    const results = await Result.find()
      .sort({ submittedAt: -1 })

    res.json(results)

  } catch (err) {

    res.status(500).json({
      error: err.message,
    })

  }
})

module.exports = router