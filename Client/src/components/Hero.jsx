import React, { useRef } from "react";
import { assets } from "../assets/assets";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Hero = () => {
  const { setSearchFilter, setIsSearched } = useContext(AppContext);
  const titleRef = useRef(null);
  const locationRef = useRef(null);

  const onClickHandler = () => {
    setSearchFilter({
      search: titleRef.current.value,
      location: locationRef.current.value,
    });
    setIsSearched(true);
  };

  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-16 2xl:px-20 my-10">
      <div className="bg-gradient-to-r from-purple-800 to-purple-950 py-12 md:py-16 text-center text-white rounded-lg">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold px-4">
          Over 1000 Jobs Available
        </h2>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-8 mx-auto max-w-xl font-light px-6 mt-4">
          Your Next Big Career Move Starts Right Here - Explore the Best Jobs in
          your domain and apply now to get hired.
        </p>

        <div className="flex flex-col md:flex-row gap-4 max-w-3xl mx-auto px-4">
          <div className="flex-1 bg-white rounded-lg p-2 flex items-center gap-2">
            <img src={assets.search_icon} alt="Search" className="w-6 h-6" />
            <input
              type="text"
              placeholder="Search Jobs"
              className="w-full p-2 outline-none text-black text-sm"
              ref={titleRef}
            />
          </div>

          <div className="flex-1 bg-white rounded-lg p-2 flex items-center gap-2">
            <img
              src={assets.location_icon}
              alt="Location"
              className="w-6 h-6"
            />
            <input
              type="text"
              placeholder="Location"
              className="w-full p-2 outline-none text-black text-sm"
              ref={locationRef}
            />
          </div>

          <button
            onClick={onClickHandler}
            className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-8 rounded-lg transition-colors duration-200 md:w-auto w-full"
          >
            Search
          </button>
        </div>
      </div>
      <p className="text-lg font-semibold text-gray-600 mb-6  text-center mt-6">
        Trusted By
      </p>
      <div className="mt-8 shadow-md p-6 border border-gray-300 rounded-lg">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center">
          {[
            "walmart_logo",
            "microsoft_logo",
            "amazon_logo",
            "accenture_logo",
            "adobe_logo",
            "samsung_logo",
          ].map((logo) => (
            <img
              key={logo}
              src={assets[logo]}
              alt={
                logo.replace("_logo", "").charAt(0).toUpperCase() +
                logo.slice(1).replace("_logo", "")
              }
              className="h-6 w-auto"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
