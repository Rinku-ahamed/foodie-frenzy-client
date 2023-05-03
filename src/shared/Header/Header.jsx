import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import CommonBtn from "../CommonBtn/CommonBtn";
import { FaBars } from "react-icons/fa";
const Header = () => {
  const [showHide, setShowHide] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container mx-auto px-6 md:px-10 py-4 relative">
      <div className="flex justify-between items-center bg-base-100">
        <div className="">
          <Link to="/" className="normal-case text-2xl lg:text-3xl font-bold">
            Foodie <span className="text-red-600">Frenzy</span>
          </Link>
        </div>
        <div
          className="block lg:hidden cursor-pointer"
          onClick={() => setShowHide(!showHide)}
        >
          <FaBars />
        </div>
        <div
          className={`${
            showHide
              ? "top-[63px] right-0 bg-sky-100"
              : "top-[-400px] lg:top-[0]"
          } absolute lg:relative py-6 px-2 lg:py-0 lg:px-0 lg:flex flex-col lg:flex-row lg:items-center `}
        >
          <ul className="menu menu-horizontal flex-col lg:flex-row gap-2 lg:gap-8 px-1 text-xl">
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
          <div className="lg:ms-6 mt-4 lg:mt-0">
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
