import React, { useState } from "react";

const CodeForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    username: "",
    language: "",
    stdin: "",
    sourceCode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      username: "",
      language: "",
      stdin: "",
      sourceCode: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="mt-3">
      <div className="mb-3">
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          className="form-control"
          placeholder="Username"
          required
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          name="language"
          value={formData.language}
          onChange={handleChange}
          className="form-control"
          placeholder="Preferred Code Language"
          required
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          name="stdin"
          value={formData.stdin}
          onChange={handleChange}
          className="form-control"
          placeholder="Stdin"
          required
        />
      </div>
      <div className="mb-3">
        <textarea
          name="sourceCode"
          value={formData.sourceCode}
          onChange={handleChange}
          className="form-control"
          placeholder="Source Code"
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default CodeForm;
