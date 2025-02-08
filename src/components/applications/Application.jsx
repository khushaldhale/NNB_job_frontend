import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  rejectApplication,
  shortListApplication,
  showApplications,
} from "../../redux/slices/jobSlice";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Application = () => {
  const applications = useSelector((state) => state.job.applications);
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const getApplications = async () => {
      dispatch(showApplications({ _id: params.id })).then((action) => {
        if (action.payload.success) {
          toast.success(action.payload.message);
        } else {
          toast.error(action.payload.message);
        }
      });
    };
    getApplications();
  }, [dispatch, params.id]);

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">Job Applications</h2>

      <Link
        to={`/dashboard/jobs/${params.id}/applications/filter`}
        className="btn btn-primary d-inline-flex align-items-center mb-3 gap-2"
      >
        <i className="bi bi-funnel"></i>
        Filter Applications
      </Link>

      {applications?.length > 0 ? (
        <div className="row gy-4">
          {applications.map((applicant) => (
            <div className="col-md-6 col-lg-4" key={applicant._id}>
              <div className="card shadow-sm border-0">
                <div className="card-body">
                  <p className="fs-5 fw-normal text-primary">
                    {applicant.fname + " " + applicant.lname}
                  </p>
                  <p className="card-text mb-1">
                    <span className="text-muted">Email:</span>{" "}
                    <span className="fw-normal">{applicant.email}</span>
                  </p>
                  <p className="card-text">
                    <span className="text-muted">Contact:</span>{" "}
                    <span className="fw-normal">{applicant.contact}</span>
                  </p>
                  <div className="d-flex justify-content-between mt-3">
                    <button
                      className="btn btn-outline-success"
                      onClick={() => {
                        dispatch(
                          shortListApplication({
                            _id: params.id,
                            applicant_id: applicant._id,
                          })
                        ).then((action) => {
                          if (action.payload.success) {
                            toast.success(action.payload.message);
                          } else {
                            toast.error(action.payload.message);
                          }
                        });
                      }}
                    >
                      ✅ Accept
                    </button>
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => {
                        dispatch(
                          rejectApplication({
                            _id: params.id,
                            applicant_id: applicant._id,
                          })
                        ).then((action) => {
                          if (action.payload.success) {
                            toast.success(action.payload.message);
                          } else {
                            toast.error(action.payload.message);
                          }
                        });
                      }}
                    >
                      ❌ Reject
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-muted">No applications received yet.</p>
      )}
    </div>
  );
};

export default Application;
