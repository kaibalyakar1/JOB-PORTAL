import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import {
  assets,
  JobCategories,
  JobLocations,
  jobsData,
} from "../assets/assets";
import JobCard from "./JobCard";

const JobListing = () => {
  const { isSearched, searchFilter, setSearchFilter, setIsSearched } =
    useContext(AppContext);

  const handleClearSearch = () => {
    setSearchFilter((prev) => ({
      ...prev,
      search: "",
    }));
  };

  const handleClearLocation = () => {
    setSearchFilter((prev) => ({
      ...prev,
      location: "",
    }));
  };

  if (!searchFilter) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 lg:px-10">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar with Checkboxes */}
        <div className="w-full lg:w-1/4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            {/* Current Search Section */}
            {isSearched && (searchFilter?.search || searchFilter?.location) && (
              <>
                <h3 className="text-lg font-semibold mb-4">Current Search</h3>
                <div className="mb-4 text-gray-600 flex flex-wrap gap-3">
                  {searchFilter.search && (
                    <span className="inline-flex items-center gap-2 bg-blue-100 px-3 py-1 rounded text-sm">
                      {searchFilter.search}
                      <button
                        onClick={handleClearSearch}
                        className="hover:bg-gray-200 p-1 rounded transition-colors"
                      >
                        <img
                          className="w-4 h-4 cursor-pointer"
                          src={assets.cross_icon}
                          alt="Clear search"
                        />
                      </button>
                    </span>
                  )}

                  {searchFilter.location && (
                    <span className="inline-flex items-center gap-2 bg-red-100 px-3 py-1 rounded text-sm">
                      {searchFilter.location}
                      <button
                        onClick={handleClearLocation}
                        className="hover:bg-gray-200 p-1 rounded transition-colors"
                      >
                        <img
                          className="w-4 h-4 cursor-pointer"
                          src={assets.cross_icon}
                          alt="Clear location"
                        />
                      </button>
                    </span>
                  )}
                </div>
              </>
            )}

            {/* Categories Section */}
            <div className="mb-8">
              <h4 className="font-semibold mb-3">Search By Categories</h4>
              <input
                type="text"
                placeholder="Categories"
                className="border border-gray-300 rounded w-full p-2 mb-3"
              />
              <ul className="space-y-2">
                {JobCategories.map((category, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <input type="checkbox" name={category} id={category} />
                    <label htmlFor={category}>{category}</label>
                  </li>
                ))}
              </ul>
            </div>

            {/* Locations Section */}
            <div>
              <h4 className="font-semibold mb-3">Search by location</h4>
              <input
                type="text"
                placeholder="Location"
                className="border border-gray-300 rounded w-full p-2 mb-3"
              />
              <ul className="space-y-2">
                {JobLocations.map((location, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <input type="checkbox" name={location} id={location} />
                    <label htmlFor={location}>{location}</label>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Main Content - Latest Jobs */}
        <div className="w-full lg:w-3/4">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-medium text-3xl mb-2" id="job-list">
              Latest Jobs
            </h3>
            <p className="text-gray-600 mb-8">
              Get Your desired jobs from top companies
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Job cards will go here */}
              {jobsData.map((job, index) => (
                <JobCard key={index} job={job} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobListing;
