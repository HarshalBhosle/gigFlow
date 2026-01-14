import express from "express"
import { createGig, getGigs, getGigById } from "../controllers/gigController.js"
import { requireAuth } from "../middleware/auth.js"

const router = express.Router()

console.log("Gig routes loaded")


router.get("/", (req, res) => {
  getGigs(req, res)
})

router.post("/", requireAuth, createGig)
router.get("/:id", getGigById)

export default router
