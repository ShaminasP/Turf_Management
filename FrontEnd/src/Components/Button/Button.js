import React from "react";

function Button(props) {
  return (
    <button
      className={`${props.color} text-white mb-2 font-[Poppins] py-2 px-6 rounded  hover:bg-indigo-400 
    duration-500`}
    >
      {props.children}
    </button>
  );
}

export default Button;
