import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toGetBookings } from "../../../API/TurfAuth";
const Bookings = () => {
  let today = new Date();
  let month = String(today.getMonth() + 1).padStart(2, "0");
  let day = String(today.getDate()).padStart(2, "0");
  let year = today.getFullYear();
  let formattedDate = month + "/" + day + "/" + year;

  const todayDate = new Date(formattedDate);

  const { token } = useSelector((state) => state.turf);
  const [booking, setBooking] = useState([]);
  const [upcomingBookings, setUpcomingBookings] = useState([]);
  const [previousBookings, setPreviousBookings] = useState([]);
  const [showBookings, setShowBookings] = useState(true);

  const fetchBookings = async (token) => {
    const response = await toGetBookings(token);
    if (response.status === 200) {
      setBooking(response?.data);
      const upcomingBooking = response?.data.filter((booking) => {
        const bookedDate = new Date(booking?.bookDate);
        return  bookedDate => todayDate;
      });
      setUpcomingBookings(upcomingBooking);

      const previousBookings = response?.data.filter((booking) => {
        const bookedDate = new Date(booking?.bookDate);
       return bookedDate < todayDate;
        
      });
      setPreviousBookings(previousBookings);
    }
  };

  useEffect(() => {
    fetchBookings(token);
  }, []);
  return (
    <div className="overflow-x-auto p-20">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Booking ID</th>
            <th>User Name</th>
            <th>DATE</th>
            <th>TIME</th>
            <th>PAYMENT STATUS</th>
          </tr>
        </thead>
        <tbody>
          {showBookings ? (
            <>
              {upcomingBookings?.map((booked, index) => (
                <tr key={index}>
                  <th>{booked?._id}</th>
                  <td>{booked?.user?.name}</td>
                  <td>{new Date(booked?.bookDate).toLocaleDateString()}</td>
                  <td>{booked?.time}</td>
                  <td>
                    {" "}
                    {booked.payment === "Success" ? (
                      <button className="btn-success p-2">
                        {booked?.payment}
                      </button>
                    ) : (
                      <button className="btn-warning p-2">
                        {booked?.payment}
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </>
          ) : (
            <>
              {previousBookings?.map((booked, index) => (
                <tr key={index}>
                  <th>{booked?._id}</th>
                  <td>{booked?.user?.name}</td>
                  <td>{new Date(booked?.bookDate).toLocaleDateString()}</td>
                  <td>{booked?.time} </td>
                  <td>
                    {" "}
                    {booked.payment === "Success" ? (
                      <button className="btn-success p-2">
                        {booked?.payment}
                      </button>
                    ) : (
                      <button className="btn-warning p-2">
                        {booked?.payment}
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </>
          )}
        </tbody>
      </table>
      {showBookings ? (
        <button
          className="btn btn-border-2 float-right mt-5"
          onClick={() => setShowBookings(false)}
        >
          Show Previous Bookings
        </button>
      ) : (
        <button
          className="btn btn-border-2 float-right mt-5"
          onClick={() => setShowBookings(true)}
        >
          Show UpcomingBookings Orders
        </button>
      )}
    </div>
  );
};
export default Bookings;
