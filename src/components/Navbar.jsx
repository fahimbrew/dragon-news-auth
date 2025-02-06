import { Link } from "react-router-dom";
import userIcon from "../assets/user.png";
const Navbar = () => {
  return (
    <div className="flex justify-between my-10 items-center">
      <div></div>
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
          <img src={userIcon} alt="" />
        </div>
        <div>
          <Link
            to={"/auth/login"}
            className="btn bg-black text-white btn-ghost"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
