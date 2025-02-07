import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const { logIn } = useContext(AuthContext);
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");
    // console.log(email, password);
    logIn(email, password)
      .then((result) => {
        console.log(result.user);
        e.target.reset();
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };
  return (
    <div className="min-h-screen">
      <div className="card bg-white w-full mx-auto max-w-lg shrink-0 shadow-sm p-10">
        <h2 className="text-center mt-5 text-2xl">Login your account</h2>
        <div className="divider px-5"></div>
        <form onSubmit={handleLogin} className="p-5">
          <fieldset className="fieldset">
            <label className="fieldset-label">Email</label>
            <input
              name="email"
              type="email"
              className="input w-full"
              placeholder="Email"
            />
            <label className="fieldset-label">Password</label>
            <input
              name="password"
              type="password"
              className="input w-full"
              placeholder="Password"
            />
            <div>
              {error && <h1 className="text-sm text-red-600">{error}</h1>}
            </div>
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
        </form>
        <p className="text-center">
          Don&apos;t have an account?
          <Link to={"/auth/register"} className="text-red-600">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
