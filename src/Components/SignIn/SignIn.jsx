import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Contexts/AuthContext";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../utils/firebase/config";
import "./SignIn.css";

const SignIn = ({ setSignUp, signUp }) => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const { setUser } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  useEffect(() => {
    setError("");
  }, [emailRef, passwordRef]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    if (email.trim() === "" || password.trim() === "") {
      setError("Please fill all the fields");
      if (email.trim() === "") {
        emailRef.current.style.borderColor = "red";
      } else {
        emailRef.current.style.borderColor = "";
      }
      if (password.trim() === "") {
        passwordRef.current.style.borderColor = "red";
      } else {
        passwordRef.current.style.borderColor = "";
      }
    } else {
      emailRef.current.style.borderColor = "";
      passwordRef.current.style.borderColor = "";
      try {
        await signInWithEmailAndPassword(auth, email, password);
        setError("");
        setUser(true);
        navigate("/home");
      } catch (error) {
        if(error.code==='auth/invalid-email'){
          setError('Please enter a valid email')
        }else if(error.code === 'auth/invalid-credential'){
          setError('Please enter a valid password')
        }
      }
    }
  };
  

  return (
    <div className="signIn">
      <form>
        <h1>Sign In</h1>
        <input
          type="email"
          ref={emailRef}
          placeholder="Email or mobile number"
          onChange={() => setError("")}
        />
        <input
          type="password"
          ref={passwordRef}
          placeholder="Password"
          onChange={() => setError("")}
        />
        {error && <span className="error">{error}</span>}
        <button type="button" onClick={handleSubmit}>
          Sign In
        </button>
        <span style={{ display: "none" }}></span>
        <h4>
          <span className="signIn_gray">New to Netflix? </span>
          <span className="signIn_link" onClick={() => setSignUp(!signUp)}>
            Sign up now.
          </span>
        </h4>
      </form>
    </div>
  );
};

export default SignIn;
