import React, { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [Inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:8000/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Inputs),
      });
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  // console.log(Inputs);
  return (
    <div className="auth">
      <h1>Register</h1>
      <form>
        <input
          required
          type="text"
          placeholder="Username"
          onChange={(e) => setInputs({ ...Inputs, username: e.target.value })}
        />
        <input
          required
          type="email"
          placeholder="Email"
          onChange={(e) => setInputs({ ...Inputs, email: e.target.value })}
        />
        <input
          required
          type="password"
          placeholder="Password"
          onChange={(e) => setInputs({ ...Inputs, password: e.target.value })}
        />
        <button type="submit" onClick={(e) => handleSubmit(e)}>
          Register
        </button>
        <span>
          Already have an accout?
          <Link to="/login"> Login</Link>
        </span>
      </form>
    </div>
  );
}

export default Register;
