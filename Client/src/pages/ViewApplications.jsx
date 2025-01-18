import React from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { manageJobsData, viewApplicationsPageData } from "../assets/assets";

const ViewApplications = () => {
  const { searchFilter } = useContext(AppContext);
  return (
    <div className="container px-4 min-h-[65vh] 2xl:px-20 mx-auto my-10">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 m">
          <thead>
            <tr className="bg-gray-200 gap-4">
              <th>Name</th>
              <th>Location</th>
              <th>Applied On</th>
              <th>Resume</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {manageJobsData.map((applicant, index) => (
              <tr>
                <td>{index + 1}</td>
                <td className="flex gap-4">
                  <img src={applicant.imgSrc} alt="" />
                  <span>{applicant.name}</span>
                </td>
                <td>{Date.now().toString}</td>
                <td>{applicant.location}</td>

                <td>{applicant.applicants}</td>
                <td>{applicant.actions}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewApplications;
