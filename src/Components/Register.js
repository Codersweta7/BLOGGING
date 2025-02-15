import { useState } from "react";

export default function Register() {
  const [username, setUserName] = useState("");
  const [email, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(""); 
  async function Register(ev) {
    ev.preventDefault();

    if (password !== confirmPassword) {
      setMessage("❌ Passwords do not match!");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/user/signup", {
        method: "POST",
        body: JSON.stringify({ username, email, password }),
        headers: { "Content-Type": "application/json" },
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("✅ Registration Successful!");
      } else {
        setMessage(`❌ Error: ${data.error || "Something went wrong!"}`);
      }
    } catch (error) {
      setMessage("❌ Failed to connect to the server.");
      console.error(error);
    }
  }

  return (
    <>
      <form className="register" onSubmit={Register}>
        <h3>
          <span>Sign Up</span> For Free
        </h3>
        <p>Let's sign up quickly to get started</p>

        <input
          type="text"
          name="userName"
          placeholder="Enter Your Name"
          value={username}
          onChange={(ev) => setUserName(ev.target.value)}
          required
        />
        <input
          type="email"
          name="userEmail"
          placeholder="Enter Your Email"
          value={email}
          onChange={(ev) => setUserEmail(ev.target.value)}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Enter Your Password"
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Your Password"
          value={confirmPassword}
          onChange={(ev) => setConfirmPassword(ev.target.value)}
          required
        />

        <button className="btn">Sign Up</button>

        <p className="redirect-text">
          Already have an account? <a href="/login">Login</a>
        </p>

        {message && <p className="message">{message}</p>}
      </form>
    </>
  );
}
