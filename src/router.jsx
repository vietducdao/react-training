import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homepage";
import StaffManagement from "./pages/staff-management";
import ContactForm from "./component/ContactForm";
import Posts from "./pages/takepost/TakePosts";
import UserInfo from "./pages/user/UserInfo";
import TimeDisplay from "./pages/Time/TimeDisplay";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/staff-management" element={<StaffManagement />} />
      <Route path="/form" element={<ContactForm />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/time" element={<TimeDisplay />} />
      <Route path="/user" element={<UserInfo />} />
    </Routes>
  );
}

export default AppRoutes;
