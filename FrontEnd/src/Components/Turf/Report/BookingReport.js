import { report } from "process";
import { toGetBookingReport } from "../../../API/TurfAuth";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const BookingReport = () => {
  const { token } = useSelector((state) => state.user);
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
          </tr>
        </thead>
        <tbody>
          {reports.map((report,index)=><tr className="text-center" key={index}>
            <th>{report?._id}</th>
            <td>{report?.count}</td>
            <td>{report?.totalPrice}</td>
          </tr>)}
          
        </tbody>
      </table>
    </div>
  );
};
export default BookingReport;
