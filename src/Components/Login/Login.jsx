import React from "react";
import "./Login.css";
import SignIn from "../SignUp/SignUp";

const Login = ({ signUp, setSignUp }) => {
  return (
    <div className="Login">
      <div className="Login_gradient" />
      <div className="Login_body">
        {signUp ? (
          <SignIn setSignUp={setSignUp} signUp />
        ) : (
          <>
            <h1>Unlimited films, TV programs and more.</h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
            <div className="Login_input">
              <form>
                <input type="email" placeholder="Email address" />
                <button type="button" className="Login_getStarted" onClick={() => setSignUp(true)}>
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
