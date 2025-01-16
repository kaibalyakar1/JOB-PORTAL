import { useState } from "react";
import { createContext, useEffect } from "react";
import { jobsData } from "../assets/assets";
export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [searchFilter, setSearchFilter] = useState({
    search: "",
    location: "",
  });

  const [isSearched, setIsSearched] = useState(false);
  const [jobs, setJobs] = useState([]);

  const [recruiterLogin, setRecruiterLogin] = useState(false);

  const fetchJobs = async () => {
    setJobs(jobsData);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const value = {
    searchFilter,
    setSearchFilter,
    isSearched,
    setIsSearched,
    jobs,
    setJobs,
    recruiterLogin,
    setRecruiterLogin,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
