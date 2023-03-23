import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../../Pages/Admin/Dashbord";
import LoginPage from "../../Pages/Admin/LoginPage";
import TurfList from "../../Pages/Admin/TurfList";
import UserList from "../../Pages/Admin/UserList";

const AdminRoute = () => {
  const { token } = useSelector((state) => state.admin);

  return (
    <>
      <Routes>
        <Route path="/" element={token ? <Dashboard /> : <LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/turfs" element={<TurfList />} />
      </Routes>
    </>
  );
};
export default AdminRoute;
