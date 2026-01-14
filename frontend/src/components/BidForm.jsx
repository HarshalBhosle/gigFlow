import { useState } from "react"
import api from "../api/axios"

export default function BidForm({ gigId }) {
  const [form, setForm] = useState({ message: "", price: "" })

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    await api.post("/bids", { ...form, gigId })
    alert("Bid submitted!")
  }

  return (
    <form onSubmit={handleSubmit} className="border p-3 space-y-3 rounded">
      <h3 className="font-semibold">Apply for this Gig</h3>
      <textarea name="message" onChange={handleChange} placeholder="Cover message" className="border p-2 w-full"/>
      <input name="price" type="number" placeholder="Your price" onChange={handleChange} className="border p-2 w-full"/>
      <button className="bg-black text-white p-2 w-full">Submit Bid</button>
    </form>
  )
}
