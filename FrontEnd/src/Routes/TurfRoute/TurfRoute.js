import { Route, Routes } from "react-router-dom";
import TurfRegisterPage from "../../Pages/Turf/TurfRegistrationPage";
import LoginPage from "../../Pages/Turf/Login";

const User = () => {
  return (
    <>
      <Routes>
        <Route path="/"element={<TurfRegisterPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
      </Routes>
    </>
  );
};
export default User;
