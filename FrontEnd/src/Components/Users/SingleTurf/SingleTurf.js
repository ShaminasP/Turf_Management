import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getTurf } from "../../../API/UserAuth";
import "react-calendar/dist/Calendar.css";
import Booking from "./Booking";

const SingleTurf = () => {
  const Location = useLocation();
  const ID = Location.state;
  const [data, setData] = useState({});
  console.log(data);
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
          <div className="container mx-auto flex flex-col items-center justify-center px-5 py-24">
            <img
              className="w-[450px] md:max-w-2xl rounded mb-10 object-cover object-center"
              alt="hero"
              src={data?.images?.[0].location}
            />
            <div className="w-full lg:w-2/3 text-center">
              <h1 className="text-3xl sm:text-4xl font-medium text-gray-900 mb-4">
                <span className="font-bold">{data?.turfName}</span>
              </h1>
              <span className="text-gray-600 p-2 "> {data?.location}</span>

              <h3 className="text-2xl font-semibold p-2">₹{data?.fee}</h3>
              <div className="flex justify-center items-center mb-4">
                <span className="text-yellow-500 mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-4 h-4 fill-current"
                  >
                    <path d="M499.267,198.052c-2.944-9.024-11.008-15.04-20.544-15.04H327.523L277.931,54.308C273.707,43.876,264.611,37,255.491,37    s-18.213,6.876-22.443,17.308L184.479,183.012H32.277c-9.536,0-17.6,6.016-20.544,15.04c-2.944,9.024-0.64,18.816,6.912,25.472    l122.88,122.88L87.043,457.348c-2.368,7.424-1.536,15.36,2.368,22.016c3.904,6.656,10.56,10.624,17.856,10.624    c2.688,0,5.376-0.48,7.936-1.472l143.808-60.48l143.808,60.48c4.352,1.824,8.96,2.752,13.504,2.752c7.68,0,15.36-2.944,21.184-8.832    c3.904-6.656,4.736-14.592,2.368-22.016l-38.912-122.88l122.88-122.88C499.907,216.868,502.211,207.076,499.267,198.052z" />
                  </svg>
                </span>
                <span className="text-gray-600 font-bold">4.5</span>
                <span className="text-gray-600 mx-2">          </span>
                <span className="text-gray-600">5 Reviews</span>
              </div>
              <div className="flex justify-center">
                <button
                  className="px-6 py-2 text-lg font-bold rounded-md text-white bg-indigo-500 hover:bg-indigo-600 border-none focus:outline-none"
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
