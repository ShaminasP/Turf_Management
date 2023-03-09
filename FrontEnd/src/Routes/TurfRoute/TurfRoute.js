import { Route, Routes } from "react-router-dom";
import TurfRegisterPage from "../../Pages/Turf/TurfRegistrationPage";
import LoginPage from "../../Pages/Turf/Login";
import TurfAdmin from "../../Pages/Turf/TurfAdminLanding";

const User = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<TurfAdmin />} />
        <Route path="/register" element={<TurfRegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
};
export default User;
