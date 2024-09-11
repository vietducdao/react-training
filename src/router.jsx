import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homepage";
import StaffManagement from "./pages/staff-management";
import ContactForm from "./component/ContactForm";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/staff-management" element={<StaffManagement />} />
      <Route path="form" element={<ContactForm />} />
    </Routes>
  );
}

export default AppRoutes;
