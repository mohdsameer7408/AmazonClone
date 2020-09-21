import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../assets/css/Login.css";
import { auth } from "../config/firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const signIn = (event) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        auth && history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (event) => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => auth && history.push("/"))
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="amazon logo"
        />
      </Link>
      <div className="login_container">
        <h1>Sign-In</h1>
        <form action="" method="POST">
          <h5>E-mail</h5>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            name="password"
            id="passowrd"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login_signinButton" type="submit" onClick={signIn}>
            Sign In
          </button>
        </form>
        <p>
          By continuing, you agree to AMAZON Clone Conditions of Use and Privacy
          Notice.
        </p>
        <button className="login_registerButton" onClick={register}>
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
