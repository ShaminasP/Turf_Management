import { Routes, Route } from "react-router-dom";
import SingleTurf from "../../Pages/User/SingleTurf";
import Home from "../../Pages/User/Home";
import LoginPage from "../../Pages/User/LoginPage";
import SignupPage from "../../Pages/User/SignupPage";
import TurfsPage from "../../Pages/User/TurfsPage";
import ProfilePage from "../../Pages/User/Profile";
import PaymentSuccessPage from "../../Pages/User/PaymentSuccessPage";
import { useSelector } from "react-redux";
const Admin = () => {
  const { token } = useSelector((state) => state.user);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={token ? <Home /> : <LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/view_turf" element={<TurfsPage />} />
        <Route path="/turf_details" element={<SingleTurf />} />
        <Route path="/success/:id" element={<PaymentSuccessPage />} />
        <Route
          path="/profile"
          element={token ? <ProfilePage /> : <LoginPage />}
        />
      </Routes>
    </>
  );
};
export default Admin;
