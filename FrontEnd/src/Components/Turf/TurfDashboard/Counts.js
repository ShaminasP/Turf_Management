import { Link } from "react-router-dom";
const CountStatus = ({ counts, data }) => {
  const totalPriceSum = data.reduce((acc, curr) => acc + curr.totalPrice, 0);
  return (
    <section className="p-8 my-6 bg-gray-100 text-gray-800 mt-16">
      <div className="container flex justify-evenly">
        {/* <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-50 text-gray-800">
          <div className="flex flex-col justify-center align-middle">
            <p className="text-3xl font-semibold leading-none text-center">{counts?.userCount}</p>
            <p className="capitalize">Total Users </p>
          </div>
        </div> */}
        <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-50 text-gray-800">
          <Link to={"/turf/reports"}>
            <div className="flex flex-col justify-center align-middle cursor-pointer">
              <p className="text-3xl font-semibold leading-none text-center">
                {totalPriceSum}
              </p>
              <p className="capitalize">Total </p>
            </div>
          </Link>
        </div>
        <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-50 text-gray-800">
          <Link to={"/turf/bookings"}>
            <div className="flex flex-col justify-center align-middle cursor-pointer">
              <p className="text-3xl font-semibold leading-none text-center">
                {counts?.bookingCount}
              </p>
              <p className="capitalize">Total Bookings</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default CountStatus;
