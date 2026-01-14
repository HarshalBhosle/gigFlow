import Bid from "../models/Bid.js"
import Gig from "../models/gig.js"

export const submitBid = async (req, res) => {
  try {
    const { gigId, message, price } = req.body

    const gig = await Gig.findById(gigId)
    if (!gig) return res.status(404).json({ message: "Gig not found" })

    if (gig.status !== "open") {
      return res.status(400).json({ message: "Gig is already assigned" })
    }

    const bid = await Bid.create({
      gigId,
      message,
      price,
      freelancerId: req.userId
    })

    res.json(bid)
  } catch (err) {
    res.status(500).json({ message: "Server error" })
  }
}

export const getBidsForGig = async (req, res) => {
  try {
    const { gigId } = req.params
    const gig = await Gig.findById(gigId)

    if (!gig) return res.status(404).json({ message: "Gig not found" })

    // ensure owner only can view
    if (gig.ownerId.toString() !== req.userId) {
      return res.status(403).json({ message: "Forbidden" })
    }

    const bids = await Bid.find({ gigId }).populate("freelancerId", "name email")
    res.json(bids)
  } catch (err) {
    res.status(500).json({ message: "Server error" })
  }
}

export const hireBid = async (req, res) => {
  try {
    const { bidId } = req.params

    const bid = await Bid.findById(bidId)
    if (!bid) return res.status(404).json({ message: "Bid not found" })

    const gig = await Gig.findById(bid.gigId)
    if (!gig) return res.status(404).json({ message: "Gig not found" })

    if (gig.ownerId.toString() !== req.userId) {
      return res.status(403).json({ message: "Forbidden" })
    }

    if (gig.status !== "open") {
      return res.status(400).json({ message: "Gig already assigned" })
    }

    // Assign gig to freelancer
    gig.status = "assigned"
    await gig.save()

    // Update hired bid
    bid.status = "hired"
    await bid.save()

    // Reject all other pending bids
    await Bid.updateMany(
      { gigId: gig._id, _id: { $ne: bid._id } },
      { status: "rejected" }
    )

    return res.json({ message: "Freelancer hired successfully!" })
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: "Server error" })
  }
}

