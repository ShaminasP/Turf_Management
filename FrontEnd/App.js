import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./src/Routes/UserRoute/UserRoute";
import Turf from "./src/Routes/TurfRoute/TurfRoute";
import { Provider } from "react-redux";
import store from "./src/Store/Store";
import AdminRoute from "./src/Routes/AdminRoute/AdminRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<User />} />
        <Route path="/turf/*" element={<Turf />} />
        <Route path="/admin/*" element={<AdminRoute />} />
      </Routes>
    </BrowserRouter>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
