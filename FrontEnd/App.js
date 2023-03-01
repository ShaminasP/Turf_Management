import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import User from "./src/Routes/UserRoute/UserRoute";
import Turf from './src/Routes/TurfRoute/TurfRoute'
// import LoginPage from "./src/Pages/User/LoginPage";
// import Home from "./src/Pages/User/Home";
// import SignupPage from "./src/Pages/User/SignupPage";
// import TurfRegisterPage from "./src/Pages/Turf/TurfRegistrationPage";

const App = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/*" element={<User/>}/>
    {/* <Route path="/login" element={<LoginPage/>}/>
    <Route path="/signup" element={<SignupPage/>}/>
    <Route path="/turf" element={<TurfRegisterPage/>}/> */}
    <Route path="/turf/*" element={<Turf/>}/>
   </Routes>
   </BrowserRouter>
  );
};





const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
