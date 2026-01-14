import Gig from "../models/gig.js"

export const createGig = async (req, res) => {
  try {
    const { title, description, budget } = req.body

    const gig = await Gig.create({
      title,
      description,
      budget,
      ownerId: req.userId
    })

    res.json(gig)
  } catch (err) {
    res.status(500).json({ message: "Server error" })
  }
}

export const getGigs = async (req, res) => {
  try {
    const search = req.query.search || ""

    const gigs = await Gig.find({
      status: "open",
      title: { $regex: search, $options: "i" }
    }).sort({ createdAt: -1 })

    res.json(gigs)
  } catch (err) {
    res.status(500).json({ message: "Server error" })
  }
}

export const getGigById = async (req, res) => {
  try {
    const gig = await Gig.findById(req.params.id)

    if (!gig) {
      return res.status(404).json({ message: "Gig not found" })
    }

    res.json(gig)
  } catch (err) {
    return res.status(400).json({ message: "Invalid gig ID" })
  }
}

