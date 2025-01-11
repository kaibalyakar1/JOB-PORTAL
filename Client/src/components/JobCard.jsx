import React from "react";
import { assets } from "../assets/assets";

const JobCard = ({ job }) => {
  return (
    <div className="bg-white p-4 rounded-md shadow-2xl">
      <div className="items-center gap-4">
        <img className="w-7" src={assets.company_icon} alt="" />
        <h4 className="font-semibold text-md">{job.title}</h4>
        <div className="flex items-center gap-2 mt-2">
          <p className="bg-blue-50 px-2 text-md py-1.5 border-blue-100 border-2 rounded-sm text-sm">
            {job.location}
          </p>
          <p className="bg-red-50 px-3 py-1.5 text-md py-1.5 border-red-100 border-2 rounded-md text-sm">
            {job.level}
          </p>
        </div>
        <p
          className="text-gray-600 mt-2"
          dangerouslySetInnerHTML={{ __html: job.description.slice(0, 150) }}
        ></p>
        <div className="flex items-center justify-between mt-4">
          <button className="bg-blue-600  px-1 py-1 rounded text-white w-[100px]">
            Apply.
          </button>
          <button>Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
