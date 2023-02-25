import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import LoginPage from "./src/Pages/LoginPage";
import Home from "./src/Pages/Home";
import SignupPage from "./src/Pages/SignupPage";


const App = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<LoginPage/>}/>
    <Route path="/signup" element={<SignupPage/>}/>
   </Routes>
   </BrowserRouter>
  );
};



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
