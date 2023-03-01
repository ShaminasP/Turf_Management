import React from "react";
import Body from "../../Components/Users/Body/Body";
import Navbar from "../../Components/Users/Navbar/Navbar";

function Home() {
  return (
    <>
      <Navbar loginlink="/login" />
      <Body />
    </>
  );
}

export default Home;
