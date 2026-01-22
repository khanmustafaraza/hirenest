import React from "react";
import {
  FaBriefcase,
  FaBuilding,
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaEnvelope,
} from "react-icons/fa";
import "./postform.css";
import useJob from "../../store/jobcontext/JobContext";

const PostForm = () => {
  const { state, handleJobChange, handleJobSubmit } = useJob();
  const form = state.jobFields;

  return (
    <div className="post-form-wrapper">
      <div className="post-form-card">
        <h4 className="form-title">
          <FaBriefcase /> Post New Job
        </h4>

        <form onSubmit={handleJobSubmit} className="row g-3">
          {/* Job Info */}
          <Input
            label="Job Title"
            icon={<FaBriefcase />}
            name="title"
            value={form.title}
            onChange={handleJobChange}
          />
          <Input
            label="Company Name"
            icon={<FaBuilding />}
            name="companyName"
            value={form.companyName}
            onChange={handleJobChange}
          />
          <Input
            label="Company Website"
            name="companyWebsite"
            value={form.companyWebsite}
            onChange={handleJobChange}
          />
          <Input
            label="Location"
            icon={<FaMapMarkerAlt />}
            name="location"
            value={form.location}
            onChange={handleJobChange}
          />

          <Select
            label="Job Type"
            name="type"
            value={form.type}
            onChange={handleJobChange}
            options={["Full-time", "Part-time", "Internship", "Contract"]}
          />

          <Input
            label="Salary"
            icon={<FaMoneyBillWave />}
            name="salary"
            value={form.salary}
            onChange={handleJobChange}
          />
          <Input
            label="Experience"
            name="experience"
            value={form.experience}
            onChange={handleJobChange}
            placeholder="2–4 years"
          />
          <Input
            label="Education"
            name="education"
            value={form.education}
            onChange={handleJobChange}
          />
          <Input
            type="date"
            label="Application Deadline"
            name="deadline"
            value={form.deadline}
            onChange={handleJobChange}
          />
          <Input
            label="Contact Email"
            icon={<FaEnvelope />}
            name="contactEmail"
            value={form.contactEmail}
            onChange={handleJobChange}
          />

          <Textarea
            label="Responsibilities"
            name="responsibilities"
            value={form.responsibilities}
            onChange={handleJobChange}
          />
          <Textarea
            label="Requirements"
            name="requirements"
            value={form.requirements}
            onChange={handleJobChange}
          />
          <Textarea
            label="Skills"
            name="skills"
            value={form.skills}
            onChange={handleJobChange}
          />
          <Textarea
            label="Tags"
            name="tags"
            value={form.tags}
            onChange={handleJobChange}
          />
          <Textarea
            label="Job Description"
            name="description"
            value={form.description}
            onChange={handleJobChange}
            rows={4}
          />

          <div className="col-12 text-end mt-3">
            <button type="submit" className="btn-submit">
              Publish Job
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostForm;

/* ---------- Reusable Components ---------- */

const Input = ({
  label,
  name,
  value,
  onChange,
  icon,
  type = "text",
  placeholder,
}) => (
  <div className="col-md-6">
    <label className="form-label">
      {icon && <span className="icon">{icon}</span>} {label}
    </label>
    <input
      type={type}
      className="form-input"
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  </div>
);

const Select = ({ label, name, value, onChange, options }) => (
  <div className="col-md-6">
    <label className="form-label">{label}</label>
    <select
      className="form-input"
      name={name}
      value={value}
      onChange={onChange}
    >
      <option value="">Select</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  </div>
);

const Textarea = ({ label, name, value, onChange, rows = 3 }) => (
  <div className="col-md-6">
    <label className="form-label">{label}</label>
    <textarea
      className="form-input"
      name={name}
      value={value}
      onChange={onChange}
      rows={rows}
    />
  </div>
);
