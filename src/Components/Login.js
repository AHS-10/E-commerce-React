import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Config/Config";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setSuccessMsg("Login Successfully, You will now redirect to Home page");
                      setEmail("");
                      setPassword("");
                      setErrorMsg("");
        setTimeout(() => {
          setSuccessMsg("");
          navigate("/");
        }, 2000);
      })
      .catch((error) => {
        setErrorMsg(error.message);
        setTimeout(() => {
          setErrorMsg("");
        }, 2000);
      });
  };
  return (
    <>
      <div className="container mt-5">
        <h2>Sign In</h2>
        {successMsg && (
          <>
            <p className="text-success">{successMsg}</p>
          </>
        )}
        <form onSubmit={handleSignIn}>
          <div className="form-floating mt-4">
            <input
              type="email"
              class="form-control "
              id="floatingInput"
              placeholder="name@example.com"
              onChange={(val) => {
                setEmail(val.target.value);
              }}
              value={email}
              required
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div className="form-floating mt-3">
            <input
              type="password"
              class="form-control "
              id="floatingPassword"
              placeholder="Password"
              onChange={(val) => {
                setPassword(val.target.value);
              }}
              value={password}
              required
            />
            <label for="floatingPassword">Password</label>
          </div>
          <button type="submit" className="btn btn-primary mt-3">
            Login
          </button>
        </form>
        {errorMsg && (
          <>
            <p className="text-danger">{errorMsg}</p>
          </>
        )}
        <p className="mt-2">
          Don't have an account{" "}
          <Link to="/signup" className="text-decoration-none">
            Signup
          </Link>{" "}
        </p>
      </div>
    </>
  );
}

export default Login;
