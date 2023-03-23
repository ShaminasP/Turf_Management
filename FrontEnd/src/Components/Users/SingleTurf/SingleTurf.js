import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getTurf } from "../../../API/UserAuth";
const SingleTurf = () => {
  const Location = useLocation();
  const ID = Location.state;
  const [data, setData] = useState({});

  const fetchTurf = async (ID) => {
    const data = await getTurf(ID);
    return data;
  };
  
  useEffect(() => {
    fetchTurf(ID).then((data) => setData(data.turf));
  }, []);
  return (
    <section className="text-gray-900 bg-gray-100 body-font">
      <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
        <img
          className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded border-2"
          alt="hero"
          src={data?.images}
        />
        <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-2 font-medium text-black  ">
            {data.turfName}
          </h1>
          <p className=" leading-relaxed">{data?.location}</p>
          <p>{data?.contactNumber}</p>
        </div>
      </div>
    </section>
  );
};
export default SingleTurf;
