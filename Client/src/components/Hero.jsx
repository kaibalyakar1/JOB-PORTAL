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
    console.log(
      "values",
      titleRef.current.value,
      locationRef.current.value,
      setIsSearched
    );
  };

  return (
    <div className="container 2xl:px-20 mx-auto my-10">
      <div className="bg-gradient-to-r from-purple-800 to-purple-950 py-16 text-center text-white mx-2 rounded-lg">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          Over 1000 Jobs Available
        </h2>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-8 mx-auto max-w-xl font-light px-5 mt-4">
          Your Next Big Career Mover Starts Right Here - Explore the Best Jobs
          in your domain and apply now to get hired.
        </p>

        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-4 items-center justify-between bg-white w-full sm:w-[50%] mx-auto p-4 rounded-lg ">
          <div className="flex items-center w-full sm:w-auto">
            <img src={assets.search_icon} alt="" />
            <input
              type="text"
              placeholder="Search Jobs"
              className="w-full sm:text-xs p-2 rounded outline-none text-black"
              ref={titleRef}
            />
          </div>
          <p className="text-3xl text-gray-300 font-semibold sm:hidden">|</p>
          <div className="flex items-center w-full sm:w-auto">
            <img src={assets.location_icon} alt="" />
            <input
              type="text"
              placeholder="Location"
              className="w-full sm:text-xs p-2 rounded outline-none text-black"
              ref={locationRef}
            />
          </div>

          <button
            onClick={onClickHandler}
            className="bg-blue-500 text-white py-2 px-6 rounded mt-4 sm:mt-0 sm:w-auto"
          >
            Search
          </button>
        </div>
      </div>

      <div className="mt-5 mx-2 shadow-md p-6 border border-gray-300 rounded-lg">
        <div className="flex flex-wrap sm:flex-row items-center justify-between mt-5">
          <p className="text-l font-semibold text-gray-600">Trusted By</p>
          <img className="mt-4 sm:mt-0 h-6 " src={assets.walmart_logo} alt="" />
          <img
            className="mt-4 sm:mt-0 h-6"
            src={assets.microsoft_logo}
            alt=""
          />
          <img className="mt-4 sm:mt-0 h-6" src={assets.amazon_logo} alt="" />
          <img
            className="mt-4 sm:mt-0 h-6"
            src={assets.accenture_logo}
            alt=""
          />
          <img className="mt-4 sm:mt-0 h-6" src={assets.adobe_logo} alt="" />
          <img className="mt-4 sm:mt-0 h-6" src={assets.samsung_logo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
