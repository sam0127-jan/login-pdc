const express = require("express")

const router = express.Router()

const Result = require("../models/Result")

// SUBMIT RESULT
router.post("/submit", async (req, res) => {

  try {

    const result = new Result(req.body)

    await result.save()

    res.json({
      message: "Result Submitted Successfully",
      result,
    })

  } catch (err) {

    res.status(500).json({
      error: err.message,
    })

  }

})

// GET ALL RESULTS
router.get("/", async (req, res) => {

  try {

    const results = await Result.find().sort({
      createdAt: -1,
    })

    res.json(results)

  } catch (err) {

    res.status(500).json({
      error: err.message,
    })

  }

})

module.exports = router