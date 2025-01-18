import React, { useEffect, useRef, useState } from "react";
import Quill from "quill";
import { use } from "react";
import { assets, JobCategories, JobLocations } from "../assets/assets";
const AddJob = () => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");

  const [category, setCategory] = useState("");
  const [level, setLevel] = useState("");
  const [description, setDescription] = useState("");
  const [salary, setSalary] = useState("0");
  const [company, setCompany] = useState("");

  const editorRef = useRef(null);
  const quillRef = useRef(null);
  useEffect(() => {
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: "snow",
      });
    }
  }, []);
  return (
    <div className="container flex flex-col w-full p-4 gap-4 mx-auto">
      <form action="">
        <div>
          <p>Job title</p>
          <input
            className="w-full max-w-lg px-3 py-2 border-2 border-gray-300 rounded"
            type="text"
            placeholder="Job title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </div>
        <div className="w-full max-w-lg">
          <p className="my-2">Job description</p>
          <div
            className="w-full max-w-lg px-3 py-2 border-2 border-gray-300 rounded"
            ref={editorRef}
          ></div>
        </div>
        <div className="flex gap-4 mt-6">
          <div className="mb-2">
            <p>Job category</p>
            <select
              className="w-full px-3 py-2 border-2 border-gray-300 rounded"
              onChange={(e) => setCategory(e.target.value)}
            >
              {JobCategories.map((category, index) => (
                <option key={index}>{category}</option>
              ))}
            </select>
          </div>

          <div>
            <p>Job location</p>
            <select
              className="w-full px-3 py-2 border-2 border-gray-300 rounded"
              onChange={(e) => setLocation(e.target.value)}
            >
              {JobLocations.map((category, index) => (
                <option key={index}>{category}</option>
              ))}
            </select>
          </div>

          <div>
            <p>Job level</p>
            <select
              className="w-full px-3 py-2 border-2 border-gray-300 rounded"
              onChange={(e) => setLevel(e.target.value)}
            >
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="senior">senior</option>
            </select>
          </div>
        </div>

        <div className="w-full max-w-lg mt-3">
          <p>Salary</p>
          <input
            className="w-[50%] px-3 py-2 border-2 border-gray-300 rounded"
            type="number"
            placeholder="Salary"
            onChange={(e) => setSalary(e.target.value)}
            value={salary}
            required
          />
        </div>
        <div className="w-full max-w-lg mt-6">
          <button className=" bg-black text-white w-20 px-3 py-2 border-2 border-gray-300 rounded hover:bg-white hover:text-black">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddJob;
