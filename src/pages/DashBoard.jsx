import { Outlet } from "react-router-dom";
import DashSideBar from "../components/dashboard/DashSideBar";

const DashBoard = () => {
  return (
    <div className="d-flex mt-5">
      <div className="sidebar" style={{ width: "280px" }}>
        <DashSideBar />
      </div>
      <main className="flex-grow-1 p-4 bg-light">
        <Outlet />
      </main>
    </div>
  );
};

export default DashBoard;
