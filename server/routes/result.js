const express = require("express")

const router = express.Router()

const Test = require("../models/Test")

// CREATE TEST
router.post("/create", async (req, res) => {

  try {

    const test = new Test(req.body)

    await test.save()

    res.json({
      message: "Test Published Successfully",
      test,
    })

  } catch (err) {

    res.status(500).json({
      error: err.message,
    })

  }

})

// GET ALL TESTS
router.get("/", async (req, res) => {

  try {

    const tests = await Test.find()
      .sort({ createdAt: -1 })

    res.json(tests)

  } catch (err) {

    res.status(500).json({
      error: err.message,
    })

  }

})

// GET SINGLE TEST
router.get("/:id", async (req, res) => {

  try {

    const test = await Test.findById(req.params.id)

    res.json(test)

  } catch (err) {

    res.status(500).json({
      error: err.message,
    })

  }

})

// DELETE TEST
router.delete("/:id", async (req, res) => {

  try {

    await Test.findByIdAndDelete(req.params.id)

    res.json({
      message: "Test Deleted Successfully",
    })

  } catch (err) {

    res.status(500).json({
      error: err.message,
    })

  }

})

module.exports = router