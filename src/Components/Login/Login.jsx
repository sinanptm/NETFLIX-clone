import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="Login">
      <div className="Login_gradient" />
      <div className="Login_body">
        <h1>Unlimited films, TV programs and more.</h1>
        <h2>Watch anywhere. Cancel at any time.</h2>
        <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
        <div className="Login_input">
          <form>
            <input type="email" placeholder="Email address" />
            <button type="submit" className="Login_getStarted">GET STARTED</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;