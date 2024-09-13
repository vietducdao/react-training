import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homepage";
import StaffManagement from "./pages/staff-management";
import ContactForm from "./component/ContactForm";
import Posts from "./component/TakePosts";
import UserForm from "./pages/user/userForm";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/staff-management" element={<StaffManagement />} />
      <Route path="/form" element={<ContactForm />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/time" element={<clearInterval />} />
      <Route path="/user" element={<UserForm />} />
    </Routes>
  );
}

export default AppRoutes;
