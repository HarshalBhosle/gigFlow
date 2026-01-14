# GigFlow — Mini Freelance Marketplace Platform

GigFlow is a full-stack marketplace application where clients post gigs and freelancers submit proposals, get hired, and track application status. It was developed as a technical assignment to demonstrate full-stack development, authentication, CRUD, database design, hiring workflow, and enterprise UX.

---

## 📦 Project Stack

**Frontend**
- React (Vite)
- Redux Toolkit
- React Router v6
- TailwindCSS
- Axios

**Backend**
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Auth + Cookies

---

## 🧩 Key Features

### 👤 **Identity & Auth**
- Register + Login
- JWT authentication
- Dashboard with unified role view
- Profile update (name only)

### 🧾 **Client Role**
- Post new gigs
- View posted gigs
- Review applicant bids
- Hire a freelancer (assign gig)

### 💼 **Freelancer Role**
- Browse gigs
- Search gigs
- Submit bid/proposal
- Track status (`pending → hired/rejected`)

### 🔁 **Hiring Workflow**

Once assigned:
- Bid form is hidden
- Other bids marked `rejected`
- Status synced across dashboards

### 🎨 **Enterprise UX**
- Low density layout
- Status badges
- Back navigation
- Empty states
- Consistent spacing & typography
- Search with `Enter + Clear`
- No avatar image (text identity only)

---

## 🗂️ Repository Structure

.
├── client/ # React frontend
└── server/ # Node backend


---

## ⚙️ Environment Variables

### **Backend `.env`**


MONGO_URI=YOUR_MONGODB_CONNECTION
JWT_SECRET=YOUR_SECRET   
PORT=5000   
COOKIE_NAME=



---

## 🛠️ Installation & Setup

Clone repository:

```sh
git clone https://github.com/username/gigflow.git
cd gigflow

1. Backend Setup
cd server
npm install


Create .env (example above)

Start backend:

npm start


Backend will run at:

http://localhost:5000

2. Frontend Setup
cd ../client
npm install


Create .env (example above)

Run frontend:

npm run dev


Frontend runs at:

http://localhost:5173

🌐 Communication Layer

Frontend calls backend via Axios using base URL:

VITE_API_BASE_URL + /auth | /gigs | /bids
