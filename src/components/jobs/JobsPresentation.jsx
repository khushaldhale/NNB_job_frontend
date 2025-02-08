import { useLocation } from "react-router-dom";
import {
  Building2Icon,
  BriefcaseIcon,
  MapPinIcon,
  MonitorIcon,
} from "lucide-react";

const JobsPresentation = ({
  jobs,
  isLoading,
  deleteJobs,
  userInfo,
  applyJobs,
  navigate,
}) => {
  const location = useLocation();
  const requiredPath = location.pathname.split("/").pop();

  if (isLoading) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-3 text-muted">Loading jobs...</p>
      </div>
    );
  }

  return (
    <div className="container-fluid py-4">
      {jobs.length > 0 ? (
        <div className="row g-4">
          {jobs.map((job) => (
            <div key={job._id} className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <div className="d-flex align-items-center gap-2 mb-3">
                    <Building2Icon className="text-primary" size={24} />
                    <h5 className="card-title mb-0">{job.company_name}</h5>
                  </div>
                  <div className="mb-4">
                    <div className="d-flex align-items-center gap-2 text-muted mb-2">
                      <BriefcaseIcon size={16} />
                      <span>
                        {job.company_domain} • {job.job_position}
                      </span>
                    </div>
                    <div className="d-flex align-items-center gap-2 text-muted mb-2">
                      <MapPinIcon size={16} />
                      <span>{job.job_location}</span>
                    </div>
                    <div className="d-flex align-items-center gap-2 text-muted mb-2">
                      <MonitorIcon size={16} />
                      <span>{job.job_mode}</span>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="d-flex flex-wrap gap-2">
                      <button type="button" disabled class="btn btn-primary">
                        {job.job_type}
                      </button>
                      <button type="button" disabled class="btn btn-primary">
                        ₹{job.package} LPA
                      </button>
                      {job.isExperienceJob && (
                        <button type="button" disabled class="btn btn-primary">
                          {job.isExperienceJob && (
                            <span>{job.experience} Years Exp</span>
                          )}
                        </button>
                      )}

                      {job.isFresherJob && (
                        <button type="button" disabled class="btn btn-primary">
                          {job.isFresherJob && <span>Fresher</span>}
                        </button>
                      )}
                    </div>
                  </div>
                  {/*  validation if  route is /dashboard/jobs/applied  then dont render any button  */}
                  <div className="d-flex gap-2 mt-4">
                    {/*  admin buttons */}
                    {userInfo?.accountType === "admin" ? (
                      <>
                        {requiredPath === "applications" ? (
                          <button
                            className="btn btn-info btn-sm text-white"
                            onClick={() =>
                              navigate(
                                `/dashboard/jobs/${job._id}/applications`
                              )
                            }
                          >
                            Applications
                          </button>
                        ) : (
                          <>
                            <button
                              className="btn btn-danger btn-sm"
                              onClick={() => deleteJobs({ _id: job._id })}
                            >
                              Delete
                            </button>
                            <button
                              className="btn btn-secondary btn-sm"
                              onClick={() => {
                                navigate(`/dashboard/jobs/${job._id}/update`, {
                                  state: job,
                                });
                              }}
                            >
                              Update
                            </button>
                            <button
                              className="btn btn-primary btn-sm"
                              onClick={() =>
                                navigate(`/dashboard/jobs/${job._id}`, {
                                  state: job,
                                })
                              }
                            >
                              Details
                            </button>
                          </>
                        )}
                      </>
                    ) : (
                      // user buttons
                      requiredPath === "jobs" && (
                        <button
                          className="btn btn-primary w-100"
                          onClick={() => applyJobs({ _id: job._id })}
                        >
                          Apply Now
                        </button>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-5">
          <BriefcaseIcon size={48} className="text-muted mb-3" />
          <p className="text-muted">No jobs have been posted yet</p>
        </div>
      )}
    </div>
  );
};

export default JobsPresentation;
