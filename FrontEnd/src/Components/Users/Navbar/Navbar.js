import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const isUser = Boolean(useSelector((state) => state.user.token));
  const { name } = useSelector((state) => state.user);
  const { turf } = useSelector((state) => state.user);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    if (turf) {
      setCurrentUser(turf.turfName);
    } else if (name) {
      setCurrentUser(name);
    } else {
      setCurrentUser(null);
    }
  });

  let Links = [
    { name: "HOME", link: "/" },
    { name: "BOOK TURF", link: "/view_turf" },
    { name: "RGISTER TURF", link: "/turf/register" },
    { name: "LOGIN", link: "/login" },
  ];

  let links = [
    { name: "HOME", link: "/" },
    { name: "BOOK TURF", link: "/view_turf" },
    { name: "RGISTER TURF", link: "/turf/register" },
  ];
  let [open, setOpen] = useState(false);

  return (
    <>
      {" "}
      <div className="shadow-lg w-full fixed top-0 left-0">
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
          {currentUser ? (
            <ul
              className={`lg:flex lg:items-center lg:pb-0 pb-12 absolute lg:static lg:z-auto z-[-1] left-0 w-full  lg:w-auto lg:pl-0   pl-9  transition-all duration-500 ease-in ${
                open ? "top-[67px] " : "top-[-490px]"
              }`}
            >
              {currentUser && turf ? (
                <>
                  <li className="text-sm lg:ml-8 lg:my-0 my-7">
                    <Link 
                      to={"/turf"}
                      className="text-gray-800 lg:text-white hover:text-gray-400 duration-500"
                      
                    >
                      DASHBOARD
                    </Link>
                  </li>
                  <li className="text-sm lg:ml-8 lg:my-0 my-7">
                    <Link
                      to={"/turf/profile"}
                      className="text-gray-800 lg:text-white hover:text-gray-400 duration-500"

                    >
                      {currentUser}
                    </Link>
                  </li>
                  <li className="text-sm lg:ml-8 lg:my-0 my-7">
                    <Link
                      to={""}
                      className="text-gray-800 lg:text-white hover:text-gray-400 duration-500"

                    >
                      LOG OUT
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  {links.map((link) => (
                    <li
                      key={link.name}
                      className="text-sm lg:ml-8 lg:my-0 my-7"
                    >
                      <Link
                        to={link.link}
                        className="text-gray-800 lg:text-white hover:text-gray-400 duration-500"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}<li className="text-sm lg:ml-8 lg:my-0 my-7">
                  <Link
                    to={""}
                    className="text-gray-800 lg:text-white hover:text-gray-400 duration-500"
                  >
                  {currentUser}
                  </Link>
                </li>
                  <li className="text-sm lg:ml-8 lg:my-0 my-7">
                    <Link
                      to={""}
                      className="text-gray-800 lg:text-white hover:text-gray-400 duration-500"
                    >
                      LOG OUT
                    </Link>
                  </li>
                </>
              )}
            </ul>
          ) : (
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
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
