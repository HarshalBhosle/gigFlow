import User from "../models/User.js"

export const updateProfile = async (req, res) => {
  const { name } = req.body
  const user = await User.findByIdAndUpdate(
    req.userId,
    { name },
    { new: true }
  )
  res.json({ name: user.name })
}
