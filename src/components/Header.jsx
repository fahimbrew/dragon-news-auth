import moment from "moment";
import logo from "../assets/logo.png";
const Header = () => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center py-8">
      <div>
        <img className="w-[300px]" src={logo} alt="" />
      </div>
      <h3 className="text-gray-500">Journalism without Fear or Favour</h3>
      <p>{moment().format("dddd, MMMM Do YYYY")}</p>
    </div>
  );
};

export default Header;
