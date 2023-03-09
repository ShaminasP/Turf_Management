import { Routes, Route } from "react-router-dom";
import SingleTurf from "../../Pages/User/SingleTurf";
import Home from "../../Pages/User/Home";
import LoginPage from "../../Pages/User/LoginPage";
import SignupPage from "../../Pages/User/SignupPage";
import TurfsPage from "../../Pages/User/TurfsPage";
const Admin = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/view_turf" element={<TurfsPage />} />
        <Route path="/turf_details" element={<SingleTurf />} />
      </Routes>
    </>
  );
};
export default Admin;
