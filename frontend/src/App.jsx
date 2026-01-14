import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { fetchSession } from "./store/userSlice"
import Home from "./pages/Home"
import Register from "./pages/auth/Register"
import Login from "./pages/auth/Login"
import ListGigs from "./pages/gigs/ListGigs"
import PostGig from "./pages/gigs/PostGig"
import ViewGig from "./pages/gigs/ViewGig"
import Dashboard from "./pages/Dashboard"
import ProtectedRoute from "./components/ProtectedRoute"
import HowItWorksPage from "./pages/HowItWorks"
import MainLayout from "./layout/MainLayout"
import Profile from "./pages/Profile"
import MyGigs from "./pages/MyGigs"
import MyApplications from "./pages/MyApplications"



export default function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchSession())
  }, [dispatch])

  return (
    <BrowserRouter>
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/gigs" element={<ListGigs />} />
        <Route path="/post-gig" element={<ProtectedRoute><PostGig /></ProtectedRoute>} />
        <Route path="/gig/:id" element={<ViewGig />} />
        <Route path="/dashboard" element={
          <ProtectedRoute>
          <Dashboard />
          </ProtectedRoute>
        } />      
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/my-gigs" element={<MyGigs />} />
<Route path="/my-applications" element={<MyApplications />} />


      </Routes>
      </MainLayout>
    </BrowserRouter>
  )
}
