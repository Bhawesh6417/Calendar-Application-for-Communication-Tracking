import React, { useState } from "react";

function CommunicationModal({ company, onClose }) {
  const [formData, setFormData] = useState({
    method: "Email",
    date: "",
    comments: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Communication logged:", { company, ...formData });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded w-1/3">
        <h2 className="text-lg font-bold mb-3">Log Communication for {company}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <select
            name="method"
            value={formData.method}
            onChange={handleInputChange}
            className="border p-2 w-full"
          >
            <option value="Email">Email</option>
            <option value="Call">Call</option>
            <option value="Message">Message</option>
            <option value="LinkedIn Post">LinkedIn Post</option>
          </select>
          <input
            type="date"
            name="date"
            value={formData.date}
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
          <div className="flex justify-between">
            <button type="submit" className="bg-blue-500 text-white py-2 px-4">
              Save
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-red-500 text-white py-2 px-4"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CommunicationModal;
