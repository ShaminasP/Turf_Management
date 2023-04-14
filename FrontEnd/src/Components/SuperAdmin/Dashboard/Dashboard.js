import { useEffect, useState } from "react";
import LineGraph from "./Linecharts";
import { getCounts, getSalesReport } from "../../../API/Admin";
import { useSelector } from "react-redux";
import Barchart from "./Barchart";
import CountStatus from "./Countstatus";

const Dashboard = () => {
  const { token } = useSelector((state) => state.admin);
  const [data, setData] = useState([]);
  const [counts, setCounts] = useState([]);
  console.log(counts);
  fetchData = async () => {
    const response = await getCounts(token);
    const result = await getSalesReport(token);
    if (result.status === 200 && response.status === 200) {
      setData(result?.data);
      setCounts(response?.data);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <CountStatus counts={counts}/>
      <div className="flex justify-between ">
        <Barchart data={data} />
        <LineGraph data={data} />
      </div>
    </div>
  );
};
export default Dashboard;
