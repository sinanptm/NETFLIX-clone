import React, { useState } from "react";
import Login from "../Components/Login/Login";
import NavBar from "../Components/NavBar/NavBar";

const LoginPage = () => {
  const [signUp, setSignUp] = useState(false)
  return (
    <>
      <NavBar signUp={signUp} setSignUp={setSignUp} />
      <Login signUp={signUp} setSignUp={setSignUp} />
    </>
  );
};

export default LoginPage;
