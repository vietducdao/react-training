import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homepage";
import StaffManagement from "./pages/staff-management";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/staff-management" element={<StaffManagement />} />
    </Routes>
  );
}

export default AppRoutes;
