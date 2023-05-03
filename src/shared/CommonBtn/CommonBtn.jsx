import React from "react";

const CommonBtn = ({ children }) => {
  return (
    <button className="bg-red-600 px-6 py-2 rounded-md text-white me-4 font-bold">
      {children}
    </button>
  );
};

export default CommonBtn;
