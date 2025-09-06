import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

axios.defaults.withCredentials = true;

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/api/session").then((res) => {
      if (res.data.loggedIn) setUser(res.data.user);
    });
  }, []);

  return (
    <BrowserRouter>
      <nav className="navbar">
        <h2>AuthApp</h2>
        <div>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
          {user && <Link to="/dashboard">Dashboard</Link>}
        </div>
      </nav>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/dashboard" element={<Dashboard user={user} setUser={setUser} />} />
      </Routes>
    </BrowserRouter>
  );
}
