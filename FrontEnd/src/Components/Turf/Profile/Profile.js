import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { viewTurfByOwner } from "../../../API/TurfAuth";
const TurfPorfile = () => {
  const { token } = useSelector((state) => state.user);
  console.log(token);

  const [data, setData] = useState({});
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await viewTurfByOwner(token);
      setData(response?.data?.turf);
    };
    fetchData();
  }, []);

  return (
    <section className="body-font text-gray-600">
      <div className="container mx-auto flex flex-col items-center justify-center px-5 py-24">
        <img
          className="mb-10 w-5/6 rounded object-cover object-center md:w-3/6 lg:w-2/6"
          alt="hero"
          src={data?.images}
        />
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
          {data?.turfName}
        </h1>
        <div className="-mx-2 flex flex-wrap sm:mx-auto sm:mb-2 lg:w-4/5">
          <div className="w-full p-2 sm:w-1/2">
            <div className="flex h-full items-center rounded bg-gray-100 p-4">
              <div className="flex">
                <label for="" className="font-medium">
                  {" "}
                  Turf Name:{" "}
                </label>
                <span className="title-font font-medium px-3">
                  {" "}
                  {data?.turfName}{" "}
                </span>
              </div>
            </div>
          </div>
          <div className="w-full p-2 sm:w-1/2">
            <div className="flex h-full items-center rounded bg-gray-100 p-4">
              <div className="flex">
                <label for="" className="font-medium">
                  Location:{" "}
                </label>
                <span className="title-font font-medium px-3">
                  {" "}
                  {data?.location}{" "}
                </span>
              </div>
            </div>
          </div>
          <div className="w-full p-2 sm:w-1/2">
            <div className="flex h-full items-center rounded bg-gray-100 p-4">
              <div className="flex">
                <label for="" className="font-medium">
                  Contact Number:{" "}
                </label>
                <span className="title-font font-medium px-3">
                  {" "}
                  {data?.contactNumber}{" "}
                </span>
              </div>
            </div>
          </div>
          <div className="w-full p-2 sm:w-1/2">
            <div className="flex h-full items-center rounded bg-gray-100 p-4">
              <div className="flex">
                <label for="" className="font-medium">
                  Email:{" "}
                </label>
                <span className="title-font font-medium px-3">
                  {" "}
                  {data?.email}{" "}
                </span>
              </div>
            </div>
          </div>
          <div className="w-full p-2 sm:w-1/2">
            <div className="flex h-full items-center rounded bg-gray-100 p-4">
              <div className="flex">
                <label for="" className="font-medium">
                  Working Hours:{" "}
                </label>
                <span className="title-font font-medium px-3">
                  {" "}
                  {data?.wo}{" "}
                </span>
              </div>
            </div>
          </div>
          <div className="w-full p-2 sm:w-1/2">
            <div className="flex h-full items-center rounded bg-gray-100 p-4">
              <div className="flex">
                <label for="" className="font-medium">
                  Fees:{" "}
                </label>
                <span className="title-font font-medium px-3">
                  {" "}
                  {data?.fees}{" "}
                </span>
              </div>
            </div>
          </div>
          {editMode ? (
            <button
              className="flex mx-auto mt-16 text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg"
              onClick={() => setEditMode(false)}
            >
              Save
            </button>
          ) : (
            <button
              className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              onClick={() => setEditMode(true)}
            >
              Edit
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default TurfPorfile;
