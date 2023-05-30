import { React, useState, useContext } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext.jsx";

function Login() {
  const navigate = useNavigate();
  const [err, setErr] = useState(null); // Error state
  const { login } = useContext(AuthContext);
  const [Inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(Inputs);
    if (err) {
      return setErr(err.error);
    }
    if (!err) {
      navigate("/");
    }
  };
  return (
    <div className="auth">
      <h1>Login</h1>
      <form>
        <input
          required
          type="text"
          placeholder="Username"
          name="username"
          onChange={(e) => {
            setInputs({ ...Inputs, username: e.target.value });
          }}
        />
        <input
          required
          type="password"
          placeholder="Password"
          name="password"
          onChange={(e) => setInputs({ ...Inputs, password: e.target.value })}
        />
        <button type="submit" onClick={handleSubmit}>
          Login
        </button>
        {err && <p className="error">{err}</p>}
        <span>
          Don't you have accout?
          <Link to="/register"> Register</Link>
        </span>
      </form>
    </div>
  );
}

export default Login;
