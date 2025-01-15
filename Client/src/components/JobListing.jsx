import React, { useContext, useEffect, useState, useRef } from "react";
import { AppContext } from "../context/AppContext";
import { assets, JobCategories, JobLocations } from "../assets/assets";
import JobCard from "./JobCard";

// Enhanced SearchInput component with automatic suggestions
const SearchInput = ({
  placeholder,
  items,
  onSelect,
  type = "text",
  value = "",
  onChange,
}) => {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [inputValue, setInputValue] = useState(value);
  const [filteredItems, setFilteredItems] = useState([]);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const wrapperRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Reset highlighted index when filtered items change
  useEffect(() => {
    setHighlightedIndex(-1);
  }, [filteredItems]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    onChange?.(value);

    // Auto-suggest as user types
    const filtered = items.filter((item) =>
      item.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredItems(filtered);
    setShowSuggestions(true);
  };

  const handleKeyDown = (e) => {
    if (!showSuggestions) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setHighlightedIndex((prev) =>
          prev < filteredItems.length - 1 ? prev + 1 : prev
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : -1));
        break;
      case "Enter":
        e.preventDefault();
        if (highlightedIndex >= 0) {
          handleSuggestionClick(filteredItems[highlightedIndex]);
        }
        break;
      case "Escape":
        setShowSuggestions(false);
        break;
    }
  };

  const handleSuggestionClick = (item) => {
    setInputValue(item);
    onSelect(item);
    setShowSuggestions(false);
    inputRef.current?.blur();
  };

  return (
    <div className="relative" ref={wrapperRef}>
      <input
        ref={inputRef}
        type={type}
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        onFocus={() => inputValue && setShowSuggestions(true)}
        placeholder={placeholder}
        className="border border-gray-300 rounded w-full p-2 mb-3"
        autoComplete="off"
      />
      {showSuggestions && (
        <div className="absolute z-10 w-full bg-white border border-gray-200 rounded-md shadow-lg max-h-48 overflow-y-auto">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (
              <div
                key={index}
                className={`px-4 py-2 cursor-pointer ${
                  index === highlightedIndex
                    ? "bg-blue-100"
                    : "hover:bg-gray-100"
                }`}
                onClick={() => handleSuggestionClick(item)}
                onMouseEnter={() => setHighlightedIndex(index)}
              >
                {item}
              </div>
            ))
          ) : (
            <div className="px-4 py-2 text-gray-500">No matches found</div>
          )}
        </div>
      )}
    </div>
  );
};

const JobListing = () => {
  const { isSearched, searchFilter, setSearchFilter, jobs } =
    useContext(AppContext);
  const [showFilter, setShowFilter] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 6;
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState([]);

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

  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    document.getElementById("job-list")?.scrollIntoView({ behavior: "smooth" });
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  const handleCategory = (category) => {
    setSelectedCategory((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
  };

  const handleLocations = (location) => {
    setSelectedLocation((prev) =>
      prev.includes(location)
        ? prev.filter((item) => item !== location)
        : [...prev, location]
    );
  };

  useEffect(() => {
    const matchesCategory = (job) =>
      selectedCategory.length == 0 || selectedCategory.includes(job.category);
    const matchesLocation = (job) =>
      selectedLocation.length == 0 || selectedLocation.includes(job.location);
    const matchesTitle = (job) =>
      searchFilter.search == "" ||
      job.title.toLowerCase().includes(searchFilter.search.toLowerCase());
    const matchesSearchLocation = (job) =>
      searchFilter.location == "" ||
      job.location.toLowerCase().includes(searchFilter.location.toLowerCase());

    const newFilteredJobs = jobs
      .slice()
      .reverse()
      .filter(
        (job) =>
          matchesCategory(job) &&
          matchesLocation(job) &&
          matchesTitle(job) &&
          matchesSearchLocation(job)
      );

    setFilteredJobs(newFilteredJobs);
    setCurrentPage(1);
  }, [jobs, selectedCategory, selectedLocation, searchFilter]);

  if (!searchFilter) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 lg:w-[75.8%]">
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

            <button
              onClick={() => setShowFilter((prev) => !prev)}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-white hover:text-black border border-blue-600 transition-colors w-[30%] mb-4"
            >
              {showFilter ? "Close" : "Filter"}
            </button>

            {/* Categories Section */}
            <div className={showFilter ? "" : "max-lg:hidden"}>
              <h4 className="font-semibold mb-3">Search By Categories</h4>
              <SearchInput
                placeholder="Categories"
                items={JobCategories}
                onSelect={handleCategory}
              />
              <ul className="space-y-2">
                {JobCategories.map((category, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      onChange={() => handleCategory(category)}
                      checked={selectedCategory.includes(category)}
                      name={category}
                      id={category}
                    />
                    <label htmlFor={category}>{category}</label>
                  </li>
                ))}
              </ul>
            </div>

            {/* Locations Section */}
            <div className={showFilter ? "" : "max-lg:hidden"}>
              <h4 className="font-semibold mb-3">Search by location</h4>
              <SearchInput
                placeholder="Location"
                items={JobLocations}
                value={searchFilter.location}
                onChange={(value) => {
                  setSearchFilter((prev) => ({
                    ...prev,
                    location: value,
                  }));
                }}
                onSelect={(location) => {
                  setSearchFilter((prev) => ({
                    ...prev,
                    location: location,
                  }));
                }}
              />
              <ul className="space-y-2">
                {JobLocations.map((location, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      onChange={() => handleLocations(location)}
                      checked={selectedLocation.includes(location)}
                      name={location}
                      id={location}
                    />
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
              {currentJobs.map((job, index) => (
                <JobCard key={index} job={job} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Pagination */}
      {filteredJobs.length > 0 && (
        <div className="flex items-center justify-center gap-2 mt-4">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="disabled:opacity-50"
          >
            <img
              className="w-3 items-center mb-3 font-bold cursor-pointer"
              src={assets.left_arrow_icon}
              alt="Previous page"
            />
          </button>

          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`h-5 w-5 flex items-center justify-center px-2 py-1 text-sm mb-3 ${
                currentPage === index + 1
                  ? "bg-blue-800 text-white"
                  : "bg-white text-blue-800"
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="disabled:opacity-50"
          >
            <img
              className="w-3 items-center mb-3 font-bold cursor-pointer"
              src={assets.right_arrow_icon}
              alt="Next page"
            />
          </button>
        </div>
      )}
    </div>
  );
};

export default JobListing;
