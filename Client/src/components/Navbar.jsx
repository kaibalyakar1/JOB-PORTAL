import React from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
  return (
    <div className="shadow py-4 px-10">
      <div className="flex justify-between items-center">
        <img src={assets.logo} alt="" />
        <div className="flex space-x-4">
          <button className="bg-blue-500 text-white px-3 py-2 rounded-md">
            Recruiter Login
          </button>
          <button>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
