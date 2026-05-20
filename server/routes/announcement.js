const express = require("express")
const router = express.Router()
const Announcement = require("../models/Announcement")

router.post("/create", async (req, res) => {
  try {
    const announcement = new Announcement(req.body)
    await announcement.save()
    res.json({ message: "Announcement Added", announcement })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

router.get("/", async (req, res) => {
  try {
    const announcements = await Announcement.find().sort({ date: -1 })
    res.json(announcements)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

module.exports = router