import { Route, Routes } from "react-router-dom";
import TurfRegisterPage from "../../Pages/Turf/TurfRegistrationPage";
import LoginPage from "../../Pages/Turf/Login";
import Dashboard from "../../Pages/Turf/DashbordPage";
import ProfilePage from "../../Pages/Turf/ProfilePage";


const User = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/register" element={<TurfRegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage/>}/>
      </Routes>
    </>
  );
};
export default User;
