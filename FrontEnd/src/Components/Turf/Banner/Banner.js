import img from '../../../assets/partnerwithusBg.jpg';

const Banner = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${img})`,
          backgroundPosition: `top,center`,
          backgroundRepeat: "no-repeat",
          backgroundSize: `cover`,
        }}
        className="text-white p-20 h-[50vh] w-full "
      >
        <div className="flex w-full h-full justify-evenly items-center">
          <div>
            <h1 className="font-extrabold text-center flex justify-evenly text-4xl">
              PARTNER WITH US
            </h1>
            <div className="w-full flex xs:pl-0 justify-evenly mt-3">
              <button
                // onClick={() => {
                //   div.current.scrollIntoView({ behavior: "smooth" });
                // }}
                className="text-black bg-white mb-2 border-[1px]   border-inherit font-[Poppins] py-2 px-6 rounded-xl  hover:bg-transparent hover:text-white duration-500"
              >
                {" "}
                Registration
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Banner;
