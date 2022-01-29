import { useParams } from "react-router-dom";

const UserDetails = () => {
  const { userId } = useParams();

  return (
    <>
      <h1>User details about user-{userId}</h1>
    </>
  );
};

export default UserDetails;
