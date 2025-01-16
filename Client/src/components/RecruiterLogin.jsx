import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { Upload, X } from "lucide-react";
import { AppContext } from "../context/AppContext";

const RecruiterLogin = ({ onClose }) => {
  const [state, setState] = useState("Login");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [companyLogo, setCompanyLogo] = useState(null);
  const [signupStep, setSignupStep] = useState(1);
  const { setRecruiterLogin } = useContext(AppContext);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCompanyLogo(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle final submission logic here
  };
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);
  return (
    <>
      <div className="fixed inset-0 backdrop-blur-sm bg-black/30" />

      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="relative bg-white rounded-lg shadow-xl p-8 w-96">
          {/* Close Button */}
          <button
            onClick={() => setRecruiterLogin(false)}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X size={24} />
          </button>

          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <div className="text-center">
              <h1 className="text-2xl font-bold mb-2">Recruiter {state}</h1>
              <p className="text-gray-600">
                Welcome back! Please {state.toLowerCase()} to continue
              </p>
            </div>

            {state === "Login" ? (
              // Login Form
              <div className="space-y-4">
                <div className="flex items-center gap-3 border rounded-lg p-3 focus-within:border-blue-500 transition-colors">
                  <img
                    src={assets.email_icon}
                    alt=""
                    className="w-5 h-5 opacity-50"
                  />
                  <input
                    type="email"
                    value={email}
                    placeholder="Company email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 outline-none"
                  />
                </div>

                <div className="flex items-center gap-3 border rounded-lg p-3 focus-within:border-blue-500 transition-colors">
                  <img
                    src={assets.person_icon}
                    alt=""
                    className="w-5 h-5 opacity-50"
                  />
                  <input
                    type="password"
                    value={password}
                    placeholder="Company password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="flex-1 outline-none"
                  />
                </div>
              </div>
            ) : (
              // Signup Form Steps
              <div className="space-y-4">
                {signupStep === 1 ? (
                  // Step 1: Company Details
                  <>
                    <div className="flex items-center gap-3 border rounded-lg p-3 focus-within:border-blue-500 transition-colors">
                      <img
                        src={assets.person_icon}
                        alt=""
                        className="w-5 h-5 opacity-50"
                      />
                      <input
                        type="text"
                        value={name}
                        placeholder="Company name"
                        onChange={(e) => setName(e.target.value)}
                        className="flex-1 outline-none"
                      />
                    </div>

                    <div className="flex items-center gap-3 border rounded-lg p-3 focus-within:border-blue-500 transition-colors">
                      <img
                        src={assets.email_icon}
                        alt=""
                        className="w-5 h-5 opacity-50"
                      />
                      <input
                        type="email"
                        value={email}
                        placeholder="Company email"
                        onChange={(e) => setEmail(e.target.value)}
                        className="flex-1 outline-none"
                      />
                    </div>

                    <div className="flex items-center gap-3 border rounded-lg p-3 focus-within:border-blue-500 transition-colors">
                      <img
                        src={assets.person_icon}
                        alt=""
                        className="w-5 h-5 opacity-50"
                      />
                      <input
                        type="password"
                        value={password}
                        placeholder="Company password"
                        onChange={(e) => setPassword(e.target.value)}
                        className="flex-1 outline-none"
                      />
                    </div>
                  </>
                ) : (
                  // Step 2: Company Logo Upload
                  <div className="flex flex-col items-center gap-4">
                    <label className="flex flex-col items-center gap-4 cursor-pointer">
                      <div className="w-32 h-32 border-2 border-dashed border-blue-400 rounded-lg flex items-center justify-center bg-blue-50">
                        {companyLogo ? (
                          <img
                            src={URL.createObjectURL(companyLogo)}
                            alt="Company Logo Preview"
                            className="w-full h-full object-cover rounded-lg"
                          />
                        ) : (
                          <div className="flex flex-col items-center text-blue-500">
                            <Upload size={24} />
                            <span className="text-sm mt-2">Upload Logo</span>
                          </div>
                        )}
                      </div>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                    </label>
                  </div>
                )}
              </div>
            )}

            <div className="flex justify-between items-center text-sm">
              <button
                type="button"
                className="text-blue-600 hover:underline"
                onClick={() => {
                  setState(state === "Login" ? "Sign Up" : "Login");
                  setSignupStep(1);
                }}
              >
                {state === "Login" ? "Sign Up" : "Login"}
              </button>
              {state === "Login" && (
                <button type="button" className="text-blue-600 hover:underline">
                  Forgot Password?
                </button>
              )}
            </div>

            <button
              type="button"
              className="bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors"
              onClick={() => {
                if (state === "Sign Up") {
                  if (signupStep === 1) {
                    setSignupStep(2);
                  } else {
                    handleSubmit();
                  }
                }
              }}
            >
              {state === "Login"
                ? "Login"
                : signupStep === 1
                ? "Next"
                : "Create Account"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default RecruiterLogin;
