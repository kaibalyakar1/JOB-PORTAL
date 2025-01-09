import React from "react";
import { assets } from "../assets/assets";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const { openSignIn } = useClerk();
  const { user } = useUser();
  return (
    <div className="shadow py-4 px-4 sm:px-10">
      <div className="flex flex-wrap justify-between items-center">
        {/* Logo Section */}
        <img src={assets.logo} alt="Logo" className="h-8 sm:h-12 w-auto" />

        {/* Buttons Section */}

        {user ? (
          <div className="flex flex-wrap space-x-2 sm:space-x-4 ">
            <Link
              className="text-sm sm:text-base text-center hover:text-blue-500 hover:underline"
              to="/applications"
            >
              Applied Jobs
            </Link>
            <p>|</p>
            <UserButton />
            <p className="text-sm sm:text-base text-center">{user.fullName}</p>
          </div>
        ) : (
          <div className="flex flex-wrap space-x-2 sm:space-x-4 mt-2 sm:mt-0">
            <button className="bg-blue-500 text-white px-3 py-2 rounded-md text-sm sm:text-base">
              Recruiter Login
            </button>
            <button
              onClick={(e) => openSignIn({})}
              className="bg-gray-100 px-3 py-2 rounded-md text-sm sm:text-base"
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
