import { useEffect, useState } from "react"
import api from "../../api/axios"
import { Link } from "react-router-dom"

export default function ListGigs() {
  const [gigs, setGigs] = useState([])
  const [search, setSearch] = useState("")

  const fetchGigs = async () => {
    const res = await api.get(`/gigs?search=${search}`)
    setGigs(res.data)
  }

  useEffect(() => {
    fetchGigs()
  }, [])

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-6">
      
      {/* Search Bar */}
      <div className="flex gap-2">
        <input
          placeholder="Search gigs..."
          className="border rounded px-3 py-2 w-full text-sm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && fetchGigs()}
        />
        <button
          onClick={fetchGigs}
          className="px-4 py-2 border rounded text-sm hover:bg-slate-50"
        >
          Search
        </button>
      </div>

      {/* Gig Results */}
      <div className="space-y-3">
        {gigs.length === 0 && (
          <p className="text-center text-sm text-slate-500">
            No gigs found. Try a different search.
          </p>
        )}

        {gigs.map(g => (
          <Link key={g._id} to={`/gig/${g._id}`}>
            <div className="border rounded-lg p-4 hover:shadow-sm transition space-y-1">

              {/* Title + Status */}
              <div className="flex justify-between items-start">
                <h3 className="font-medium text-lg">{g.title}</h3>

                <span className={`text-xs px-2 py-1 rounded capitalize ${
                  g.status === "assigned"
                    ? "bg-blue-100 text-blue-700"
                    : "bg-slate-100 text-slate-700"
                }`}>
                  {g.status}
                </span>
              </div>

              {/* Budget */}
              <p className="text-green-600 font-semibold text-sm">
                ₹ {g.budget}
              </p>

              {/* Description */}
              <p className="text-sm text-slate-600 line-clamp-2">
                {g.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
