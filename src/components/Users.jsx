import { Link, Outlet } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams);
  const showActiveUsers = searchParams.get("filter") === "active";

  return (
    <>
      <div>
        <Link to={"1"}>User 1</Link>
      </div>
      <div>
        <Link to={"2"}>User 2</Link>
      </div>
      <div>
        <Link to={"3"}>User 3</Link>
      </div>
      <Outlet />
      <button onClick={() => setSearchParams({ filter: "active" })}>
        Active users
      </button>
      <button onClick={() => setSearchParams({})}>Reset Filter</button>

      {showActiveUsers ? (
        <h2>Showing Active users</h2>
      ) : (
        <h2> Showing All Users</h2>
      )}
    </>
  );
};

export default Users;
