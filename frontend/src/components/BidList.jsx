import { useEffect, useState } from "react"
import api from "../api/axios"
import HireButton from "./HireButton"

export default function BidList({ gigId, status }) {
  const [bids, setBids] = useState([])

  const fetchBids = async () => {
    const res = await api.get(`/bids/${gigId}`)
    setBids(res.data)
  }

  useEffect(() => {
    fetchBids()
  }, [gigId])

  return (
    <div className="border p-3 rounded space-y-3">
      <h3 className="font-semibold">Bids</h3>

      {bids.length === 0 && (
        <p className="text-sm text-gray-500 italic">No bids yet</p>
      )}

      {bids.map(b => (
        <div key={b._id} className="border p-3 rounded">
          <p className="font-semibold">{b.freelancerId.name}</p>
          <p>{b.message}</p>
          <p className="text-green-600 font-semibold">₹ {b.price}</p>
          <p className="text-sm text-gray-600">Status: {b.status}</p>

          {status === "open" && b.status === "pending" && (
            <HireButton bidId={b._id} />
          )}
        </div>
      ))}
    </div>
  )
}
