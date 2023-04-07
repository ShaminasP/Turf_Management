import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getTurf } from "../../../API/UserAuth";
import "react-calendar/dist/Calendar.css";
import Booking from "./Booking";

const SingleTurf = () => {
  const Location = useLocation();
  const ID = Location.state;
  const [data, setData] = useState({});
  const [showCalender, setShowCalender] = useState(false);
  const fetchTurf = async (ID) => {
    const data = await getTurf(ID);
    setData(data.turf);
  };

  useEffect(() => {
    fetchTurf(ID);
  }, []);

  return (
    <>
      <section className="text-gray-600 body-font">
        {showCalender ? (
          <Booking
            closingHour={data.closingHour}
            openingHour={data.openingHour}
            ID={data._id}
            setShowCalender={setShowCalender}
          />
        ) : (
          <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
            <img
              className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
              alt="hero"
              src={data?.images?.[0].location}
            />
            <div className="text-center lg:w-2/3 w-full">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                {data?.turfName}
              </h1>
              <p className="mb-8 leading-relaxed">{data?.location}</p>
              <div className="flex justify-center">
                <button
                  className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                  onClick={() => setShowCalender(true)}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};
export default SingleTurf;
