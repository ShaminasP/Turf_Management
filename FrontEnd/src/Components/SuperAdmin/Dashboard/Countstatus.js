import { Link } from "react-router-dom";

const CountStatus = ({counts}) => {
  return (
    <section className="p-8 my-6 bg-gray-100 text-gray-800 mt-16">
      <div className="container flex justify-evenly ">
        <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-50 text-gray-800 cursor-pointer">
          <Link to={'/admin/users'}>
          <div className="flex flex-col justify-center align-middle">
            <p className="text-3xl font-semibold leading-none text-center">{counts?.userCount}</p>
            <p className="capitalize">Total Users </p>
          </div>
          </Link>
        </div>
        <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-50 text-gray-800 cursor-pointer">
          <Link to={'/admin/turfs'}>
          <div className="flex flex-col justify-center align-middle">
            <p className="text-3xl font-semibold leading-none text-center">{counts?.turfCount}</p>
            <p className="capitalize">Total Turfs</p>
          </div></Link>
        </div>
        <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-50 text-gray-800 cursor-pointer">
          <Link to={'/admin/salesreports'}>
          <div className="flex flex-col justify-center align-middle">
            <p className="text-3xl font-semibold leading-none text-center">{counts?.totalProfit*10/100}</p>
            <p className="capitalize">Total Profit</p>
          </div></Link>
        </div>
      </div>
    </section>
  );
};
export default CountStatus;
