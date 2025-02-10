import { Link, useLocation } from "react-router-dom";
import {
  BriefcaseIcon,
  LayoutDashboardIcon,
  PlusSquareIcon,
  ClipboardListIcon,
} from "lucide-react";
import { useSelector } from "react-redux";

const DashSideBar = ({ isMobile }) => {
  const location = useLocation();
  const userInfo = useSelector((state) => {
    return state.auth.userInfo;
  });

  return (
    <div className="bg-white border-end vh-100 pt-4">
      <div
        className={`nav flex-column nav-pills gap-2  ${
          isMobile ? "p-1" : "p-3"
        }`}
      >
        <Link
          to="/dashboard/jobs"
          className={`nav-link d-flex ${
            isMobile ? "justify-content-center  " : "align-items-center gap-2"
          } ${location.pathname === "/dashboard/jobs" ? "active" : ""}`}
          title={isMobile ? "Dashboard" : ""}
        >
          <LayoutDashboardIcon size={18} />
          {!isMobile && <span>Dashboard</span>}
        </Link>

        {userInfo.accountType === "admin" ? (
          <>
            <Link
              to="/dashboard/jobs/create"
              className={`nav-link d-flex ${
                isMobile ? "justify-content-center" : "align-items-center gap-2"
              } ${
                location.pathname === "/dashboard/jobs/create" ? "active" : ""
              }`}
              title={isMobile ? "Post New Job" : ""}
            >
              <PlusSquareIcon size={18} />
              {!isMobile && <span>Post New Job</span>}
            </Link>

            <Link
              to="/dashboard/jobs/applications"
              className={`nav-link d-flex ${
                isMobile ? "justify-content-center" : "align-items-center gap-2"
              } ${
                location.pathname === "/dashboard/jobs/applications"
                  ? "active"
                  : ""
              }`}
              title={isMobile ? "Applications" : ""}
            >
              <ClipboardListIcon size={18} />
              {!isMobile && <span>Applications</span>}
            </Link>
          </>
        ) : (
          <Link
            to="/dashboard/jobs/applied"
            className={`nav-link d-flex ${
              isMobile ? "justify-content-center" : "align-items-center gap-2"
            } ${
              location.pathname === "/dashboard/jobs/applied" ? "active" : ""
            }`}
            title={isMobile ? "Applied Jobs" : ""}
          >
            <LayoutDashboardIcon size={18} />
            {!isMobile && <span>Applied Jobs</span>}
          </Link>
        )}
      </div>
    </div>
  );
};

export default DashSideBar;
