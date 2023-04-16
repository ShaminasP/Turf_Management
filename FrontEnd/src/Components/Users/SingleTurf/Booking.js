import { loadStripe } from "@stripe/stripe-js";
import { useNavigate } from "react-router-dom";
import { getTimeSlot } from "./Timeslot";
import Calendar from "react-calendar";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  payementAction,
  toBookTurf,
  togetBookingslots,
} from "../../../API/UserAuth";

const Booking = ({ ID, openingHour, closingHour, setShowCalender }) => {
  const { token } = useSelector((state) => state.user);

  const [date, setDate] = useState(new Date());
  const [bookedTime, setBookedTime] = useState([]);

  const stripePromise = loadStripe(
    `${process.env.REACT_APP_YOUR_STRIPE_PUBLIC_KEY}`
  );

  const Navigate = useNavigate();

  const Time = async (time) => {
    if (!token) return Navigate("/login");
    const response = await toBookTurf(ID, date, time, token);
    if (response?.status === 200) {
      const stripe = await stripePromise;
      const result = await payementAction(response?.data?._id);

      if (result?.status === 200) {
        console.log(result);
        await stripe.redirectToCheckout({ sessionId: result.data.response });
      }
    }
  };

  const handleTimeClick = async (time) => {
    await Time(time);
    await getSlots(date, time);
  };

  const slots = getTimeSlot(openingHour, closingHour, 60);

  const getSlots = async (date) => {
    const response = await togetBookingslots(date, ID);
    if (response.status === 200) {
      const bookedTimes = response?.data.map((x) => x.time);
      setBookedTime(bookedTimes);
    }
  };
  const isDateDisabled = ({ date }) => {
    return date.getDay() === 0;
  };
  const today = new Date();
  const maxDate = new Date(
    today.getFullYear() + 1,
    today.getMonth() - 1,
    today.getDate()
  );

  useEffect(() => {
    ID && getSlots(date);
  }, [ID, date]);

  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <h2 className="font-sans font-bold p-5">Select Date</h2>

          <Calendar
            maxDate={maxDate}
            tileDisabled={isDateDisabled}
            minDate={new Date()}
            onChange={setDate}
          />
          <div class="text-center lg:w-2/3 w-full">
            <h2 className="font-sans font-bold p-5">Select Your Slots</h2>
            <div class="flex justify-center flex-wrap">
              {slots.map((time, index) => (
                <div className="flex justify-center" key={index}>
                  <div className="m-4">
                    {bookedTime.includes(time) ? (
                      <button
                        type="button"
                        className="px-8 py-3 font-semibold rounded-full bg-red-500 text-white"
                        disabled
                      >
                        Booked
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={() => handleTimeClick(time)}
                        className="px-8 py-3 font-semibold rounded-full bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
                      >
                        {time}
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setShowCalender(false)}
              className="px-8 py-3 font-semibold rounded-full bg-gray-500 text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75 mt-5"
            >
              Go Back
            </button>
            {bookedTime.length === slots.length && (
              <p className="text-red-500 font-medium mt-4">
                Sorry, all slots for this date are already booked.
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};
export default Booking;
