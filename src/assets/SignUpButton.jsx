import { useNavigate } from "react-router-dom";


export const SignUpButton = ({ loc, setSignUp, signUp }) => {
  const navigate = useNavigate()
  if (loc === "Home")
    return (
      <button onClick={()=>navigate('/login')} className="signUp" >
        Sign Up
      </button>
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
