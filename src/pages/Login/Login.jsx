import React from "react";
import { FaGooglePlusG, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="mt-10 mb-20">
      <div className="w-[420px] mx-auto shadow-xl px-10 py-4 border rounded-lg">
        <form>
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
            />
          </div>
          <p className="font-semibold mt-4 text-end text-slate-400">
            <button>Forget Password?</button>
          </p>

          <button className="w-full bg-red-600 py-1 text-white rounded-2xl font-bold mt-6">
            Login
          </button>
        </form>
        <p className="mt-3 text-center">
          Not a Member?
          <Link to="/register" className="text-orange-700">
            Register
          </Link>
        </p>
        <p className="text-center mt-6">Or Sign Up Using</p>
        <div className="mt-6 flex justify-center gap-4 mb-6">
          <span className="bg-orange-600 px-2 py-2 text-white rounded-full cursor-pointer">
            <FaGooglePlusG />
          </span>
          <span className="bg-red-600 px-2 py-2 text-white rounded-full cursor-pointer">
            <FaGithub />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
