import { Link } from "react-router-dom"

export default function Hero() {
  return (
    <section className="max-w-4xl mx-auto text-center py-28 space-y-6 px-6">
      <h1 className="text-5xl font-semibold tracking-tight">
        Hire skilled freelancers.
      </h1>

      <p className="text-slate-600 text-lg max-w-xl mx-auto">
        Post projects, receive bids, and collaborate with professionals — all in one straightforward workspace.
      </p>

      <div className="flex justify-center gap-4 pt-4">
        <Link
          to="/post-gig"
          className="bg-black text-white rounded px-5 py-3 text-sm"
        >
          Post a Gig
        </Link>

        <Link
          to="/gigs"
          className="border border-slate-300 rounded px-5 py-3 text-sm"
        >
          Browse Gigs
        </Link>
      </div>
    </section>
  )
}
