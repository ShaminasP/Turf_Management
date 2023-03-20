import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SignupForm } from "../../../API/UserAuth";
import AlertMessage from "../../AlertMessage/AlertMessage";
import OtpForm from "../OtpForm/OtpForm";
import { FormValidate } from "../../../Helpers/Helpers";

const initialState = {
  name: "",
  email: "",
  password: "",
  mobile: "",
};

function Signup() {
  const [formData, setFormData] = useState(initialState);
  const [otp, setOtp] = useState(false);
  const [error, setError] = useState("");
  const [dataError, setDataError] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const errors = FormValidate(formData);
    setDataError(errors);
    return Object.keys(errors).length === 0;
  };
  const handleClose = () => {
    setError("");
  };

  const submitForm = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    const response = await SignupForm(formData);
    console.log(response);
    if (response.status === 200) return setOtp(true);
    if (response.status === 409) return setError(response?.data?.message);
  };
  return (
    <>
      <div className="absolute bg-white w-full h-screen top-0 left-0 opacity-80 z-[-1]" />
      <div className="flex justify-center items-center h-screen z-10">
        {otp ? (
          <OtpForm formData={formData} />
        ) : (
          <>
            <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-white border-2 text-gray-900">
              <div className="mb-8 text-center">
                <h1 className="my-3 text-4xl font-bold">Sign up</h1>

                <p className="text-sm text-gray-700">
                  Welcome to the world of SPORTS
                </p>
                {error && <AlertMessage message={error} close={handleClose} />}
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
                      className="w-full px-3 py-2 border rounded-md border-gray-900  text-gray-900"
                    />
                    {dataError.name && (
                      <p className="text-red-500 mt-1 text-xs italic">
                        {" "}
                        {dataError.name}
                      </p>
                    )}
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
                      className="w-full px-3 py-2 border rounded-md border-gray-900  text-gray-900"
                    />
                    {dataError.email && (
                      <p className="text-red-500 mt-1 text-xs italic">
                        {" "}
                        {dataError.email}
                      </p>
                    )}
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
                      className="w-full px-3 py-2 border rounded-md  border-gray-900  text-gray-900"
                    />
                    {dataError.mobile && (
                      <p className="text-red-500 mt-1 text-xs italic">
                        {" "}
                        {dataError.mobile}
                      </p>
                    )}
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
                      className="w-full px-3 py-2 border rounded-md border-gray-900  text-gray-900"
                    />
                    {dataError.password && (
                      <p className="text-red-500 mt-1 text-xs italic">
                        {" "}
                        {dataError.password}
                      </p>
                    )}
                  </div>
                </div>
                <div className="space-y-2">
                  <div>
                    <button
                      type="submit"
                      className="w-full px-8 py-3 font-semibold rounded-md border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
                    >
                      Sign Up
                    </button>
                  </div>
                  <p className="px-6 text-sm text-center text-gray-700">
                    Already have an account?
                    <Link
                      rel="noopener noreferrer"
                      to={"/login"}
                      className="hover:underline text-black"
                    >
                      Login
                    </Link>
                    .
                  </p>
                </div>
              </form>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Signup;
