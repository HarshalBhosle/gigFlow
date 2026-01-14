import { useSelector, useDispatch } from "react-redux"
import { useState } from "react"
import api from "../api/axios"
import { setUser } from "../store/userSlice"
import { Link } from "react-router-dom"

export default function Profile() {
  const user = useSelector(s => s.user.user)
  const dispatch = useDispatch()
  const [name, setName] = useState(user.name)

  const handleSave = async () => {
    const res = await api.patch("/users/update", { name })
    dispatch(setUser({ ...user, name: res.data.name }))
  }

  return (
    <div className="max-w-sm mx-auto py-20 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold">Profile</h1>
        <p className="text-slate-600 text-sm">Manage your account</p>
      </div>

      <div className="space-y-4 text-sm">
        <div className="space-y-1">
          <label className="text-slate-700">Name</label>
          <input
            className="w-full border rounded px-3 py-2"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>

        <div className="space-y-1">
          <label className="text-slate-700">Email</label>
          <input
            className="w-full border rounded px-3 py-2 bg-slate-50 cursor-not-allowed"
            value={user.email}
            readOnly
          />
        </div>

        <button
          onClick={handleSave}
          className="w-full bg-black text-white rounded py-2"
        >
          Save Changes
        </button>

        <div className="text-slate-600 flex justify-end">
          <Link to="/dashboard" className="text-sm underline">
            Back to Dashboard
          </Link>
        </div>
      </div>
    </div>
  )
}
