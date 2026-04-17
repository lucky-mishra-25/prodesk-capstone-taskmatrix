import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      console.log({ email, password }); // 🔍 debug

      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      console.log(data); // 🔍 see backend response

      if (res.ok && data.token) {
        // ✅ Save token
        localStorage.setItem("token", data.token);

        alert("Login Successful ✅");

        // 🔁 Redirect to dashboard
        window.location.href = "/dashboard";
      } else {
        alert(data.message || "Login Failed ❌");
      }

    } catch (error) {
      console.error(error);
      alert("Server not running ❌");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Login</h1>

      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}  // ✅ IMPORTANT
          onChange={(e) => setEmail(e.target.value)}
        />
        <br /><br />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}  // ✅ IMPORTANT
          onChange={(e) => setPassword(e.target.value)}
        />
        <br /><br />

        <button type="submit">Login</button>
      </form>

      <p>
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
}

export default Login;