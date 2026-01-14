import { useState } from "react"
import api from "../../api/axios"
import { useNavigate } from "react-router-dom"

export default function Register() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: "", email: "", password: "" })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await api.post("/auth/register", form)
    navigate("/login")
  }

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input name="name" placeholder="Name" onChange={handleChange} className="border p-2"/>
        <input name="email" placeholder="Email" onChange={handleChange} className="border p-2"/>
        <input name="password" type="password" placeholder="Password" onChange={handleChange} className="border p-2"/>
        <button className="bg-black text-white p-2">Register</button>
      </form>
    </div>
  )
}
