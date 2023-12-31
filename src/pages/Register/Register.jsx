import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoUrl = form.photoUrl.value;
    console.log(name, email, password, photoUrl);
    form.reset();
    setError("");
    setSuccess("");
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUserInfo(user, name, photoUrl);
        setSuccess("Thanks for registration!!");
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  const updateUserInfo = (user, name, photoUrl) => {
    updateProfile(user, { displayName: name, photoURL: photoUrl })
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="mt-10 mb-20">
      <div className="w-[420px] mx-auto shadow-xl px-6 md:px-10 py-4 border rounded-lg">
        <form onSubmit={handleRegister}>
          <h2 className="text-center text-2xl font-bold mb-10 border-b pb-4">
            Register Page
          </h2>
          <div>
            <label htmlFor="name" className="font-semibold">
              Name
            </label>
            <br />
            <input
              type="text"
              name="name"
              placeholder="Type Your Name"
              className="border-b-2 w-full outline-none py-2"
              required
            />
          </div>
          <div className="mt-6">
            <label htmlFor="email" className="font-semibold">
              Email
            </label>
            <br />
            <input
              type="email"
              name="email"
              placeholder="Type Your Email"
              className="border-b-2 w-full outline-none py-2"
              required
            />
          </div>
          <div className="mt-6">
            <label htmlFor="photo-url" className="font-semibold">
              Photo Url
            </label>
            <br />
            <input
              type="text"
              name="photoUrl"
              placeholder="Enter Your Photo Url"
              className="border-b-2 w-full outline-none py-2"
              required
            />
          </div>
          <div className="mt-6">
            <label htmlFor="password" className="font-semibold">
              Password
            </label>
            <br />
            <input
              type="password"
              name="password"
              placeholder="Type Your Password"
              className="border-b-2 w-full outline-none py-2"
              required
            />
          </div>

          <button className="w-full bg-red-600 py-1 text-white rounded-2xl font-bold mt-6">
            Register
          </button>
        </form>
        <p className="mt-3 text-center">
          Already have a account?
          <Link to="/login" className="text-orange-700 font-semibold">
            Sign in
          </Link>
        </p>
        <p className="mt-4 text-lg text-red-500 font-semibold">{error}</p>
        <p className="mt-4 text-lg text-green-500 font-semibold">{success}</p>
      </div>
    </div>
  );
};

export default Register;
