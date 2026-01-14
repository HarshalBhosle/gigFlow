import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import dotenv from "dotenv"
import { connectDB } from "./utils/db.js"
import authRoutes from "./routes/authRoutes.js"
import gigRoutes from "./routes/gigRoutes.js"
import bidRoutes from "./routes/bidRoutes.js"
import sessionRoutes from "./routes/sessionRoutes.js"
import userBidRoutes from "./routes/userBidRoutes.js"
import userRoutes from "./routes/userRoutes.js"




dotenv.config()

const app = express()

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
  methods: ["GET", "POST", "PATCH", "PUT", "DELETE"]
}))

app.use(express.json())
app.use(cookieParser())
app.use("/api/auth", authRoutes)
app.use("/api/gigs", gigRoutes)
app.use("/api/bids", bidRoutes)
app.use("/api/session", sessionRoutes)
app.use("/api/bids-user", userBidRoutes)
app.use("/api/users", userRoutes)

app.get("/", (req, res) => {
  res.send("GigFlow Backend Running")
})

connectDB()

app.listen(process.env.PORT, () => {
  console.log("Server running on port", process.env.PORT)
})
