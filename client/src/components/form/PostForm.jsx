import React from "react";
import {
  FaBriefcase,
  FaBuilding,
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaFileAlt,
  FaClipboardList,
  FaTags,
  FaUserGraduate,
  FaCalendarAlt,
  FaEnvelope,
} from "react-icons/fa";
import { useJob } from "../../context/JobContext";
// import { useJob } from "../../../context/JobContext"; // Update the path based on your folder structure

const PostForm = () => {
  const { state, handleJobChange, handleJobSubmit } = useJob();

  const form = state.jobFields;

  return (
    <div className="container my-2 shadow">
      <h3 className="text-secondary mb-4 text-center">
        <FaBriefcase className="me-2 text-success" /> Post a Job
      </h3>
      <form onSubmit={handleJobSubmit} className="row g-2">
        {/* Input Fields */}
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
          icon={<FaUserGraduate />}
          name="experience"
          value={form.experience}
          onChange={handleJobChange}
          placeholder="e.g. 2-4 years"
        />
        <Input
          label="Education"
          icon={<FaUserGraduate />}
          name="education"
          value={form.education}
          onChange={handleJobChange}
          placeholder="e.g. Bachelor's in CS"
        />
        <Input
          label="Application Deadline"
          type="date"
          icon={<FaCalendarAlt />}
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
          label="Responsibilities (comma separated)"
          name="responsibilities"
          value={form.responsibilities}
          onChange={handleJobChange}
        />
        <Textarea
          label="Requirements (comma separated)"
          name="requirements"
          value={form.requirements}
          onChange={handleJobChange}
        />
        <Input
          label="Skills (comma separated)"
          name="skills"
          value={form.skills}
          onChange={handleJobChange}
        />
        <Input
          label="Tags (comma separated)"
          icon={<FaTags />}
          name="tags"
          value={form.tags}
          onChange={handleJobChange}
        />
        <Textarea
          label="Job Description"
          name="description"
          value={form.description}
          onChange={handleJobChange}
        />

        <div className="col-12 text-end">
          <button type="submit" className="btn btn-success px-5 py-2">
            🚀 Post Job
          </button>
        </div>
      </form>
    </div>
  );
};

// Reusable Input Component
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
    <label className="form-label fw-semibold">
      {icon && <span className="me-2 text-success">{icon}</span>} {label}
    </label>
    <input
      type={type}
      className="form-control border-dark"
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  </div>
);

// Reusable Select Component
const Select = ({ label, name, value, onChange, options }) => (
  <div className="col-md-6">
    <label className="form-label fw-semibold">{label}</label>
    <select
      className="form-select border-dark"
      name={name}
      value={value}
      onChange={onChange}
    >
      <option value="">Select {label.toLowerCase()}</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  </div>
);

// Reusable Textarea Component
const Textarea = ({ label, name, value, onChange }) => (
  <div className="col-md-6">
    <label className="form-label fw-semibold">{label}</label>
    <textarea
      className="form-control border-dark"
      name={name}
      value={value}
      onChange={onChange}
      rows="3"
    />
  </div>
);

export default PostForm;
