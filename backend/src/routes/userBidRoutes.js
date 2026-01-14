import express from "express"
import { getUserBids } from "../controllers/userBidController.js"
import { requireAuth } from "../middleware/auth.js"

const router = express.Router()

router.get("/", requireAuth, getUserBids)

export default router
