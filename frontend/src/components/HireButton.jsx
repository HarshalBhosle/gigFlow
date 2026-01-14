import api from "../api/axios"

export default function HireButton({ bidId }) {
  const handleHire = async () => {
    try {
      const res = await api.patch(
        `/bids/${bidId}/hire`,
        {},
        { withCredentials: true }
      )

      alert(res.data.message || "Hired successfully!")
      window.location.reload()
    } catch (err) {
      console.error(err.response?.data || err.message)
      alert(err.response?.data?.message || "Hire failed")
    }
  }

  return (
    <button onClick={handleHire} className="bg-blue-600 text-white px-3 py-1 mt-2">
      Hire
    </button>
  )
}
