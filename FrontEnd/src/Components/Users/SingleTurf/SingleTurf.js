import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getTurf, toBookTurf } from "../../../API/UserAuth";
import { getTimeSlot } from "./Timeslot";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const SingleTurf = () => {
  const { token } = useSelector((state) => state.user);
  console.log(token);
  const Location = useLocation();
  const ID = Location.state;
  const [data, setData] = useState({});
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("");

  const fetchTurf = async (ID) => {
    const data = await getTurf(ID);
    return data;
  };

  const startingTime = "17:00";
  const closingTime = "23:00";

  const slots = getTimeSlot(startingTime, closingTime, 60);

  const Time = async (time) => {
    const ID=data._id;
    setTime(time);
    const response = await toBookTurf(ID, date, time, token);
    alert(response.status)
  };

  useEffect(() => {
    fetchTurf(ID).then((data) => setData(data.turf));
  }, []);

  return (
    <>
      <section className="text-gray-900 bg-gray-100 body-font w-full">
        <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
          <img
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded border-2"
            alt="hero"
            src={data?.images?.[0].location}
          />
          <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-2 font-medium text-black  ">
              {data?.turfName}
            </h1>
            <p className=" leading-relaxed">{data?.location}</p>
            <p>{data?.contactNumber}</p>
          </div>
        </div>

        {slots.map((res, index) => (
          <div className="flex justify-center">
            <div className=" m-4  ">
              <button
                key={index}
                className="p-2 bg-slate-500"
                onClick={() => Time(res)}
              >
                {res}
              </button>
            </div>
          </div>
        ))}
        <Calendar onChange={setDate} value={date} />
      </section>
    </>
  );
};
export default SingleTurf;
