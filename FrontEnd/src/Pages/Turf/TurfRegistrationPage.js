import Navbar from "../../Components/Users/Navbar/Navbar";
import Banner from "../../Components/Turf/Banner/Banner.js";
import RegistrationForm from "../../Components/Turf/RegistrationForm/RegistrationFporm.js";
import Content from "../../Components/Turf/RegistrationForm/Content.js";
const TurfRegisterPage = () => {
  return (
    <>
      <Navbar loginlink="/turf/login" />
      <Banner />
      <Content />
      <RegistrationForm />
    </>
  );
};
export default TurfRegisterPage;
