const CountStatus = ({counts}) => {
    return (
      <section className="p-8 my-6 bg-gray-100 text-gray-800 mt-16">
        <div className="container flex justify-evenly">
          <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-50 text-gray-800">
            <div className="flex flex-col justify-center align-middle">
              <p className="text-3xl font-semibold leading-none text-center">2</p>
              <p className="capitalize">Total Users </p>
            </div>
          </div>
          <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-50 text-gray-800">
            <div className="flex flex-col justify-center align-middle">
              <p className="text-3xl font-semibold leading-none text-center"></p>
              <p className="capitalize">Total </p>
            </div>
          </div>
          <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-50 text-gray-800">
            <div className="flex flex-col justify-center align-middle">
              <p className="text-3xl font-semibold leading-none text-center">{counts?{counts}:0}</p>
              <p className="capitalize">Total Bookings</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  export default CountStatus;
  