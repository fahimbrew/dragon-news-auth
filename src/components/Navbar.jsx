import { Link } from "react-router-dom";
import userIcon from "../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then(() => console.log("logout successful"))
      .catch((error) => console.log(error.message));
  };
  return (
    <div className="flex justify-between py-10 items-center">
      <div>{user?.email}</div>
      <div className="nav">
        <ul className="flex gap-5">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/career">Career</Link>
          </li>
        </ul>
      </div>
      <div className="flex gap-3 items-center">
        <div>
          {user && user?.email ? (
            <div className="flex flex-col justify-center items-center gap-2">
              <img
                className="w-10 h-10 rounded-full"
                src={user?.photoURL}
                alt=""
              />
              <span className="text-sm text-blue-800f">
                {user?.displayName}
              </span>
            </div>
          ) : (
            <img src={userIcon} alt="" />
          )}
        </div>
        <div>
          {user && user.email ? (
            <button
              onClick={handleLogout}
              className="btn bg-black text-white btn-ghost"
            >
              Logout
            </button>
          ) : (
            <Link
              to={"/auth/login"}
              className="btn bg-black text-white btn-ghost"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
