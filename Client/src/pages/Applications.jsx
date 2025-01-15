import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { assets, jobsApplied } from "../assets/assets";
import Footer from "../components/Footer";

const Applications = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [resume, setResume] = useState(null);
  return (
    <div>
      <Navbar />
      <div className="container px-4 min-h-[65vh] 2xl:px-20 mx-auto my-10">
        <h2 className="text-2xl font-semibold">Your Resume </h2>
        <div className="flex gap-2 mb-6 mt-3">
          {isEdit ? (
            <>
              <label className="flex items-center gap-2" htmlFor="">
                <p className="text-sm bg-blue-100 px-4 py-2">Upload Resume</p>
                <input
                  id="resumeUpload"
                  onChange={(e) => setResume(e.target.files[0])}
                  accept="application/pdf"
                  className="hidden"
                  type="file"
                />
                <img
                  className="hover:cursor-pointer"
                  src={assets.profile_upload_icon}
                  alt=""
                />
              </label>
              <button
                onClick={() => setIsEdit(false)}
                className="bg-blue-300 border-blue-500 px-4 py-2 rounded"
              >
                Save
              </button>
            </>
          ) : (
            <div className="flex gap-2">
              <a className="bg-blue-300 px-4 py-2 rounded lg" href="">
                Resume
              </a>
              <button
                className="bg-blue-100 px-4 py-2 rounded"
                onClick={() => setIsEdit(true)}
              >
                Edit
              </button>
            </div>
          )}
        </div>

        <h2>Applied Jobs</h2>
        <table className="min-w-full bg-white border rounded-lg">
          <thead>
            <tr>
              <th className="py-3 px-4 border-b text-left">Logo</th>
              <th className="py-3 px-4 border-b text-left">Company</th>
              <th className="py-3 px-4 border-b text-left">Job Title</th>
              <th className="py-3 px-4 border-b text-left">Location</th>
              <th className="py-3 px-4 border-b text-left">Date</th>
              <th className="py-3 px-4 border-b text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {jobsApplied.map((job, index) =>
              true ? (
                <tr>
                  <td className="py-3 px-4 flex items-center gap-2 border-b">
                    <img className="w-8 h-8" src={job.logo} alt="" />
                  </td>
                  <td className="py-3 px-4 border-b">{job.company}</td>
                  <td className="py-3 px-4 border-b">{job.title}</td>
                  <td className="py-3 px-4 border-b">{job.location}</td>
                  <td className="py-3 px-4 border-b">{job.date}</td>
                  <td className="py-3 px-4 border-b">
                    <span
                      className={`${
                        job.status === "Accepted"
                          ? "bg-green-500"
                          : job.status === "Pending"
                          ? "bg-yellow-500"
                          : "bg-red-500"
                      } text-white px-4 py-3 rounded-lg text-sm
                      }`}
                    >
                      {job.status}
                    </span>
                  </td>
                </tr>
              ) : null
            )}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
};

export default Applications;
