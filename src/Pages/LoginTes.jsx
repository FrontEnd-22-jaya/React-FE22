import "../assets/css/Login.css";
import loginimg from "../assets/image/login.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const LoginTes = () => {
  //   const initialValues = { email: "", password: "" };
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    // console.log(e.target);
    const nextFormState = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextFormState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(form, null, 2));
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
        <div className="login-form">
          <div className="login-title">
            <h2>Login</h2>
          </div>
          <div className="login-input">
            <div className="input-element">
              <i className="bx bx-envelope"></i>
              <input type="text" placeholder="emailku" value={form.email} onChange={handleChange} />
            </div>
            <div className="input-element">
              <i className="bx bx-key"></i>
              <input type="password" placeholder="password" value={form.password} onChange={handleChange} />
            </div>
            <div className="input-element-button">
              <button type="submit" onSubmit={handleSubmit}>
                Login
              </button>
            </div>
          </div>
          <div className="connect-google"></div>
        </div>
      </div>
    </div>
  );
};

export default LoginTes;
