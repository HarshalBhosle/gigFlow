export default function Footer() {
  return (
    <footer className="border-t py-6 text-center text-sm text-slate-600">
      <div className="max-w-6xl mx-auto flex justify-between px-6">
        <span>GigFlow © {new Date().getFullYear()}</span>
        <div className="flex gap-6">
          <a href="#" className="hover:underline">Terms</a>
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Contact</a>
        </div>
      </div>
    </footer>
  )
}
