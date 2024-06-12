import { Link } from "react-router-dom";

export const SignUpButton = ({ loc, setSignUp, signUp }) => {

  if (loc === "Home")
    return (
      <Link to={"/login"} className="signUp">
        {" "}
        Sign Up
      </Link>
    );

  else if (signUp)
    return (
      <button className="signUp" onClick={() => setSignUp(false)}>
        Sign In
      </button>
    );
    
  else
    return (
      <button className="signUp" onClick={() => setSignUp(true)}>
        Sign Up
      </button>
    );
};
