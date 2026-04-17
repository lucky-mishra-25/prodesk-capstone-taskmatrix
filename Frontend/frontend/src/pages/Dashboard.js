import { useEffect, useState } from "react";

function Dashboard() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    // 🔒 Redirect if no token
    if (!token) {
      window.location.href = "/";
      return;
    }

    // 🔥 Call protected API
    fetch("http://localhost:5000/api/tasks", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMessage(data.message || "Welcome to Dashboard");
      })
      .catch((err) => console.log(err));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Dashboard 🔐</h1>
      <h2>{message}</h2>

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;