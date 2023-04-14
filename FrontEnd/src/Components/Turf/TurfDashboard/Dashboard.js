import { useSelector } from "react-redux";
import Barchart from "./Barchart";
import LineGraph from "./Linechart";
import { toGetBookingCount, toGetBookingReport } from "../../../API/TurfAuth";
import { useEffect, useState } from "react";
import CountStatus from "./Counts";

const Dashboard = () => {
  const { token } = useSelector((state) => state.user);
  const [data, setData] = useState([]);
  const [count, setCount] = useState("");
  console.log(data);

  const fetchData = async () => {
    const response = await toGetBookingReport(token);
    const result = await toGetBookingCount(token);
    if (response.status === 200 && result.status === 200) {
      setCount(result?.data);
      setData(response?.data);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <CountStatus counts={count}/>
      <div className="flex justify-between">
      <Barchart data={data} />
      <LineGraph data={data} />
    </div>
    </div>
  );
};
export default Dashboard;
