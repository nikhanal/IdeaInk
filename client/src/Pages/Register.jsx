import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [err, setErr] = useState(null); // Error state

  const [Inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await fetch("http://localhost:8000/users");
  //       const data = await res.json();
  //       console.log(data);
  //     } catch (error) {
  //       setErr(error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:8000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Inputs),
      });
      const data = await res.json();
      console.log(data);
      setErr(data.error);
      if (data.message) {
        navigate("/login");
      }
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
        {err && <p>{err}</p>}
        <span>
          Already have an accout?
          <Link to="/login"> Login</Link>
        </span>
      </form>
    </div>
  );
}

export default Register;
