import { useSelector } from "react-redux"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import api from "../api/axios"

export default function Dashboard() {
  const user = useSelector(s => s.user.user)
  const [posted, setPosted] = useState([])
  const [applied, setApplied] = useState([])

  const fetchData = async () => {
    const gigs = await api.get("/gigs?search=")
    setPosted(gigs.data.filter(g => g.ownerId === user.id))

    const bids = await api.get("/bids-user", { withCredentials: true })
    setApplied(bids.data)
  }

  useEffect(() => {
    if (user) fetchData()
  }, [user])

  if (!user) return null

  return (
    <div className="space-y-10 p-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">Dashboard</h2>
        <span className="text-slate-600 text-sm">Hi, {user.name}</span>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <Link to="/post-gig" className="border rounded-lg p-5">Post a Gig</Link>
        <Link to="/gigs" className="border rounded-lg p-5">Explore Gigs</Link>
        <Link to="/my-gigs" className="border rounded-lg p-5">My Gigs</Link>
        <Link to="/my-applications" className="border rounded-lg p-5">My Applications</Link>
      </div>
    </div>
  )
}
