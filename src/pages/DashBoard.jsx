import { Outlet } from "react-router-dom";
import DashSideBar from "../components/dashboard/DashSideBar";

const DashBoard = () => {
  return (
    <div className="d-flex mt-1">
      {/* Sidebar */}
      <div
        className="position-fixed start-0 sidebar"
        style={{ width: "280px", top: "58px" }}
      >
        <DashSideBar />
      </div>

      {/* Main content */}
      <div style={{ marginLeft: "280px", width: "calc(100% - 280px)" }}>
        <main className="flex-grow-1 p-4 bg-light">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashBoard;
