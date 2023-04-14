import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setAdmin } from "../../../Store/AdminSlice";
import { resetAdmin } from "../../../Store/AdminSlice";

const Navbar = () => {
  const { token } = useSelector((state) => state.admin);
  const adminToken = window.localStorage.getItem("token");
  if (adminToken) {
    const Dispatch = useDispatch();
    Dispatch(setAdmin(adminToken));
  }
  let Links = [
    { name: "DASHBOARD", link: "/admin" },
    { name: "REQUESTED TURFS", link: "/admin/requested" },
    { name: "TURFS", link: "/admin/turfs" },
    { name: "USERS", link: "/admin/users" },
    { name: "SALES REPORT", link: "/admin/salesreports" },
  ];
  const Navigate = useNavigate();
  const handleLogout = () => {
    window.localStorage.removeItem("token");
    resetAdmin();
    Navigate('/admin/login');
  };

  let [open, setOpen] = useState(false);

  return (
    <>
      {" "}
      <div className="shadow-lg w-full fixed z-20 top-0 left-0">
        <div className="lg:flex items-center justify-between bg-red-700 py-4 lg:px-10 px-7">
          <div
            className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-white"
          >
            Play Time
          </div>

          <div
            onClick={() => setOpen(!open)}
            className="text-9xl font-extrabold text-white absolute right-8 top-6 cursor-pointer lg:hidden"
          >
            {open ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-x"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-list"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0  1-.5-.5z"
                />
              </svg>
            )}
          </div>

          <ul
            className={`lg:flex lg:items-center lg:pb-0 pb-12 absolute lg:static lg:z-auto z-[-1] left-0 w-full  lg:w-auto lg:pl-0   pl-9  transition-all duration-500 ease-in ${
              open ? "top-[67px] " : "top-[-490px]"
            }`}
          >
            {Links.map((link) => (
              <li key={link.name} className="text-sm lg:ml-8 lg:my-0 my-7">
                <Link
                  to={link.link}
                  className="text-gray-800 lg:text-white hover:text-gray-400 duration-500"
                >
                  {link.name}
                </Link>
              </li>
            ))}
            {token ? (
              <li className="text-sm lg:ml-8 lg:my-0 my-7">
                <button
                  className="text-gray-800 lg:text-white hover:text-gray-400 duration-500"
                  onClick={handleLogout}
                >
                  LOG OUT
                </button>
              </li>
            ) : (
              <li className="text-sm lg:ml-8 lg:my-0 my-7">
                <Link
                  to={"/admin/login"}
                  className="text-gray-800 lg:text-white hover:text-gray-400 duration-500"
                >
                  LOGIN
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
