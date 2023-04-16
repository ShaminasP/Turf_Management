import { Route, Routes } from "react-router-dom";
import TurfRegisterPage from "../../Pages/Turf/TurfRegistrationPage";
import Dashboard from "../../Pages/Turf/DashbordPage";
import ProfilePage from "../../Pages/Turf/ProfilePage";
import BookingPage from "../../Pages/Turf/Bookings";
import ReportPage from "../../Pages/Turf/ReportPage";
import LoginPage from "../../Pages/User/LoginPage";
import { useSelector } from "react-redux";

const User = () => {
  const { token } = useSelector((state) => state.user);
  return (
    <>
      <Routes>
        <Route path="/login" element={token ? <Dashboard /> : <LoginPage />} />
        <Route path="/" element={token ? <Dashboard /> : <LoginPage />} />
        <Route path="/register" element={<TurfRegisterPage />} />
        <Route
          path="/bookings"
          element={token ? <BookingPage /> : <LoginPage />}
        />
        <Route
          path="/profile"
          element={token ? <ProfilePage /> : <LoginPage />}
        />
        <Route
          path="/reports"
          element={token ? <ReportPage /> : <LoginPage />}
        />
      </Routes>
    </>
  );
};
export default User;
