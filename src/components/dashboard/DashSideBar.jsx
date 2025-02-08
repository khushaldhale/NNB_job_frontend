import { Link, useLocation } from "react-router-dom";
import {
  BriefcaseIcon,
  LayoutDashboardIcon,
  PlusSquareIcon,
  ClipboardListIcon,
} from "lucide-react";
import { useSelector } from "react-redux";

const DashSideBar = () => {
  const location = useLocation();
  const userInfo = useSelector((state) => {
    return state.auth.userInfo;
  });

  // position-sticky top-0
  return (
    <div className="bg-white border-end vh-100  pt-4">
      <div className="px-4 pb-4 border-bottom">
        <div className="d-flex align-items-center gap-2">
          <BriefcaseIcon size={28} className="text-primary" />
          <span className="fs-4 fw-bold text-primary">JobHub</span>
        </div>
      </div>

      <div className="nav flex-column nav-pills p-3 gap-2">
        <Link
          to="/dashboard/jobs"
          className={`nav-link d-flex align-items-center gap-2 ${
            location.pathname === "/dashboard/jobs" ? "active" : ""
          }`}
        >
          <LayoutDashboardIcon size={18} />
          <span>Dashboard</span>
        </Link>

        {userInfo.accountType === "admin" ? (
          <>
            <Link
              to="/dashboard/jobs/create"
              className={`nav-link d-flex align-items-center gap-2 ${
                location.pathname === "/dashboard/jobs/create" ? "active" : ""
              }`}
            >
              <PlusSquareIcon size={18} />
              <span>Post New Job</span>
            </Link>

            <Link
              to="/dashboard/jobs/applications"
              className={`nav-link d-flex align-items-center gap-2 ${
                location.pathname === "/dashboard/jobs/applications"
                  ? "active"
                  : ""
              }`}
            >
              <ClipboardListIcon size={18} />
              <span>Applications</span>
            </Link>
          </>
        ) : (
          <Link
            to="/dashboard/jobs/applied"
            className={`nav-link d-flex align-items-center gap-2 ${
              location.pathname === "/dashboard/jobs/applied" ? "active" : ""
            }`}
          >
            <LayoutDashboardIcon size={18} />
            <span>Applied Jobs</span>
          </Link>
        )}
      </div>
    </div>
  );
};

export default DashSideBar;
