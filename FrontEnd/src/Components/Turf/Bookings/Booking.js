import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toGetBookings } from "../../../API/TurfAuth";
const Bookings = () => {
  const { token } = useSelector((state) => state.user);
  const [booking, setBooking] = useState([]);
  console.log(booking);
  const fetchBookings = async (token) => {
    const response = await toGetBookings(token);
    if (response.status === 200) {
      setBooking(response?.data);
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
            <th>STATUS</th>
          </tr>
        </thead>
        <tbody>
          {booking.map((booked, index) => (
            <tr>
              <th>{booked?._id}</th>
              <td>{booked?.user?.name}</td>
              <td>{booked?.bookDate}</td>
              <td>{booked?.time}</td>
              {booked.payment === "Success" ? (
                <button className="btn-success">{booked?.payment}</button>
              ) : (
                <button className="btn-warning">{booked?.payment}</button>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Bookings;
