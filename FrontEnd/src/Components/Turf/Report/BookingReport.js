import { toGetBookingReport } from "../../../API/TurfAuth";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const BookingReport = () => {
  const { token } = useSelector((state) => state.turf);
  const [reports, setReports] = useState([]);
  const fetchTurfReport = async (token) => {
    const response = await toGetBookingReport(token);
    if (response.status === 200) {
      setReports(response.data);
    }
  };
  console.log(reports);

  useEffect(() => {
    fetchTurfReport(token);
  }, []);

  return (
    <div className="overflow-x-auto p-20">
      <table className="table w-full">
        <thead>
          <tr className="text-center">
            <th>DATE</th>
            <th>TOTAL BOOKING</th>
            <th>TOTAL</th>
            <th>PROFIT</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report, index) => (
            <tr className="text-center" key={index}>
              <th>{new Date(report?._id).toLocaleDateString()}</th>
              <td>{report?.count}</td>
              <td>{report?.totalPrice}</td>
              <td>{report?.totalPrice - (report?.totalPrice * 10) / 100}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default BookingReport;
