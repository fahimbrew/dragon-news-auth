import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState({});
  const handleRegister = (e) => {
    e.preventDefault();
    // const name = e.target.name.value;
    // const photo = e.target.photo.value;
    // const email = e.target.email.value;
    // const password = e.target.password.value;
    // const terms = e.target.terms.checked;
    // console.log(name, photo, email, password, terms);
    const form = new FormData(e.target);
    const name = form.get("name");
    if (name.length < 5) {
      return setError({ ...error, name: "must be more than the 5 character" });
    }
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    // const terms = form.get("terms");
    // console.log(name, photo, email, password, terms);
    createNewUser(email, password)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
        e.target.reset();
        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            navigate("/");
          })
          .catch((error) => {
            console.log(error.message);
          });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="min-h-screen">
      <div className="card bg-white w-full mx-auto max-w-lg shrink-0 shadow-sm p-10">
        <h2 className="text-center mt-5 text-2xl">Register your account</h2>
        <div className="divider px-5"></div>
        <form onSubmit={handleRegister} className="p-5">
          <fieldset className="fieldset">
            <label className="fieldset-label">Your Name</label>
            <input
              name="name"
              type="text"
              className="input w-full"
              placeholder="Enter your name"
              required
            />
            {error.name && (
              <label className="label text-xs text-red-700">{error.name}</label>
            )}
            <label className="fieldset-label">Photo URL</label>
            <input
              name="photo"
              type="text"
              className="input w-full"
              placeholder="Photo URL"
              required
            />
            <label className="fieldset-label">Email</label>
            <input
              name="email"
              type="email"
              className="input w-full"
              placeholder="Email"
              required
            />
            <label className="fieldset-label">Password</label>
            <input
              name="password"
              type="password"
              className="input w-full"
              placeholder="Password"
              required
            />
            <label className="fieldset-label">
              <input
                name="terms"
                type="checkbox"
                className="checkbox"
                required
              />
              Accept Terms & Conditions
            </label>
            <button className="btn btn-neutral mt-4">Register</button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
