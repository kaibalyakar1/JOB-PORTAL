import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ApplyJob from "./pages/ApplyJob";
import Applications from "./pages/Applications";
import { AppContext } from "./context/AppContext";
import RecruiterLogin from "./components/RecruiterLogin";

const App = () => {
  const { recruiterLogin } = useContext(AppContext);

  return (
    <>
      {recruiterLogin && <RecruiterLogin />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply-job/:id" element={<ApplyJob />} />
        <Route path="/applications" element={<Applications />} />
      </Routes>
    </>
  );
};

export default App;
