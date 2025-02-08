import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  pending,
  rejected,
  shortListed,
  showApplications,
} from "../../../redux/slices/jobSlice";
import { toast } from "react-toastify";

const FilterApplications = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const [filteredApplications, setFilteredApplications] = useState([]);

  function changeHandler(event) {
    const { name, value } = event.target;
    let thunk = null;

    if (value === "applications") {
      thunk = showApplications;
    } else if (value === "shortlisted") {
      thunk = shortListed;
    } else if (value === "pending") {
      thunk = pending;
    } else if (value == "rejected") {
      thunk = rejected;
    }

    dispatch(thunk({ _id: params.id })).then((action) => {
      if (action.payload.success) {
        toast.success(action.payload.message);
        setFilteredApplications(action.payload.data);
      } else {
        toast.error(action.payload.message);
      }
    });
  }

  useEffect(() => {
    const getApplications = async () => {
      dispatch(showApplications({ _id: params.id })).then((action) => {
        if (action.payload.success) {
          toast.success(action.payload.message);
          setFilteredApplications(action.payload.data);
        } else {
          toast.error(action.payload.message);
        }
      });
    };
    getApplications();
  }, []);

  return (
    <div className="container py-4">
      <div className="card shadow-sm">
        <div className="card-header bg-white">
          <h5 className="card-title mb-0">Filter Applications</h5>
        </div>
        <div className="card-body">
          <form className="mb-4">
            <select
              name="filteredApplications"
              onChange={changeHandler}
              className="form-select form-select-lg w-100"
            >
              <option value="applications">Applications</option>
              <option value="shortlisted">Shortlisted</option>
              <option value="pending">Pending</option>
              <option value="rejected">Rejected</option>
            </select>
          </form>

          <div className="list-group">
            {filteredApplications.length > 0 ? (
              filteredApplications.map((element, index) => (
                <div
                  key={index}
                  className="list-group-item list-group-item-action d-flex align-items-center justify-content-between"
                >
                  <div className="d-flex align-items-center">
                    <div
                      className="rounded-circle bg-secondary text-white d-flex align-items-center justify-content-center"
                      style={{ width: "40px", height: "40px" }}
                    >
                      {element.fname[0]}
                    </div>
                    <div className="ms-3">
                      <h6 className="mb-0">
                        {element.fname + " " + element.lname}
                      </h6>
                      {element.email && (
                        <small className="text-muted">{element.email}</small>
                      )}
                    </div>
                  </div>
                  <span
                    className={`badge ${
                      element.status === "shortlisted"
                        ? "bg-success"
                        : element.status === "pending"
                        ? "bg-warning"
                        : element.status === "rejected"
                        ? "bg-danger"
                        : "bg-primary"
                    }`}
                  >
                    {element.status || "New"}
                  </span>
                </div>
              ))
            ) : (
              <div className="text-center py-5">
                <p className="text-muted mb-0">No applications found</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterApplications;
