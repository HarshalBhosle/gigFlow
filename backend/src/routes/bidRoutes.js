import express from "express"
import { submitBid, getBidsForGig, hireBid } from "../controllers/bidController.js"
import { requireAuth } from "../middleware/auth.js"

const router = express.Router()

router.post("/", requireAuth, submitBid)
router.get("/:gigId", requireAuth, getBidsForGig)
router.patch("/:bidId/hire", requireAuth, hireBid)

export default router
