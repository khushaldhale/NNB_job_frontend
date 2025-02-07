import { useRef, useState } from "react";
import withForm from "../../hoc/withForm";
import { useDispatch } from "react-redux";
import { createJob } from "../../redux/slices/jobSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddJobs = ({ changeHandler, formData }) => {
  const [company_domain, setDomain] = useState("");
  const [skills_required, setSkills] = useState([]);
  const [responsibilities, setResponsibilities] = useState([]);

  const skillRef = useRef(null);
  const responsibilityRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  function handleSkill() {
    let skill = skillRef.current.value.trim();
    if (skillRef.current.value.trim()) {
      setSkills((prevData) => [...prevData, skill]);
    }

    skillRef.current.value = "";
  }

  function handleResponsibilities() {
    let responsibility = responsibilityRef.current.value.trim();
    if (responsibilityRef.current.value.trim()) {
      setResponsibilities((prevData) => [...prevData, responsibility]);
    }
    responsibilityRef.current.value = "";
  }

  function modifiedHandler(event) {
    event.preventDefault();
    formData.company_domain = company_domain;
    formData.skills_required = skills_required;
    formData.responsibilities = responsibilities;

    dispatch(createJob(formData)).then((action) => {
      if (action.payload.success) {
        toast.success(action.payload.message);
        navigate("/dashboard/jobs");
      } else {
        toast.error(action.payload.message);
      }
    });
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Post a New Job</h2>
      <form onSubmit={modifiedHandler} className="card p-4">
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
              value={company_domain}
              onChange={(e) => {
                setDomain(e.target.value);
              }}
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
              {domains[company_domain]?.map((position) => (
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
          <label className="form-label">Package (per annum)</label>
          <input
            type="number"
            className="form-control"
            name="package"
            placeholder="Enter package amount"
            onChange={changeHandler}
            value={formData.package}
          />
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
              className="btn btn-primary w-25 mx-3"
              onClick={handleSkill}
            >
              Add Skill
            </button>
          </div>
          <div className="mb-3">
            <ol className="text-muted">
              {skills_required.map((skill, index) => (
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
              className="btn btn-primary w-25 mx-3"
              onClick={handleResponsibilities}
            >
              Add Responsibility
            </button>
          </div>

          {/*   */}
          <div className="mb-3">
            <ol className="text-muted">
              {responsibilities.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
            </ol>
          </div>
        </div>

        <div className="d-flex w-100 justify-content-center align-items-center">
          <button type="submit" className="btn btn-success w-25">
            Post Job
          </button>
        </div>
      </form>
    </div>
  );
};

export default withForm(AddJobs, {
  company_name: "",
  job_position: "",
  isFresherJob: false,
  isExperienceJob: false,
  experience: 0,
  job_location: "",
  job_type: "",
  job_mode: "",
  company_about: "",
  job_description: "",
  package: "",
});
