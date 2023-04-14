import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../../Pages/Admin/Dashbord";
import LoginPage from "../../Pages/Admin/LoginPage";
import TurfList from "../../Pages/Admin/TurfList";
import UserList from "../../Pages/Admin/UserList";
import SalesReportPage from "../../Pages/Admin/SalesReport";
import RequestedTurf from "../../Pages/Admin/RequestedTurf";


const AdminRoute = () => {
  const { token } = useSelector((state) => state.admin);

  return (
    <>
      <Routes>
        <Route path="/" element={token ? <Dashboard /> : <LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/turfs" element={<TurfList />} />
        <Route path="/salesreports" element={<SalesReportPage />} />
        <Route path="/requested" element={<RequestedTurf/>}/>

      </Routes>
    </>
  );
};
export default AdminRoute;
