import React from "react";
import { assets } from "../assets/assets";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { openSignIn } = useClerk();
  const { user } = useUser();

  return (
    <nav className="shadow-md py-3 px-4 sm:px-6 md:px-8 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between flex-wrap gap-4">
          {/* Logo Section */}
          <Link to="/" className="flex-shrink-0">
            <img
              src={assets.logo}
              alt="Logo"
              className="h-8 sm:h-10 md:h-12 w-auto transition-all duration-200"
            />
          </Link>

          {/* Buttons Section */}
          {user ? (
            <div className="flex items-center flex-wrap gap-2 sm:gap-4">
              <Link
                className="text-sm sm:text-base text-gray-600 hover:text-blue-500 transition-colors duration-200 whitespace-nowrap"
                to="/applications"
              >
                Applied Jobs
              </Link>

              <div className="hidden sm:block text-gray-300">|</div>

              <div className="flex items-center gap-2 sm:gap-3">
                <UserButton
                  afterSignOutUrl="/"
                  appearance={{
                    elements: {
                      avatarBox: "w-8 h-8 sm:w-10 sm:h-10",
                    },
                  }}
                />
                <p className="text-sm sm:text-base text-gray-600 hidden sm:block">
                  {user.fullName}
                </p>
              </div>
            </div>
          ) : (
            <div className="flex items-center flex-wrap gap-2 sm:gap-4">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 sm:px-4 py-2 rounded-md text-sm sm:text-base transition-colors duration-200 whitespace-nowrap">
                Recruiter Login
              </button>

              <button
                onClick={() => openSignIn({})}
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 sm:px-4 py-2 rounded-md text-sm sm:text-base transition-colors duration-200"
              >
                Login
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
