const express = require("express")

const router = express.Router()

const User = require("../models/User")

// REGISTER
router.post("/register", async (req, res) => {

  try {

    const {
      name,
      email,
      password,
      branch,
      year,
      college,
    } = req.body

    const existingUser = await User.findOne({
      email,
    })

    if (existingUser) {

      return res.status(400).json({
        message: "Email already registered",
      })

    }

    const user = new User({

      name,

      email,

      password,

      branch,

      year,

      college,

      role: "student",

    })

    await user.save()

    res.status(201).json({

      message: "User Registered Successfully",

      user,

    })

  } catch (err) {

    res.status(500).json({
      error: err.message,
    })

  }

})

// LOGIN
router.post("/login", async (req, res) => {

  try {

    const {
      email,
      password,
    } = req.body

    const user = await User.findOne({
      email,
    })

    if (!user) {

      return res.status(401).json({
        message: "User not found",
      })

    }

    if (user.password !== password) {

      return res.status(401).json({
        message: "Wrong password",
      })

    }

    res.status(200).json({

      message: "Login Success",

      role: user.role,

      name: user.name,

      email: user.email,

      branch: user.branch,

      year: user.year,

      college: user.college,

      user,

    })

  } catch (err) {

    res.status(500).json({
      error: err.message,
    })

  }

})

module.exports = router