import { FaGoogle, FaGithub } from "react-icons/fa";
const SocialLogin = () => {
  return (
    <div>
      <h3 className="font-semibold mb-3">Login with</h3>
      <div className="flex flex-col gap-2">
        <button className="btn flex text-blue-500">
          <FaGoogle /> <span>Login with Google</span>
        </button>
        <button className="btn flex">
          <FaGithub /> <span>Login with Github</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
