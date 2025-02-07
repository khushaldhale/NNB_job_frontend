import { FileWarningIcon } from "lucide-react";
import { Link } from "react-router-dom";
const NoFound = () => {
  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="text-center p-5">
        <FileWarningIcon size={64} className="text-danger mb-4" />
        <h1 className="display-4 mb-3">404</h1>
        <h2 className="h4 text-muted mb-4">Page Not Found</h2>
        <p className="lead text-secondary mb-4">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="btn btn-primary px-4 py-2">
          Go to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NoFound;
