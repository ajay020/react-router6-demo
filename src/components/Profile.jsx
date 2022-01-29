import { useAuth } from "./auth";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logout();
    navigate("/");
  };

  return (
    <>
      <h3>Welcome {auth.user}</h3>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};

export default Profile;
