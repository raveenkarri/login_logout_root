import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Dashboard({ user, setUser }) {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await axios.post("http://localhost:5000/api/logout");
    setUser(null);
    navigate("/login");
  };

  if (!user) return <h2 className="form-container">Please login first</h2>;

  return (
    <div className="form-container">
      <h2>Welcome, {user.email} 🎉</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
