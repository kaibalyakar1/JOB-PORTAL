import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { assets } from "../assets/assets";
import AddJob from "./AddJob";

const Dashboard = () => {
  return (
    <div className="min-h-screen">
      <div className="shadow py-4">
        <div className="px-5 flex items-center justify-between">
          <img
            className="max-sm:w-32 cursor-pointer"
            src={assets.logo}
            alt=""
          />
          <div className="flex items-center gap-4">
            <p className="max-sm:hidden">Welcome Rec</p>
            <div className="flex items-center gap-2 relative group">
              <img src={assets.company_icon} alt="" />
              <div className="absolute top-16 bg-blue-600 px-2 py-1 rounded text-white right-0 hidden group-hover:block z-10">
                <ul>
                  <li className="cursor-pointer">Logout</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-start">
        <div className="inline-block min-h-screen border-r-2">
          <ul>
            <NavLink
              to={"/dashboard/add-job"}
              className={({ isActive }) =>
                `flex items-center gap-2 p-3 sm:px-6 hover:bg-gray-100  ${
                  isActive && "bg-blue-100 border-r-4 border-blue-500"
                } `
              }
            >
              <img className="min-w-4" src={assets.add_icon} alt="" />
              <p className="max-sm:hidden">Add Job</p>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `flex items-center gap-2 p-3 sm:px-6 hover:bg-gray-100  ${
                  isActive && "bg-blue-100 border-r-4 border-blue-500"
                } `
              }
              to={"/dashboard/manage-jobs"}
            >
              <img lassName="min-w-4" src={assets.home_icon} alt="" />
              <p className="max-sm:hidden">Manage Jobs</p>
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                `flex items-center gap-2 p-3 sm:px-6 hover:bg-gray-100  ${
                  isActive && "bg-blue-100 border-r-4 border-blue-500"
                } `
              }
              to={"/dashboard/view-applications"}
            >
              <img lassName="min-w-4" src={assets.person_tick_icon} alt="" />
              <p className="max-sm:hidden">View Applications</p>
            </NavLink>
          </ul>
        </div>

        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
