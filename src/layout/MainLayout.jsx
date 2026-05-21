import { Outlet } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function MainLayout() {

  return (

    <div className="
      flex
      flex-col
      md:flex-row
      min-h-screen
    ">

      {/* Sidebar */}
      <div className="
        w-full
        md:w-64
        bg-blue-900
      ">

        <Sidebar />

      </div>

      {/* Main Content */}
      <div className="
        flex-1
        bg-gray-100
        min-h-screen
        overflow-hidden
      ">

        <Navbar />

        <div className="
          p-3
          md:p-5
          overflow-x-auto
        ">

          <Outlet />

        </div>

      </div>

    </div>

  );
}

export default MainLayout;