import "../assets/css/Login.css";
import loginimg from "../assets/image/login.png";
import { Link } from "react-router-dom";

const LoginTest = () => {
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
              <input type="text" placeholder="email" />
            </div>
            <div className="input-element">
              <i className="bx bx-key"></i>
              <input type="password" placeholder="password" />
            </div>
            <div className="input-element-button">
              <button>Login</button>
            </div>
          </div>
          <div className="connect-google"></div>
        </div>
      </div>
    </div>
  );
};

export default LoginTest;
