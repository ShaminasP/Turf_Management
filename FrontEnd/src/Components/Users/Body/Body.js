import React from "react";
import { Link } from "react-router-dom";
import img from "../../../assets/home.png";
import Button from "../Button/Button";
function Body() {
  return (
    <div className="flex justify-evenly items-end bg-white p-10 md:p-24 w-full h-screen lg:flex-wrap flex-wrap-reverse">
      <div className="md:w-[65%] lg:w-[37%] xl:w-[30%] mt-5 lg:mt-8">
        <h1 className="text-4xl text-black  font-extrabold">
          BOOK YOUR SPOT PLAY YOUR SPORT
        </h1>
        <div className="flex w-full  lg:justify-between justify-evenly flex-wrap pt-5 lg:pt-8">
          <Link to="/view_turf">
            <Button color={"bg-red-500"} text={"text-white"}>
              BOOK YOUR SPOT
            </Button>
          </Link>
          <Link to="/turf/register">
            <Button color={"bg-red-500"} text={"text-white"}>
              REGISTER YOUR SPOT{" "}
            </Button>
          </Link>
        </div>
      </div>
      <div className="mt-[100px] md:mt-0">
        <img className="w-[600px]" src={img} />
      </div>
    </div>
  );
}

export default Body;
