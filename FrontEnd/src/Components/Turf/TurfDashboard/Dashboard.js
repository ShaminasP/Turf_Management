import { useSelector } from "react-redux";
import Barchart from "./Barchart";
import LineGraph from "./Linechart";
import {
  toGetBookingCount,
  toGetBookingReport,
  viewTurfByOwner,
} from "../../../API/TurfAuth";
import { useEffect, useState } from "react";
import CountStatus from "./Counts";
import RegistrationPending from "../RegistrationPending/RegistartionPending";

const Dashboard = () => {
  const { token } = useSelector((state) => state.turf);
  const [data, setData] = useState([]);
  const [count, setCount] = useState("");
  const [turfStatus, setturfStatus] = useState(true);

  const fetchData = async () => {
    const turfStatus = await viewTurfByOwner(token);
    const response = await toGetBookingReport(token);
    const result = await toGetBookingCount(token);
    if (
      response.status === 200 &&
      result.status === 200 &&
      turfStatus.status === 200
    ) {
      setCount(result?.data);
      setData(response?.data);
      if (turfStatus?.data?.turf?.turfStatus === false) {
        setturfStatus(false);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {turfStatus ? (
        <>
          <CountStatus counts={count} data={data} />
          <div className="flex justify-between">
            <Barchart data={data} />
            <LineGraph data={data} />
          </div>
        </>
      ) : (
        <RegistrationPending />
      )}
    </div>
  );
};
export default Dashboard;
