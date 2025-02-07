import { useLocation } from "react-router-dom";
import {
  Building2Icon,
  BriefcaseIcon,
  MapPinIcon,
  ClockIcon,
  MonitorIcon,
  GraduationCapIcon,
} from "lucide-react";

const ParticularJob = () => {
  const location = useLocation();
  const job = location.state;
  console.log(job);

  return (
    <div className="container my-4">
      <div className="card shadow-sm border-0 p-4 bg-white">
        <div className="row gy-3">
          {/* Company Name */}
          <div className="col-md-6">
            <div className="d-flex align-items-center gap-2">
              <Building2Icon size={20} className="text-primary" />
              <p className="mb-0 ">Company Name:</p>
            </div>
            <p className="text-muted">{job.company_name}</p>
          </div>

          {/* Job Position */}
          <div className="col-md-6">
            <div className="d-flex align-items-center gap-2">
              <BriefcaseIcon size={20} className="text-primary" />
              <p className="mb-0">Job Position:</p>
            </div>
            <p className="text-muted">{job.job_position}</p>
          </div>

          {/* Domain */}
          <div className="col-md-6">
            <div className="d-flex align-items-center gap-2">
              <GraduationCapIcon size={20} className="text-primary" />
              <p className="mb-0">Domain:</p>
            </div>
            <p className="text-muted">{job.company_domain}</p>
          </div>

          {/* Package */}
          <div className="col-md-6">
            <div className="d-flex align-items-center gap-2">
              <ClockIcon size={20} className="text-primary" />
              <p className="mb-0">Package:</p>
            </div>
            <p className="text-muted">₹{job.package} LPA</p>
          </div>

          {/* Job Mode & Type */}
          <div className="col-md-6">
            <div className="d-flex align-items-center gap-2">
              <MonitorIcon size={20} className="text-primary" />
              <p className="mb-0">Job Mode:</p>
            </div>
            <p className="text-muted">{job.job_mode}</p>
          </div>

          <div className="col-md-6">
            <div className="d-flex align-items-center gap-2">
              <ClockIcon size={20} className="text-primary" />
              <p className="mb-0">Job Type:</p>
            </div>
            <p className="text-muted">{job.job_type}</p>
          </div>

          {/* Job Location */}
          <div className="col-md-6">
            <div className="d-flex align-items-center gap-2">
              <MapPinIcon size={20} className="text-primary" />
              <p className="mb-0">Location:</p>
            </div>
            <p className="text-muted">{job.job_location}</p>
          </div>

          {/* Experience & Fresher Status */}
          <div className="col-md-6">
            <div className="d-flex align-items-center gap-2">
              <GraduationCapIcon size={20} className="text-primary" />
              <p className="mb-0">Experience Required:</p>
            </div>
            <p className="text-muted">
              {job.isExperienceJob
                ? `${job.experience} Years`
                : "No Experience Required"}
            </p>
          </div>
        </div>

        <hr />

        {/* About Company */}
        <div className="mb-3">
          <p className="fw-medium text-primary">About Company:</p>
          <p className="text-muted">{job.company_about}</p>
        </div>

        {/* Job Description */}
        <div className="mb-3">
          <p className="fw-medium text-primary">Job Description:</p>
          <p className="text-muted">{job.job_description}</p>
        </div>

        {/* Skills Required - Numbered List */}
        <div className="mb-3">
          <p className="fw-medium text-primary">Skills Required:</p>
          <ol className="text-muted">
            {job.skills_required.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ol>
        </div>

        {/* Responsibilities - Numbered List */}
        <div>
          <p className="fw-medium text-primary">Responsibilities:</p>
          <ol className="text-muted">
            {job.responsibilities.map((resp, index) => (
              <li key={index}>{resp}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default ParticularJob;
