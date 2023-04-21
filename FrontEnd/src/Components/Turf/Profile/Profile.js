import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toUpdateTufDetails, viewTurfByOwner } from "../../../API/TurfAuth";
import Carousel from "./Carousal";
const TurfPorfile = () => {
  const { token } = useSelector((state) => state.turf);

  const [data, setData] = useState({});
  const [editMode, setEditMode] = useState(false);

  const updateData = async () => {
    setEditMode(false);
    const response = await toUpdateTufDetails(token, data);
   
  };

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
        <Carousel images={data?.images} />
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4 py-5">
          {data?.turfName}
        </h1>
        <div className="-mx-2 flex flex-wrap sm:mx-auto sm:mb-2 lg:w-4/5">
          <div className="w-full p-2 sm:w-1/2">
            <div className="flex h-full items-center rounded bg-gray-100 p-4">
              <div className="flex">
                <label htmlFor="" className="font-medium">
                  Location:{" "}
                </label>
                {editMode ? (
                  <input
                    className="px-3 bg-gray-100  "
                    type="text"
                    value={data?.location}
                    onChange={(e) =>
                      setData((prevData) => ({
                        ...prevData,
                        location: e.target.value,
                      }))
                    }
                  />
                ) : (
                  <span className="title-font font-medium px-3">
                    {data?.location}
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="w-full p-2 sm:w-1/2">
            <div className="flex h-full items-center rounded bg-gray-100 p-4">
              <div className="flex">
                <label htmlFor="" className="font-medium">
                  Contact Number:{" "}
                </label>
                {editMode ? (
                  <input
                    className="px-3 bg-gray-100  "
                    type="text"
                    value={data.contactNumber}
                    onChange={(e) =>
                      setData((prevData) => ({
                        ...prevData,
                        contactNumber: e.target.value,
                      }))
                    }
                  />
                ) : (
                  <span className="title-font font-medium px-3">
                    {data?.contactNumber}
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="w-full p-2 sm:w-1/2">
            <div className="flex h-full items-center rounded bg-gray-100 p-4">
              <div className="flex">
                <label htmlFor="" className="font-medium">
                  Email:{" "}
                </label>
                {editMode ? (
                  <input
                    className="px-3 bg-gray-100  "
                    type="text"
                    value={data.email}
                    onChange={(e) =>
                      setData((prevData) => ({
                        ...prevData,
                        email: e.target.value,
                      }))
                    }
                  />
                ) : (
                  <span className="title-font font-medium px-3">
                    {data?.email}
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="w-full p-2 sm:w-1/2">
            <div className="flex h-full items-center rounded bg-gray-100 p-4">
              <div className="flex">
                <label htmlFor="" className="font-medium">
                  Opening Time:{" "}
                </label>
                {editMode ? (
                  <input
                    className="px-3 bg-gray-100  "
                    type="time"
                    value={data.openingHour}
                    onChange={(e) =>
                      setData((prevData) => ({
                        ...prevData,
                        openingHour: e.target.value,
                      }))
                    }
                  />
                ) : (
                  <span className="title-font font-medium px-3">
                    {data?.openingHour}
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="w-full p-2 sm:w-1/2">
            <div className="flex h-full items-center rounded bg-gray-100 p-4">
              <div className="flex">
                <label htmlFor="" className="font-medium">
                  Closing Time:{" "}
                </label>
                {editMode ? (
                  <input
                    className="px-3 bg-gray-100  "
                    type="time"
                    value={data.closingHour}
                    onChange={(e) =>
                      setData((prevData) => ({
                        ...prevData,
                        closingHour: e.target.value,
                      }))
                    }
                  />
                ) : (
                  <span className="title-font font-medium px-3">
                    {data?.closingHour}
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="w-full p-2 sm:w-1/2">
            <div className="flex h-full items-center rounded bg-gray-100 p-4">
              <div className="flex">
                <label htmlFor="" className="font-medium">
                  Fee:{" "}
                </label>
                {editMode ? (
                  <input
                    className="px-3 bg-gray-100  "
                    type="text"
                    value={data?.fee}
                    onChange={(e) =>
                      setData((prevData) => ({
                        ...prevData,
                        fee: e.target.value,
                      }))
                    }
                  />
                ) : (
                  <span className="title-font font-medium px-3">
                    {data?.fee}
                  </span>
                )}
              </div>
            </div>
          </div>

          {editMode ? (
            <button
              className="flex mx-auto mt-16 text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg"
              onClick={() => updateData()}
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
