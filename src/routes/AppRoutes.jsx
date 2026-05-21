import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Login from "../pages/Login";
import DashBoard from "../pages/DashBoard";
import EmployeeManagement from "../pages/EmployeeManagement";
import TaskManagement from "../pages/TaskManagement";
import Reports from "../pages/Reports";
import ApprovalManagement from "../pages/ApprovalManagement";
import CreateTeam from "../pages/CreateTeam";
import MainLayout from "../layout/MainLayout";
import TeamMembers from "../pages/TeamMembers";
import MyTasks from "../pages/MyTasks";
import UpdateStatus from "../pages/UpdateStatus";
import DailyReport from "../pages/DailyReport";
import Profile from "../pages/Profile";

function AppRoutes() {
  return (
    <BrowserRouter>

      <Routes>

        {/* Login Page */}
        <Route path="/" element={<Login />} />

        {/* Dashboard Layout */}
        <Route path="/dashboard" element={<MainLayout />}>

          <Route index element={<DashBoard />} />

          <Route
            path="employees"
            element={<EmployeeManagement />}
          />

          <Route
            path="tasks"
            element={<TaskManagement />}
          />

          <Route
            path="reports"
            element={<Reports />}
          />

          <Route
            path="approvals"
            element={<ApprovalManagement />}
          />

          <Route
            path="createteam"
            element={<CreateTeam />}
          />

          <Route
            path="teammembers"
            element={<TeamMembers />}
          />
             
          <Route
            path="mytasks"
            element={<MyTasks />}
            />

            <Route
            path="updatestatus"
            element={<UpdateStatus />}
            />

            <Route
            path="dailyreport"
            element={<DailyReport />}
            />

            <Route
            path="profile"
            element={<Profile />}
            />
        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default AppRoutes;