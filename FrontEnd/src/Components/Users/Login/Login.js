import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginForm } from "../../../API/UserAuth";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../../../Store/userSlice";
import AlertMessage from "../../AlertMessage/AlertMessage";

function Login() {
  const { name } = useSelector((state) => state.user);
  console.log(name);
  const Navigate = useNavigate();
  const Dispatch = useDispatch();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleClose = () => {
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await LoginForm(formData);
    if (data.status === 200) {
      Dispatch(
        setToken({
          name: data.name,
          token: data.token,
        })
      );
      Navigate("/");
    }

    if (data?.status === 401) return setError(data?.data?.message);
  };

  return (
    <>
      <div className="absolute bg-white w-full h-screen top-0 left-0 opacity-80 z-[-1]" />
      <div className="flex justify-center items-center h-screen z-10">
        <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10  border-2  text-black">
          <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold">Login</h1>
            <p className="text-sm text-gray-400">
              Login to access your account
            </p>
            {error && <AlertMessage message={error} close={handleClose} />}
          </div>
          <form onSubmit={handleSubmit} className="space-y-12 ng- ng- ng-">
            <div className="space-y-4">
              <div>
                <label htmlfor="email" className="block mb-2 text-sm">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  id="email"
                  placeholder="leroy@jenkins.com"
                  className="w-full px-3 py-2 border rounded-md  border-black  text-black"
                />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <label htmlFor="email" className="block mb-2 text-sm">
                    Password
                  </label>
                </div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="*****"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md border-black text-gray-900"
                />
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <button
                  type="submit"
                  className="w-full px-8 py-3 font-semibold rounded-md border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
                >
                  Sign in
                </button>
              </div>
              <p className="px-6 text-sm text-center text-gray-400">
                Don't have an account yet?
                <Link
                  rel="noopener noreferrer"
                  to={"/signup"}
                  className="hover:underline text-black"
                >
                  Sign up
                </Link>
                .
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
