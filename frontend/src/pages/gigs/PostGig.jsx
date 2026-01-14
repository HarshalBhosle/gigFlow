import { useState } from "react"
import api from "../../api/axios"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

export default function PostGig() {
  const navigate = useNavigate()
  const user = useSelector(s => s.user.user)
  const [form, setForm] = useState({ title: "", description: "", budget: "" })

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    await api.post("/gigs", { ...form, ownerId: user.id })
    navigate("/gigs")
  }

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-3">Post a Gig</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input name="title" placeholder="Title" onChange={handleChange} className="border p-2" />
        <textarea name="description" placeholder="Description" onChange={handleChange} className="border p-2" />
        <input name="budget" type="number" placeholder="Budget" onChange={handleChange} className="border p-2" />
        <button className="bg-black text-white p-2">Post Gig</button>
      </form>
    </div>
  )
}
