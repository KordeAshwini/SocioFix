import React from "react";
import { IoCloseOutline } from "react-icons/io5";


const Popup = ({ signInPopup, setSignInPopup,setSignUpPopup }) => {
  return (
    <>
      {signInPopup && (
        <div className="popup">
          <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200 w-[300px]">
              {/* header */}
              <div className="flex items-center justify-between">
                <div>
                  <h1>Sign In</h1>
                </div>
                <div>
                  <IoCloseOutline
                    className="text-2xl cursor-pointer "
                    onClick={() => setSignInPopup(false)}
                  />
                </div>
              </div>
              {/* form section */}
              <div className="mt-4">
                {/* <input
                  type="text"
                  placeholder="Name"
                  className=" w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
                /> */}
                <input
                  type="email"
                  placeholder="Email"
                  className=" w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
                />
                 <input
                type="password"
                name="password"
                placeholder="Password"
                className=" w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
                //required
              />
                <select
                    className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-2 mb-4"
                  >
                    <option value="" disabled selected>
                      Select Role
                    </option>
                    <option value="service-provider">Service Provider</option>
                    <option value="society-member">Society Member</option>
                    <option value="admin">Admin</option>
                  </select>

                <div className="flex justify-center">
                  <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full ">
                    Sign In
                  </button>
                  </div>
                  <br></br>
                  <div className="flex justify-center">
                  <p>Don't have an account?</p>
                  <button
                    className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full "
                    onClick={() => {
                      setSignInPopup(false);
                      setSignUpPopup(true);
                    }}
                  >
                    Sign Up
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

export default Popup;
