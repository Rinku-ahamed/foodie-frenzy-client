import React from "react";
import Error from "../../assets/error.jpg";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <section className="container mx-auto px-10">
      <div className="md:flex items-center gap-6 ">
        <div className="md:w-2/6">
          <h2 className="text-7xl font-bold text-purple-800">
            Page <br /> Not Found
          </h2>
          <Link to="/">
            <button className="bg-red-600 py-3 px-10 rounded-md text-white font-bold mt-4">
              Go Back
            </button>
          </Link>
        </div>
        <div className="md:w-4/6">
          <img src={Error} alt="" className="w-full" />
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
