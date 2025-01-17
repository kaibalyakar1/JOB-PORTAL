import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { assets } from "../assets/assets";

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
              className={({ isActive }) =>
                (isActive ? "bg-blue-200" : "") + "flex items-center gap-2 p-4"
              }
              to={"/dashboard/add-job"}
            >
              <img src={assets.add_icon} alt="" />
              <p>Add Jobs</p>
            </NavLink>

            <NavLink
              className={"flex items-center gap-2 p-4"}
              to={"/dashboard/manage-jobs"}
            >
              <img src={assets.home_icon} alt="" />
              <p>Manage Jobs</p>
            </NavLink>

            <NavLink
              className={"flex items-center gap-2 p-4"}
              to={"/dashboard/view-applications"}
            >
              <img src={assets.person_tick_icon} alt="" />
              <p>View Applications</p>
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
