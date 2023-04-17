import { useState } from "react";

const BookingDetails = ({ previousbookings, upcomingBooking }) => {
  const [showBookings, setShowBookings] = useState(true);

  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th>BOOKING ID</th>
            <th>TURF</th>
            <th>DATE</th>
            <th>TIME</th>
            <th>STATUS</th>
          </tr>
        </thead>
        <tbody>
          {showBookings ? (
            <>
              {upcomingBooking.map((booking, index) => (
                <tr key={index}>
                  <th>{booking?._id}</th>
                  <td>{booking?.turf?.turfName}</td>
                  <td>{new Date(booking?.bookDate).toLocaleDateString()}</td>
                  <td>{booking?.time}</td>
                  <td>
                    {" "}
                    {booking?.payment === "Success" ? (
                      <button className="btn-sm btn-success p-2 rounded-3xl">
                        {booking?.payment}
                      </button>
                    ) : (
                      <button className="btn-warning btn-sm p-2 rounded-3xl">
                        {booking?.payment}
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </>
          ) : (
            <>
              {previousbookings.map((booking, index) => (
                <tr key={index}>
                  <th>{booking?._id}</th>
                  <td>{booking?.turf?.turfName}</td>
                  <td>{new Date(booking?.bookDate).toLocaleDateString()}</td>
                  <td>{booking?.time}</td>
                  <td>
                    {" "}
                    {booking?.payment === "Success" ? (
                      <button className="btn-sm btn-success p-2 rounded-3xl">
                        {booking?.payment}
                      </button>
                    ) : (
                      <button className="btn-warning btn-sm p-2 rounded-3xl">
                        {booking?.payment}
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

export default BookingDetails;
