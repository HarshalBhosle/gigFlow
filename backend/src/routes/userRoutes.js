import express from "express"
import { requireAuth } from "../middleware/auth.js"
import { updateProfile } from "../controllers/userController.js"

const router = express.Router()
router.patch("/update", requireAuth, updateProfile)

export default router
