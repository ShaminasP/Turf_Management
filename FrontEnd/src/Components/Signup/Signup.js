import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SignupForm } from "../../API/UserAuth";
import OtpForm from "../OtpForm/OtpForm";
const initialState = {
  name: "",
  email: "",
  password: "",
  mobile: "",
};

function Signup() {
  const [formData, setFormData] = useState(initialState);
  const [otp, setOtp] = useState(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const submitForm = (e) => {
    e.preventDefault();
    SignupForm(formData).then(() => {
      // setFormData(initialState);
      setOtp(true);
    });
  };
  return (
    <>
      {otp ? (
        <OtpForm formData={formData} />
      ) : (
        <>
          <div className="absolute bg-black w-full h-screen top-0 left-0 opacity-80 z-[-1]" />
          <div className="flex justify-center items-center h-screen z-10">
            <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-900 text-gray-100">
              <div className="mb-8 text-center">
                <h1 className="my-3 text-4xl font-bold">Sign up</h1>
                <p className="text-sm text-gray-400">
                  Welcome to the world of SPORTS
                </p>
              </div>
              <form
                onSubmit={submitForm}
                novalidate=""
                action=""
                className="space-y-12 ng-untouched ng-pristine ng-valid"
              >
                <div className="space-y-4">
                  <div>
                    <label for="name" className="block mb-2 text-sm">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="leroy"
                      className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100"
                    />
                  </div>
                  <div>
                    <label for="email" className="block mb-2 text-sm">
                      Email address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="leroy@jenkins.com"
                      className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100"
                    />
                  </div>
                  <div>
                    <label for="mobile" className="block mb-2 text-sm">
                      Mobile
                    </label>
                    <input
                      type="text"
                      name="mobile"
                      id="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      placeholder="7034002589"
                      className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100"
                    />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <label for="password" className="text-sm">
                        Password
                      </label>
                    </div>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="*****"
                      className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <div>
                    <button
                      type="submit"
                      className="w-full px-8 py-3 font-semibold rounded-md bg-violet-400 text-gray-900"
                    >
                      Sign Up
                    </button>
                  </div>
                  <p className="px-6 text-sm text-center text-gray-400">
                    Already have an account?
                    <Link
                      rel="noopener noreferrer"
                      to={"/login"}
                      className="hover:underline text-violet-400"
                    >
                      Login
                    </Link>
                    .
                  </p>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Signup;
