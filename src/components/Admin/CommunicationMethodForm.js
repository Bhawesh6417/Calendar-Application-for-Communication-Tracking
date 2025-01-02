import React, { useState } from "react";

function CommunicationMethodForm() {
  const [methods, setMethods] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    sequence: "",
    mandatory: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMethods([...methods, formData]);
    setFormData({ name: "", description: "", sequence: "", mandatory: false });
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Manage Communication Methods</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Method Name"
          value={formData.name}
          onChange={handleInputChange}
          className="border p-2 w-full"
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleInputChange}
          className="border p-2 w-full"
        />
        <input
          type="number"
          name="sequence"
          placeholder="Sequence"
          value={formData.sequence}
          onChange={handleInputChange}
          className="border p-2 w-full"
        />
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="mandatory"
            checked={formData.mandatory}
            onChange={handleInputChange}
          />
          <span>Mandatory</span>
        </label>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4">
          Add Method
        </button>
      </form>
    </div>
  );
}

export default CommunicationMethodForm;
