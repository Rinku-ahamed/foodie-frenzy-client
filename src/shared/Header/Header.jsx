import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const user = null;
  return (
    <div className="container mx-auto px-10 py-4">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? "text-red-600" : "")}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/chefs"
                  className={({ isActive }) => (isActive ? "text-red-600" : "")}
                >
                  Chef
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  className={({ isActive }) => (isActive ? "text-red-600" : "")}
                >
                  Blog
                </NavLink>
              </li>
            </ul>
          </div>
          <Link to="/" className="normal-case text-3xl font-bold">
            Foodie <span className="text-red-600">Frenzy</span>
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal gap-8 px-1 text-xl">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "text-red-600" : "")}
            >
              Home
            </NavLink>
            <NavLink
              to="/chefs"
              className={({ isActive }) => (isActive ? "text-red-600" : "")}
            >
              Chef
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) => (isActive ? "text-red-600" : "")}
            >
              Blog
            </NavLink>
          </ul>
          <div className="ms-6">
            {user ? (
              <div>
                <img src="" alt="" />
              </div>
            ) : (
              <Link to="/login">
                <button className="bg-red-600 px-6 py-2 rounded-md text-white me-4 font-bold">
                  Login
                </button>
              </Link>
            )}
            {/* <Link to="/register">
              <button className="bg-amber-800 px-6 py-2 rounded-md text-white font-bold">
                Register
              </button>
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
