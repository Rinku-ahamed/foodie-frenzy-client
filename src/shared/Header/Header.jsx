import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import CommonBtn from "../CommonBtn/CommonBtn";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="container mx-auto px-6 md:px-10 py-4">
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
                  className={({ isActive }) =>
                    isActive ? "text-red-600 font-bold" : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    isActive ? "text-red-600 font-bold" : ""
                  }
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
              className={({ isActive }) =>
                isActive ? "text-red-600 font-bold" : ""
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive ? "text-red-600 font-bold" : ""
              }
            >
              Blog
            </NavLink>
          </ul>
          <div className="ms-6">
            {user ? (
              <div className="flex gap-4">
                <img
                  src={user?.photoURL}
                  alt=""
                  className="w-10 h-100 rounded-full"
                  title={user?.displayName}
                />
                <span onClick={handleLogOut}>
                  <CommonBtn>Logout</CommonBtn>
                </span>
              </div>
            ) : (
              <Link to="/login">
                <CommonBtn>Login</CommonBtn>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
