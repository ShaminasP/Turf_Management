import Navbar from "../../Components/Users/Navbar/Navbar";
import Banner from "../../Components/Turf/Banner/Banner.js";
import RegistrationForm from "../../Components/Turf/RegistrationForm/RegistrationFporm.js";
import Content from "../../Components/Turf/RegistrationForm/Content.js";
import { useRef } from "react";
const TurfRegisterPage = () => {
  const mydiv = useRef(null);
  return (
    <>
      <Navbar />
      <Banner div={mydiv} />
      <Content />
      <RegistrationForm div={mydiv} />
    </>
  );
};
export default TurfRegisterPage;
