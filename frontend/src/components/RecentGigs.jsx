import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import api from "../api/axios"

export default function RecentGigs() {
  const [gigs, setGigs] = useState([])

  useEffect(() => {
    api.get("/gigs").then(res => setGigs(res.data.slice(0,6)))
  }, [])

  return (
    <section className="px-8 py-16">
      <h2 className="text-xl font-semibold mb-6">Recent Gigs</h2>

      <div className="grid grid-cols-3 gap-6">
        {gigs.map(g => (
          <Link key={g._id} to={`/gig/${g._id}`}>
            <div className="border rounded p-4 hover:shadow-sm">
              <h3 className="font-semibold">{g.title}</h3>
              <p className="text-sm text-gray-600 line-clamp-2">{g.description}</p>
              <p className="mt-2 text-green-600 font-semibold">₹ {g.budget}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
