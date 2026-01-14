import Hero from "../components/Hero"
import HowItWorks from "../components/HowItWorks"
import RecentGigs from "../components/RecentGigs"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <div className="bg-white text-slate-900">
      <Hero />
      <HowItWorks />
      <RecentGigs />
      <Footer />
    </div>
  )
}
