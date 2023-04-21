import { useSelector } from "react-redux";
import { getSalesReport } from "../../../API/Admin";
import { useEffect, useState } from "react";

const SalesReport = () => {
  const [reports, setReports] = useState([]);
  const { token } = useSelector((state) => state.admin);
  const fetchReport = async (token) => {
    const response = await getSalesReport(token);
    setReports(response?.data);
  };
  console.log(reports);

  useEffect(() => {
    fetchReport(token);
  }, []);

  return (
    <div className="overflow-x-auto pt-20">
      <table className="table w-full">
        <thead>
          <tr className="text-center">
            <th>Turf</th>
            <th>Total Bookings</th>
            <th>Total Amount</th>
            <th>Profit</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report, index) => (
            <tr className="text-center" key={index}>
              <th>{report.name[0]}</th>
              <td>{report.count}</td>
              <td>{report.totalPrice}</td>
              <td>{(report.totalPrice * 10) / 100}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default SalesReport;
