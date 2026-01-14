import User from "../models/User.js"
import jwt from "jsonwebtoken"

export const getSession = async (req, res) => {
  try {
    const token = req.cookies[process.env.COOKIE_NAME]
    if (!token) return res.json({ user: null })

    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    const user = await User.findById(decoded.id).select("name email")

    res.json({ user })
  } catch {
    res.json({ user: null })
  }
}
