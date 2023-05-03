import React, { useContext, useState } from "react";
import { FaGooglePlusG, FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
const Login = () => {
  const { loginUser, googleLogin, githubLogin } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname;
  console.log(location);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    setError("");
    setSuccess("");
    loginUser(email, password)
      .then((result) => {
        setSuccess("Thanks for login!!");
        navigate(from);
      })
      .catch((error) => {
        console.log(error);
        setError("Email address or password doesn't match!!");
      });
  };

  const handleGoogleLogin = () => {
    googleLogin(googleProvider)
      .then((result) => {
        location("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleGithubLogin = () => {
    githubLogin(githubProvider)
      .then((result) => {
        location("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="mt-10 mb-20">
      <div className="w-[420px] mx-auto shadow-xl px-6 md:px-10 py-4 border rounded-lg">
        <form onSubmit={handleLogin}>
          <h2 className="text-center text-2xl font-bold mb-10 border-b pb-4">
            Login Page
          </h2>
          <div>
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
          <p className="font-semibold mt-4 text-end text-slate-400">
            <button>Forget Password?</button>
          </p>

          <button className="w-full bg-red-600 py-1 text-white rounded-2xl font-bold mt-6">
            Login
          </button>
        </form>
        <p className="mt-4 text-lg text-red-500 font-semibold">{error}</p>
        <p className="mt-4 text-lg text-green-500 font-semibold">{success}</p>
        <p className="mt-3 text-center">
          Not a Member?
          <Link to="/register" className="text-orange-700">
            Register
          </Link>
        </p>
        <p className="text-center mt-6">Or Sign Up Using</p>
        <div className="mt-6 flex justify-center gap-4 mb-6">
          <span
            className="bg-orange-600 px-2 py-2 text-white rounded-full cursor-pointer"
            onClick={handleGoogleLogin}
          >
            <FaGooglePlusG />
          </span>
          <span
            className="bg-red-600 px-2 py-2 text-white rounded-full cursor-pointer"
            onClick={handleGithubLogin}
          >
            <FaGithub />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
