import React from "react";
import CodeForm from "../components/CodeForm";
import axios from "axios";

const CodeFormPage = () => {
  const handleSubmit = async (formData) => {
    try {
      await axios.post("/api/submit", formData);
      alert("Code snippet submitted successfully!");
    } catch (error) {
      console.error("Error submitting code snippet:", error);
      alert("Failed to submit code snippet. Please try again.");
    }
  };
  return (
    <div className="container">
      <h1 className="mt-5">Submit Code Snippet</h1>
      <CodeForm onSubmit={handleSubmit} />
    </div>
  );
};

export default CodeFormPage;
