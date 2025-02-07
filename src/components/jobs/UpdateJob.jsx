import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { updateJob } from "../../redux/slices/jobSlice";
import { toast } from "react-toastify";

const UpdateJob = () => {
  const domains = {
    Frontend_Dev: ["React.js", "Angular", "Vue.js", "Next.js", "Svelte"],
    Backend_Dev: [
      "Node.js",
      "Express.js",
      "Django",
      "Flask",
      "Spring Boot",
      "Ruby on Rails",
    ],
    Full_Stack_Dev: [
      "MERN Stack",
      "MEAN Stack",
      "LAMP Stack",
      "Django + React",
      "Spring Boot + Angular",
    ],
    Software_Testing: [
      "Manual Testing",
      "Automation Testing",
      "Selenium",
      "Cypress",
      "JUnit",
      "TestNG",
    ],
    Data_Analytics: [
      "SQL",
      "Python (Pandas, NumPy)",
      "Power BI",
      "Tableau",
      "Apache Spark",
      "Hadoop",
    ],
    Devops: [
      "Docker",
      "Kubernetes",
      "AWS",
      "Azure",
      "Jenkins",
      "Terraform",
      "Ansible",
    ],
  };
  const jobType = ["Part Time", "Full Time", "Internship"];
  const jobMode = ["Remote", "Offline", "Hybrid"];

  const location = useLocation();
  const [formData, setFormData] = useState(location.state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const skillRef = useRef(null);
  const responsibilityRef = useRef(null);
  //    we got the data now manipulate with that in changeHandler everything
  function changeHandler(event) {
    const { name, value, type, checked, id } = event.target;

    if (id === "skills_required" || id === "responsibilities") {
      let required_val =
        id === "skills_required"
          ? skillRef.current.value
          : responsibilityRef.current.value;
      setFormData((prevData) => {
        return {
          ...prevData,
          [id]: [...prevData[id], required_val],
        };
      });
      id === "skills_required"
        ? (skillRef.current.value = "")
        : (responsibilityRef.current.value = "");

      return;
    }
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  function submitHandler(event) {
    event.preventDefault();
    console.log(location.state._id);
    formData._id = location.state._id;
    dispatch(updateJob(formData)).then((action) => {
      if (action.payload.success) {
        toast.success(action.payload.message);
        navigate("/dashboard/jobs");
      } else {
        toast.error(action.payload.message);
      }
    });
  }
  //   now modify everything nd complete the work
  return (
    <div className="container mt-5">
      <form onSubmit={submitHandler} className="card p-4">
        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Company Name</label>
            <input
              type="text"
              className="form-control"
              name="company_name"
              placeholder="Enter company name"
              onChange={changeHandler}
              value={formData.company_name}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Company Domain</label>
            <select
              className="form-select"
              name="company_domain"
              value={formData.company_domain}
              onChange={changeHandler}
            >
              <option value="">Select a domain</option>
              {Object.keys(domains).map((domain) => (
                <option key={domain} value={domain}>
                  {domain.replaceAll("_", " ")}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Job Position</label>
            <select
              className="form-select"
              name="job_position"
              value={formData.job_position}
              onChange={changeHandler}
            >
              <option value="">Select a position</option>
              {domains[formData.company_domain]?.map((position) => (
                <option key={position} value={position}>
                  {position}
                </option>
              ))}
            </select>
          </div>
          <div className="col-md-6">
            <label className="form-label">Job Location</label>
            <input
              type="text"
              className="form-control"
              name="job_location"
              placeholder="Enter job location"
              onChange={changeHandler}
              value={formData.job_location}
            />
          </div>
        </div>

        {!formData.isExperienceJob && (
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="isFresherJob"
              name="isFresherJob"
              onChange={changeHandler}
              checked={formData.isFresherJob}
            />
            <label className="form-check-label" htmlFor="isFresherJob">
              Fresher Job
            </label>
          </div>
        )}

        {!formData.isFresherJob && (
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="isExperienceJob"
              name="isExperienceJob"
              onChange={changeHandler}
              checked={formData.isExperienceJob}
            />
            <label className="form-check-label" htmlFor="isExperienceJob">
              Experience Required
            </label>
          </div>
        )}

        {formData.isExperienceJob && (
          <div className="mb-3">
            <label className="form-label">Experience (years)</label>
            <input
              type="number"
              className="form-control"
              name="experience"
              placeholder="Enter required experience"
              onChange={changeHandler}
              value={formData.experience}
            />
          </div>
        )}

        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Job Type</label>
            <select
              className="form-select"
              name="job_type"
              value={formData.job_type}
              onChange={changeHandler}
            >
              <option value="">Select job type</option>
              {jobType.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
          <div className="col-md-6">
            <label className="form-label">Job Mode</label>
            <select
              className="form-select"
              name="job_mode"
              value={formData.job_mode}
              onChange={changeHandler}
            >
              <option value="">Select job mode</option>
              {jobMode.map((mode) => (
                <option key={mode} value={mode}>
                  {mode}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">About Company</label>
          <textarea
            className="form-control"
            name="company_about"
            placeholder="Enter company information"
            onChange={changeHandler}
            value={formData.company_about}
            rows={4}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Job Description</label>
          <textarea
            className="form-control"
            name="job_description"
            placeholder="Enter job description"
            onChange={changeHandler}
            value={formData.job_description}
            rows={4}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Required Skills</label>
          <div className="input-group w-100">
            <input
              ref={skillRef}
              type="text"
              className="form-control  "
              placeholder="Add a skill"
            />
            <button
              type="button"
              id="skills_required"
              className="btn btn-primary w-25 mx-3"
              onClick={changeHandler}
            >
              Add Skill
            </button>
          </div>
          <div className="mb-3">
            <ol className="text-muted">
              {formData.skills_required.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ol>
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Responsibilities</label>
          <div className="input-group">
            <input
              ref={responsibilityRef}
              type="text"
              className="form-control"
              placeholder="Add a responsibility"
            />
            <button
              type="button"
              id="responsibilities"
              className="btn btn-primary w-25 mx-3"
              onClick={changeHandler}
            >
              Add Responsibility
            </button>
          </div>

          {/*   */}
          <div className="mb-3">
            <ol className="text-muted">
              {formData.responsibilities.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
            </ol>
          </div>
        </div>

        <div className="d-flex w-100 justify-content-center align-items-center">
          <button type="submit" className="btn btn-success w-25">
            Update Job
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateJob;
