import React, { useState } from "react";
import "./SignUp.css";
import SignIn from "../SignIn/SignIn";
import ValidateEmail from "../../utils/ValidateEmail";
import { createUserWithEmailAndPassword } from "firebase/auth/cordova";
import { auth } from "../../utils/firebase/config";
import { PropagateLoaders } from "../../assets/Spinner/Spinner"; 

const SignUp = ({ signUp, setSignUp }) => {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    if (e.target.name === "email") setEmail(e.target.value);
    else setPassword(e.target.value);
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email.trim() === "" || password.trim() === "") {
      setError("Please fill all the fields");
      return;
    }
    if (!ValidateEmail(email)) {
      setError("Email is not valid");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    try {
      setLoading(true);
      await createUserWithEmailAndPassword(auth, email, password);
      setLoading(false);
      setSignUp(true);
      setEmail("");
      setPassword("");
      setError("");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setError("You are already a user, Please login");
      } else {
        setError("Registration failed. Please try again.");
      }
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <div className="SignUp">
      <div className="SignUp_gradient" />
      <div className="SignUp_body">
        {signUp ? (
          <SignIn setSignUp={setSignUp} signUp />
        ) : (
          <>
            <h1>Unlimited films, TV programs and more.</h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
            <div className="SignUp_input">
              <form noValidate onSubmit={handleSubmit}>
                <input type="email" name="email" value={email} onChange={handleChange} placeholder="Email address" />
                <input type="password" name="password" value={password} onChange={handleChange} placeholder="Password" />
                <button type="submit" className="SignUp_getStarted" disabled={loading}>
                  {loading ? <PropagateLoaders /> : "GET STARTED"}
                </button>
              </form>
            </div>
            <div className="SignUp_error">{error}</div>
          </>
        )}
      </div>
    </div>
  );
};

export default SignUp;
