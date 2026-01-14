import { NavLink, Link, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { logout } from "../store/userSlice"
import { useState } from "react"

export default function Navbar() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector(s => s.user.user)
  const [open, setOpen] = useState(false)

  const handleLogout = () => {
    dispatch(logout())
    navigate("/")
  }

  return (
    <nav className="border-b bg-white text-slate-900">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="font-semibold text-xl tracking-tight">
          GigFlow
        </Link>

        <div className="flex gap-6 text-sm">
          <NavLink to="/gigs">Explore Gigs</NavLink>

          {user && <NavLink to="/post-gig">Post Gig</NavLink>}

          <NavLink to="/how-it-works">How It Works</NavLink>
        </div>

        {!user ? (
          <div className="flex gap-3">
            <Link to="/login" className="text-sm">Login</Link>
            <Link to="/register" className="text-sm px-3 py-2 rounded bg-black text-white">
              Sign Up
            </Link>
          </div>
        ) : (
          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center gap-2 text-sm border px-3 py-2 rounded"
            >
              Hi, {user.name?.split(" ")[0]}
              <span className="text-slate-500">▾</span>
            </button>

            {open && (
              <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow">
                <Link to="/dashboard" className="block px-4 py-2" onClick={() => setOpen(false)}>Dashboard</Link>
                <Link to="/profile" className="block px-4 py-2" onClick={() => setOpen(false)}>Profile</Link>
                <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-red-600">
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  )
}
