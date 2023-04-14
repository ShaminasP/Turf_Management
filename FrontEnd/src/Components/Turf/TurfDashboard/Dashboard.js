import { useSelector } from "react-redux";
import Barchart from "./Barchart";
import LineGraph from "./Linechart";
import { toGetBookingReport } from "../../../API/TurfAuth";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const { token } = useSelector((state) => state.user);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await toGetBookingReport(token);
    if (response.status === 200) {
      setData(response?.data);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex justify-between">
      <Barchart data={data} />
      <LineGraph data={data} />
    </div>
  );
};
export default Dashboard;
