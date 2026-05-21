import { Link } from "react-router-dom";

function Sidebar() {

  const role = localStorage.getItem("role");

  return (

<div className="
  bg-blue-900
  text-white
  p-5
  min-h-screen
  w-full
">
      <h1 className="text-2xl font-bold mb-10">
        Team Portal
      </h1>

      <div className="flex flex-col gap-5">

        {/* Common */}
        <Link to="/dashboard">
          Dashboard
        </Link>

        {/* Admin Menus */}
        {role === "admin" && (
          <>
            <Link to="/dashboard/employees">
              Employee Management
            </Link>

            <Link to="/dashboard/reports">
              Reports
            </Link>

            <Link to="/dashboard/approvals">
              Approval Management
            </Link>

            <Link to="/dashboard/createteam">
                Create Team
            </Link>
            
          </>
        )}

        {/* Team Lead Menus */}
        {role === "teamlead" && (
          <>
            <Link to="/dashboard/tasks">
              Task Management
            </Link>

            <Link to="/dashboard/reports">
              Reports
            </Link>
            <Link to="/dashboard/teammembers">
                Team Members
            </Link>

          </>
        )}

{/* Employee Menus */}
{role === "employee" && (
  <>
 
    <Link to="/dashboard/mytasks">
      My Tasks
    </Link>

    <Link to="/dashboard/updatestatus">
      Update Status
    </Link>

    <Link to="/dashboard/dailyreport">
      Daily Report
    </Link>

    <Link to="/dashboard/profile">
      Profile
    </Link>
  </>
)}
      </div>

    </div>

  );
}

export default Sidebar;