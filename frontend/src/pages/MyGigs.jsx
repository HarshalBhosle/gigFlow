import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import api from "../api/axios"

export default function MyGigs() {
  const user = useSelector(s => s.user.user)
  const [posted, setPosted] = useState([])

  const fetchData = async () => {
    const gigs = await api.get("/gigs?search=")
    setPosted(gigs.data.filter(g => g.ownerId === user.id))
  }

  useEffect(() => {
    if (user) fetchData()
  }, [user])

  if (!user) return null

  return (
    <div className="max-w-4xl mx-auto py-10 space-y-6">

      <Link to="/dashboard" className="text-sm text-slate-600 hover:underline">
        ← Back to Dashboard
      </Link>

      <h2 className="text-2xl font-semibold">My Gigs</h2>

      {posted.length === 0 && (
        <p className="text-sm text-slate-500">You haven't posted any gigs yet.</p>
      )}

      <div className="space-y-3">
        {posted.map(g => (
          <Link key={g._id} to={`/gig/${g._id}`} className="block border rounded-lg p-4 hover:shadow-sm transition">
            <div className="flex justify-between items-center">
              <span className="font-medium">{g.title}</span>
              <span className="text-xs bg-slate-100 px-2 py-1 rounded capitalize">
                {g.status}
              </span>
            </div>
            <p className="text-green-600 font-semibold text-sm">₹ {g.budget}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
