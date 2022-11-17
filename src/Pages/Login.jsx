import "../assets/css/Login.css";

const Login = () => {
  return (
    <div className="Login">
      <div className="section-image">ini image</div>
      <div className="section-form">
        <div className="signup">
          <h4>dont have an account?</h4>
          <button>
            <span>Sign Up</span>
          </button>
        </div>
        <div className="login-form">
          <div className="login-title">
            <h2>Login</h2>
          </div>
          <div className="login-input">
            <div className="input-element">
              <input type="text" placeholder="email" />
            </div>
            <div className="input-element">
              <input type="text" placeholder="password" />
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

export default Login;
