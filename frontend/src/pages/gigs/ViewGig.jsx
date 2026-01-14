import { useEffect, useState } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import api from "../../api/axios"
import { useSelector } from "react-redux"
import BidForm from "../../components/BidForm"
import BidList from "../../components/BidList"

export default function ViewGig() {
  const { id } = useParams()
  const navigate = useNavigate()
  const user = useSelector(state => state.user.user)

  const [gig, setGig] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  const fetchGig = async () => {
    try {
      const res = await api.get(`/gigs/${id}`)
      setGig(res.data)
    } catch (err) {
      if (err.response?.status === 404) {
        setError("Gig not found")
      } else {
        setError("Failed to load gig")
      }
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchGig()
  }, [id])

  if (loading) return <div className="p-6">Loading...</div>
  if (error) return (
    <div className="p-6">
      <p className="text-red-600 mb-3">{error}</p>
      <button onClick={() => navigate("/gigs")} className="underline text-sm">
        ← Back to Gigs
      </button>
    </div>
  )

  // Both stored as strings? Ensure consistent comparison
  const isOwner = user && String(gig.ownerId) === String(user.id)

  return (
    <div className="max-w-3xl mx-auto space-y-6 py-10">
      
      <Link to="/gigs" className="text-sm text-slate-600 hover:underline">
        ← Back to Gigs
      </Link>

      <div className="space-y-2">
        <div className="flex justify-between items-start">
          <h1 className="text-3xl font-semibold">{gig.title}</h1>
          <span className={`text-xs px-2 py-1 rounded capitalize ${
            gig.status === "assigned"
              ? "bg-blue-100 text-blue-700"
              : "bg-slate-100 text-slate-700"
          }`}>
            {gig.status}
          </span>
        </div>

        <p className="text-green-600 font-semibold text-lg">₹ {gig.budget}</p>
        <p className="text-slate-700">{gig.description}</p>
      </div>

      {/* SIDE: OWNER SEES BIDS / FREELANCER SEES BID FORM */}

      {isOwner ? (
        <BidList gigId={id} status={gig.status} />
      ) : user ? (
        <BidForm gigId={id} />
      ) : (
        <p className="text-sm text-slate-500 italic">
          Login to apply for this gig.
        </p>
      )}
    </div>
  )
}
