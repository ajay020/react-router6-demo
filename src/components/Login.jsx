import { useState, useContext } from "react";
import { useAuth } from "./auth";
import { useNavigate, useLocation } from "react-router-dom";

export const Login = () => {
  const [user, setUser] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const auth = useAuth();

  const redirectPath = location.state?.path || "/";

  const handleLogin = () => {
    auth.login(user);
    navigate(redirectPath, { replace: true });
  };

  return (
    <>
      <label>
        Username:
        <input type="text" onChange={(e) => setUser(e.target.value)} />
        <button onClick={handleLogin}>Login</button>
      </label>
    </>
  );
};
