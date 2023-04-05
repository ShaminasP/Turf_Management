const BookingDetails = ({ bookings }) => {
  console.log(bookings);
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
          {bookings.map((booking, index) => (
            <tr>
              <th>{booking?._id}</th>
              <td>{booking?.turf?.turfName}</td>
              <td>{booking?.bookDate}</td>
              <td>{booking?.time}</td>
              {booking?.payment === "Success" ? (
                <button className="btn-sm btn-success">{booking?.payment}</button>
              ) : (
                <button className="btn-warning">{booking?.payment}</button>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingDetails;
