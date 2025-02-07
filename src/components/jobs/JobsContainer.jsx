import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { applyJob, deleteJob, getAllJobs } from "../../redux/slices/jobSlice";
import JobsPresentation from "./JobsPresentation";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const JobsContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const jobs = useSelector((state) => {
    return state.job.jobs;
  });
  const isLoading = useSelector((state) => {
    return state.job.isLoading;
  });
  const isError = useSelector((state) => {
    return state.job.isError;
  });

  const userInfo = useSelector((state) => {
    return state.auth.userInfo;
  });

  function deleteJobs(data) {
    dispatch(deleteJob(data)).then((action) => {
      if (action.payload.success) {
        toast.success(action.payload.message);
      } else {
        toast.error(action.payload.message);
      }
    });
  }

  function applyJobs(data) {
    dispatch(applyJob(data)).then((action) => {
      if (action.payload.success) {
        toast.success(action.payload.message);
      } else {
        toast.error(action.payload.message);
      }
    });
  }

  useEffect(() => {
    const fetchData = async () => {
      dispatch(getAllJobs()).then((action) => {
        if (action.payload.success) {
          toast.success(action.payload.message);
        } else {
          toast.error(action.payload.message);
        }
      });
    };
    fetchData();
  }, [dispatch]);
  return (
    <div>
      <JobsPresentation
        jobs={jobs}
        isLoading={isLoading}
        isError={isError}
        deleteJobs={deleteJobs}
        userInfo={userInfo}
        applyJobs={applyJobs}
        navigate={navigate}
      ></JobsPresentation>
    </div>
  );
};

export default JobsContainer;
