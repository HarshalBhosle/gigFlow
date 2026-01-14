import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import api from "../../api/axios"
import { useDispatch } from "react-redux"
import { setUser } from "../../store/userSlice"

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" })
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await api.post("/auth/login", form)
    dispatch(setUser(res.data.user))
    navigate("/dashboard")
  }

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  return (
    <div className="max-w-sm mx-auto py-20 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold">Sign in</h1>
        <p className="text-slate-600 text-sm">Access your GigFlow workspace</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-1">
          <label className="text-sm text-slate-700">Email</label>
          <input
            name="email"
            placeholder="you@example.com"
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 text-sm"
          />
        </div>

        <div className="space-y-1">
          <label className="text-sm text-slate-700">Password</label>
          <input
            name="password"
            type="password"
            placeholder="••••••••"
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 text-sm"
          />
        </div>

        <button className="w-full bg-black text-white rounded py-2 text-sm">
          Sign in
        </button>
      </form>

      <div className="text-sm text-slate-600 flex justify-between">
        <Link to="/register">Create Account</Link>
        <Link to="/">Back to Home</Link>
      </div>
    </div>
  )
}
