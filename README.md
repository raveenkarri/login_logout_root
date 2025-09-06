# 🔐 React + Node.js Authentication (SQLite)

A simple **Login & Logout Flow** project built with **React.js (frontend)**, **Node.js + Express (backend)**, and **SQLite (database)**.  
It demonstrates user registration, login, cookie-based session handling, and protected routes.

---

## 🚀 Features
- ✅ User Registration (email + password)
- ✅ Passwords hashed with **bcrypt**
- ✅ Login with **sessions (cookies)**
- ✅ Stay logged in until logout
- ✅ Logout clears the session
- ✅ Protected `/dashboard` route (only accessible when logged in)
- ✅ SQLite database (lightweight, file-based)
- ✅ Modern **promise-based queries** with `sqlite` + `sqlite3`

---

## 📂 Project Structure
project-root/
│── backend/
│ ├── db.js # SQLite connection (promise-based)
│ ├── server.js # Express app
│ ├── routes/
│ │ ├── auth.js # Authentication routes
│ ├── package.json
│
│── frontend/
│ ├── src/
│ │ ├── App.js
│ │ ├── components/
│ │ │ ├── Login.js
│ │ │ ├── Register.js
│ │ │ ├── Dashboard.js
│ ├── package.json
│
│── README.md

yaml
Copy code

---

## ⚙️ Backend Setup

### 1️⃣ Install dependencies
```bash
cd backend
npm init -y
npm install express sqlite3 sqlite bcrypt express-session cookie-parser cors
2️⃣ Run backend
bash
Copy code
node server.js
The backend runs at http://localhost:5000

⚙️ Frontend Setup
1️⃣ Create React app
bash
Copy code
npx create-react-app frontend
cd frontend
npm install axios react-router-dom
2️⃣ Run frontend
bash
Copy code
npm start
The frontend runs at http://localhost:3000

🔑 API Endpoints
POST /api/register
Register a new user

json
Copy code
{
  "email": "test@example.com",
  "password": "mypassword"
}
POST /api/login
Login user (sets cookie)

json
Copy code
{
  "email": "test@example.com",
  "password": "mypassword"
}
GET /api/dashboard
Returns dashboard data (protected, requires login)

POST /api/logout
Logs out user and clears session

🛠 Database
SQLite file: users.db is created automatically.

Table: users (id, email, password)

🚀 Deployment
Backend → Render / Heroku

Frontend → Vercel / Netlify

Update API URLs in frontend axios calls before deployment.

🎥 Deliverables
GitHub Repo Link

Deployed Live Demo Link

Screen Recording (login → dashboard → logout)

📜 License
Free to use for learning & assignments.

yaml
Copy code

---

Do you want me to also **include example code snippets inside the README** (like `server.js` and `auth.js`) or just keep it short like this?
