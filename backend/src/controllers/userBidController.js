import Bid from "../models/Bid.js"

export const getUserBids = async (req, res) => {
  try {
    const bids = await Bid.find({ freelancerId: req.userId })
      .populate("gigId", "title status")
      .populate("freelancerId", "name email")
    
    res.json(bids)
  } catch (err) {
    res.status(500).json({ message: "Server error" })
  }
}
