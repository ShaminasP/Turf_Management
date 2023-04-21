import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../../Pages/Admin/Dashbord";
import LoginPage from "../../Pages/Admin/LoginPage";
import TurfList from "../../Pages/Admin/TurfList";
import UserList from "../../Pages/Admin/UserList";
import SalesReportPage from "../../Pages/Admin/SalesReport";
import RequestedTurf from "../../Pages/Admin/RequestedTurf";
import Error from "../../Components/Error/Error";

const AdminRoute = () => {
  const { token } = useSelector((state) => state.admin);

  return (
    <>
      <Routes>
        <Route path="/" element={token ? <Dashboard /> : <LoginPage />} />
        <Route path="/login" element={token ? <Dashboard /> : <LoginPage />} />
        <Route path="/users" element={token ? <UserList /> : <LoginPage />} />
        <Route path="/turfs" element={token ? <TurfList /> : <LoginPage />} />
        <Route
          path="/salesreports"
          element={token ? <SalesReportPage /> : <LoginPage />}
        />
        <Route
          path="/requested"
          element={token ? <RequestedTurf /> : <LoginPage />}
        />
        <Route path="*" element={<Error link={"/admin"} />} />
      </Routes>
    </>
  );
};
export default AdminRoute;
