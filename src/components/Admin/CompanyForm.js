import React, { useState } from "react";

function CompanyForm() {
  const [companies, setCompanies] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    linkedin: "",
    emails: "",
    phoneNumbers: "",
    comments: "",
    periodicity: "2 weeks",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCompanies([...companies, formData]);
    setFormData({
      name: "",
      location: "",
      linkedin: "",
      emails: "",
      phoneNumbers: "",
      comments: "",
      periodicity: "2 weeks",
    });
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Manage Companies</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Company Name"
          value={formData.name}
          onChange={handleInputChange}
          className="border p-2 w-full"
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleInputChange}
          className="border p-2 w-full"
        />
        <input
          type="url"
          name="linkedin"
          placeholder="LinkedIn Profile"
          value={formData.linkedin}
          onChange={handleInputChange}
          className="border p-2 w-full"
        />
        <input
          type="email"
          name="emails"
          placeholder="Email(s)"
          value={formData.emails}
          onChange={handleInputChange}
          className="border p-2 w-full"
        />
        <input
          type="text"
          name="phoneNumbers"
          placeholder="Phone Number(s)"
          value={formData.phoneNumbers}
          onChange={handleInputChange}
          className="border p-2 w-full"
        />
        <textarea
          name="comments"
          placeholder="Comments"
          value={formData.comments}
          onChange={handleInputChange}
          className="border p-2 w-full"
        />
        <select
          name="periodicity"
          value={formData.periodicity}
          onChange={handleInputChange}
          className="border p-2 w-full"
        >
          <option value="2 weeks">Every 2 Weeks</option>
          <option value="1 month">Every Month</option>
        </select>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4">
          Add Company
        </button>
      </form>
    </div>
  );
}

export default CompanyForm;
