import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";

const FindUs = () => {
  return (
    <div className="my-5">
      <h3 className="font-semibold mb-3">Find us on</h3>
      <div className="join join-vertical w-full *:bg-base-100">
        <button className="btn join-item justify-start">
          <FaFacebook className="text-blue-800" /> Facebook
        </button>
        <button className="btn join-item justify-start">
          <FaTwitter className="text-sky-600" /> Twitter
        </button>
        <button className="btn join-item justify-start">
          <FaInstagram className="text-red-500" /> Instagram
        </button>
      </div>
    </div>
  );
};

export default FindUs;
