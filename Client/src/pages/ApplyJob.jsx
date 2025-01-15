import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import { Puff } from "react-loader-spinner";
import Navbar from "../components/Navbar";
import JobCard from "../components/JobCard";
import Footer from "../components/Footer";

const ApplyJob = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const { jobs } = useContext(AppContext);

  useEffect(() => {
    if (jobs.length > 0) {
      const data = jobs.filter((job) => job._id === id);
      if (data.length > 0) {
        setJob(data[0]);
      }
    }
  }, [id, jobs]);

  if (!job) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Puff />
      </div>
    );
  }

  return (
    <div className="max-w-8xl mx-auto">
      <Navbar />
      <main className="max-w-8xl mx-auto">
        <div className="w-[80%] h-[250px] mx-auto mt-4 p-10 border-2 border-blue-400 rounded-lg bg-blue-50 flex flex-col justify-center">
          <div className="flex items-center justify-between">
            <div className="flex gap-4 items-center flex-1">
              <div className="bg-white w-[10%] h-[100px] flex items-center justify-center px-4 rounded-lg">
                <img
                  src={assets.company_icon}
                  alt="Company logo"
                  className="w-15 h-full object-contain"
                />
              </div>
              <div className="flex flex-col ml-4">
                <h1 className="text-3xl font-semibold">{job.title}</h1>
                <div className="flex items-center gap-8 mt-5 ">
                  <div className="flex items-center gap-1 font-semibold">
                    {" "}
                    <img src={assets.suitcase_icon} alt="Company" />
                    <span>{job.companyId.name}</span>
                  </div>
                  <div className="flex items-center gap-1 font-semibold">
                    <img src={assets.location_icon} alt="Location" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-1 font-semibold">
                    <img src={assets.person_icon} alt="Experience level" />
                    <span>{job.level}</span>
                  </div>
                  <div className="flex items-center gap-1 font-semibold">
                    <img src={assets.money_icon} alt="Salary" />
                    <span>{job.salary}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <button className="bg-blue-600 w-36 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors mb-2">
                Apply
              </button>
              <p className="text-sm text-gray-600">Posted 25min ago</p>
            </div>
          </div>
        </div>
        <div className="w-[80%] mx-auto mt-10 flex">
          {/* Job Description */}

          <div className="flex flex-col gap-8 w-[100%]">
            <section className="w-[80%]">
              <h1 className="text-2xl font-bold mb-4">Job Description</h1>
              <p
                className="rich-text text-lg"
                dangerouslySetInnerHTML={{
                  __html: job.description.slice(0, 10000),
                }}
              ></p>
              <button className="bg-blue-600 w-36 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors mt-8">
                Apply
              </button>
            </section>
          </div>

          {/* Side Cards */}
          <div className="w-[50%]">
            <h1 className="text-2xl font-semibold mt-10">Similar Jobs</h1>
            <div className="flex flex-wrap gap-10 mt-6">
              {jobs
                .slice(0, 4)
                .filter((job) => job._id !== id)
                .map((job) => (
                  <JobCard key={job._id} job={job} /> // eslint-disable-line
                ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ApplyJob;
