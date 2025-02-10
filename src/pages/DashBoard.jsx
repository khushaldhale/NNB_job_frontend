import { Outlet } from "react-router-dom";
import DashSideBar from "../components/dashboard/DashSideBar";
import { useState, useEffect } from "react";

const DashBoard = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="d-flex mt-1">
      {/* Sidebar */}
      <div
        className="position-fixed start-0 sidebar"
        style={{
          width: isMobile ? "60px" : "280px",
          top: "58px",
          transition: "width 0.3s ease",
        }}
      >
        <DashSideBar isMobile={isMobile} />
      </div>

      {/* Main content */}
      <div
        style={{
          marginLeft: isMobile ? "60px" : "280px",
          width: isMobile ? "calc(100% - 60px)" : "calc(100% - 280px)",
          transition: "margin-left 0.3s ease, width 0.3s ease",
        }}
      >
        <main className="flex-grow-1 p-4 bg-light">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashBoard;
