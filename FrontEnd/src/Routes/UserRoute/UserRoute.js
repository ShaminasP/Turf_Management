import { Routes, Route } from "react-router-dom";
import Home from "../../Pages/User/Home";
import LoginPage from "../../Pages/User/LoginPage";
import SignupPage from "../../Pages/User/SignupPage";
const Admin = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage/>} />
      </Routes>
    </>
  );
};
export default Admin;
