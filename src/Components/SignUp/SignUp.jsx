import "./SignUp.css";
import React, { useRef } from "react";

const SignIn = ({ setSignUp, signUp }) => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    if (email.trim() === '') {
      emailRef.current.style.borderColor = 'red';
    } else {
      emailRef.current.style.borderColor = ''; 
    }
  };

  return (
    <div className="signIn">
      <form>
        <h1>Sign In</h1>
        <input type="email" ref={emailRef} placeholder="Email or mobile number" />
        <input type="password" ref={passwordRef} placeholder="Password" />
        <button type="button" onClick={handleSubmit}>Sign In</button>
        <span style={{display:'none'}} ></span>
        <h4>
          <span className="signIn_gray">New to Netflix? </span>
          <span className="signIn_link" onClick={() => setSignUp(!signUp)}>Sign up now.</span>
        </h4>
      </form>
    </div>
  );
};

export default SignIn;
