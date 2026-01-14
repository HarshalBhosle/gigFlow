import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import api from "../api/axios"

export default function MyApplications() {
  const user = useSelector(s => s.user.user)
  const [applied, setApplied] = useState([])

  const fetchData = async () => {
    const bids = await api.get("/bids-user", { withCredentials: true })
    setApplied(bids.data)
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

      <h2 className="text-2xl font-semibold">My Applications</h2>

      {applied.length === 0 && (
        <p className="text-sm text-slate-500">You haven't applied to any gigs yet.</p>
      )}

      <div className="space-y-3">
        {applied.map(b => (
          <Link key={b._id} to={`/gig/${b.gigId._id}`} className="block border rounded-lg p-4 hover:shadow-sm transition">
            <div className="flex justify-between items-center">
              <span className="font-medium">{b.gigId.title}</span>
              <span className={`text-xs px-2 py-1 rounded capitalize ${
                b.status === "hired" ? "bg-green-100 text-green-700" :
                b.status === "rejected" ? "bg-red-100 text-red-700" :
                "bg-slate-100 text-slate-700"
              }`}>
                {b.status}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
