import "../assets/css/Login.css";
import loginimg from "../assets/image/login.png";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const LoginTes = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [successMsg, setSuccessMsg] = useState("");

  const handleEmailChange = (e) => {
    setEmailError("");
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPasswordError("");
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email !== "") {
      //check
      const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (emailRegex.test(email)) {
        setEmailError("");
      } else {
        setEmailError("Email format doesnt valid!");
      }
    } else {
      setEmailError("Email is required!");
    }

    if (password !== "") {
      //check
    } else {
      setPasswordError("Password is required!");
    }

    // alert("email:" + email + " password:" + password);
    // setEmail("");
    // setPassword("");
    // setIsSubmit(true);
  };

  return (
    <div className="Login">
      <div className="section-image">
        <img src={loginimg} alt="" />
      </div>
      <div className="section-form">
        <div className="signup">
          <h4>dont have an account?</h4>
          <Link to="/signup">
            <button>
              <span>Sign Up</span>
            </button>
          </Link>
        </div>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="login-title">
            <h2>Login</h2>
          </div>
          <div className="login-input">
            <div className="input-element">
              <i className="bx bx-envelope"></i>
              <input type="text" placeholder="emailku" value={email} onChange={handleEmailChange} />
              {emailError && <div className="error-msg">{emailError}</div>}
            </div>
            <div className="input-element">
              <i className="bx bx-key"></i>
              <input type="password" placeholder="password" value={password} onChange={handlePasswordChange} />
              {passwordError && <div className="error-msg">{passwordError}</div>}
            </div>
            <div className="input-element-button">
              {/* <Link to="/"> */}
              <button type="submit">Login</button>
              {/* </Link> */}
            </div>
          </div>
          <div className="connect-google"></div>
        </form>
      </div>
    </div>
  );
};

export default LoginTes;
