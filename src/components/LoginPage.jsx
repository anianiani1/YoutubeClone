import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === "admin" && password === "admin") {
      // Set a token for login in localStorage (you can use a more secure method for real applications)
      localStorage.setItem("token", "your_generated_token");
      navigate("/");
      console.log("Login successful! Token set.");
    } else {
      console.log("Invalid email or password. Login failed.");
    }
  };

  return (
    <div className="login-container">
      <h2>Login Page</h2>
      <form>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
