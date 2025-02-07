import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { ShieldAlertIcon } from "lucide-react";

const AccessDenied = ({ message }) => (
  <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
    <div className="text-center p-5">
      <ShieldAlertIcon size={64} className="text-danger mb-4" />
      <h2 className="h3 mb-4">Access Denied</h2>
      <div className="alert alert-danger d-inline-block">
        <p className="mb-0">{message}</p>
      </div>
      <div className="mt-4">
        <a href="/" className="btn btn-primary">
          Return to Homepage
        </a>
      </div>
    </div>
  </div>
);

const ProtectedRoute = ({ children, adminRoute, noAuthorization }) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const accountType = useSelector((state) => state.auth.userInfo.accountType);

  // If not logged in, redirect to login
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  // If logged in and no authorization is required
  if (isLoggedIn && noAuthorization) {
    return children;
  }

  // Protected route for user
  if (accountType === "admin" && !adminRoute) {
    return (
      <AccessDenied message="This page is only accessible to regular users." />
    );
  }

  // Protected route for admin
  if (accountType === "user" && adminRoute) {
    return (
      <AccessDenied message="This page is only accessible to administrators." />
    );
  }

  // If all checks pass, render the protected content
  return <div className="fade-in">{children}</div>;
};

export default ProtectedRoute;
