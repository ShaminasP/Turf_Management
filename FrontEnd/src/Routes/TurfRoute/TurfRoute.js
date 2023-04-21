import { Route, Routes } from "react-router-dom";
import TurfRegisterPage from "../../Pages/Turf/TurfRegistrationPage";
import Dashboard from "../../Pages/Turf/DashbordPage";
import ProfilePage from "../../Pages/Turf/ProfilePage";
import BookingPage from "../../Pages/Turf/Bookings";
import ReportPage from "../../Pages/Turf/ReportPage";
import LoginPage from "../../Pages/User/LoginPage";
import { useSelector } from "react-redux";
import RegistrationCompleted from "../../Pages/Turf/TurfRegCompleted.js";
import { useDispatch, useSelector } from "react-redux";
import { resetTurfAdmin, setTurfAdmin } from "../../Store/TurfSlice";
import Error from "../../Components/Error/Error";

const User = () => {
  const TurfName = localStorage.getItem("turfName");
  const tokenTurf = localStorage.getItem("turfAdminToken");
  const Dispatch = useDispatch();

  if (TurfName && tokenTurf) {
    Dispatch(
      setTurfAdmin({
        name: TurfName,
        token: tokenTurf,
      })
    );
  }

  const { token } = useSelector((state) => state.turf);
  console.log(token);
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
        <Route
          path="/completed"
          element={token ? <RegistrationCompleted /> : <LoginPage />}
        />
        <Route path="*" element={<Error link={"/turf"}/> }/>
      </Routes>
    </>
  );
};
export default User;
