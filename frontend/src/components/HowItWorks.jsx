export default function HowItWorks() {
  return (
    <section className="bg-slate-50 py-20 px-6">
      <div className="max-w-4xl mx-auto space-y-12">
        <h2 className="text-center text-2xl font-semibold">How it works</h2>

        <div className="grid grid-cols-2 gap-12 text-slate-700">

          <div>
            <h3 className="font-semibold mb-4 text-slate-900">For Clients</h3>
            <ul className="space-y-2 text-sm">
              <li>• Post a gig with your requirements</li>
              <li>• Receive bids from freelancers</li>
              <li>• Review proposals and hire the best match</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-slate-900">For Freelancers</h3>
            <ul className="space-y-2 text-sm">
              <li>• Browse open gigs</li>
              <li>• Submit proposals with pricing</li>
              <li>• Get hired and collaborate</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}
