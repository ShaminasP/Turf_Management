import { useEffect, useState } from "react";
import LineGraph from "./Linecharts";
import { getSalesReport } from "../../../API/Admin";
import { useSelector } from "react-redux";
import Barchart from "./Barchart";

const Dashboard = () => {
  const { token } = useSelector((state) => state.admin);
  const [data, setData] = useState([]);
  console.log(data);
  fetchData = async () => {
    const result = await getSalesReport(token);
    if (result.status === 200) {
      setData(result?.data);
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
