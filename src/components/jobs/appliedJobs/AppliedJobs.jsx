import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { appliedJobs } from "../../../redux/slices/jobSlice";
import JobsPresentation from "../JobsPresentation";
import { toast } from "react-toastify";

const AppliedJobs = () => {
  const dispatch = useDispatch();

  const applied = useSelector((state) => {
    return state.job.applied;
  });

  const isLoading = useSelector((state) => {
    return state.job.isLoading;
  });

  const isError = useSelector((state) => {
    return state.job.isError;
  });

  useEffect(() => {
    dispatch(appliedJobs()).then((action) => {
      if (action.payload.success) {
        toast.success(action.payload.message);
      } else {
        toast.error(action.payload.message);
      }
    });
  }, []);
  return (
    <div>
      <p> All this are applied jobs</p>

      <JobsPresentation
        jobs={applied}
        isLoading={isLoading}
        isError={isError}
      ></JobsPresentation>
    </div>
  );
};

export default AppliedJobs;
