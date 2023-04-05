import { Route, Routes } from "react-router-dom";
import TurfRegisterPage from "../../Pages/Turf/TurfRegistrationPage";
import Dashboard from "../../Pages/Turf/DashbordPage";
import ProfilePage from "../../Pages/Turf/ProfilePage";
import BookingPage from "../../Pages/Turf/Bookings";


const User = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/register" element={<TurfRegisterPage />} />
        <Route path="/bookings" element={<BookingPage />} />
        <Route path="/profile" element={<ProfilePage/>}/>
      </Routes>
    </>
  );
};
export default User;
