import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

const Popup2 = ({ signUpPopup, setSignUpPopup,handleSignInPopup  }) => {
  const [role, setRole] = useState("Society Member");
  
  return (
    <>
      {signUpPopup && (
        <div className="popup">
          <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200 w-[400px]">
              {/* header */}
              <div className="flex items-center justify-between">
                <h1>Sign Up</h1>
                <IoCloseOutline
                  className="text-2xl cursor-pointer"
                  onClick={() => setSignUpPopup(false)}
                />
              </div>
              
              {/* Role Selection Tabs */}
              <div className="flex justify-center gap-4 mt-4">
                <button
                  className={`px-4 py-1 rounded-full ${role === "Society Member" ? "bg-primary text-white" : "bg-gray-300 dark:bg-gray-700"}`}
                  onClick={() => setRole("Society Member")}
                >
                  Society Member
                </button>
                <button
                  className={`px-4 py-1 rounded-full ${role === "Service Provider" ? "bg-primary text-white" : "bg-gray-300 dark:bg-gray-700"}`}
                  onClick={() => setRole("Service Provider")}
                >
                  Service Provider
                </button>
              </div>
              
              {/* form section */}
              <div className="mt-4 grid grid-cols-2 gap-4">
                <input type="text" placeholder="Name" className="col-span-2 w-full rounded border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1" />
                <input type="email" placeholder="Email" className="w-full rounded border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1" />
                <input type="password" name="password" placeholder="Password" className="w-full rounded border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1" />
                <input type="text" placeholder="Phone Number" className="col-span-2 w-full rounded border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1" />
                
                {/* Conditional Fields */}
                {role === "Society Member" ? (
                  <>
                    <input type="text" placeholder="Flat Number" className="w-full rounded border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1" />
                    <input type="text" placeholder="Building Number" className="w-full rounded border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1" />
                    <input type="text" value="Society Member" readOnly className="col-span-2 w-full rounded border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-500" />
                  </>
                ) : (
                  <>
                    <input type="text" placeholder="Service Name" className="w-full rounded border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1" />
                    <input type="text" placeholder="Years of Experience" className="w-full rounded border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1" />
                    <input type="text" placeholder="Availability" className="col-span-2 w-full rounded border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1" />
                    <input type="text" placeholder="Pricing Structure" className="col-span-2 w-full rounded border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1" />
                    <input type="file"placeholder="Upload Aadhar Card" accept=".pdf, .jpg, .jpeg" className="col-span-2 w-full rounded border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1" />
                    <input type="text" value="Service Provider" readOnly className="col-span-2 w-full rounded border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-500" />
                  </>
                )}
                
                <div className="col-span-2 flex justify-center">
                  <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full">
                    Sign Up
                  </button>
                </div>
                
                <div className="col-span-2 flex justify-center">
                   {/* Sign In Button */}
                   <p>Already have an account?</p>
                   <button 
                    className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full"
                    onClick={() => {
                      setSignUpPopup(false); // Close the Sign Up popup
                      handleSignInPopup(true); // Open the Sign In popup
                    }}
                  >
                    Sign In
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup2;
