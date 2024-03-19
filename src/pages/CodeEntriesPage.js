import React, { useState, useEffect } from "react";
import axios from "axios";
import CodeEntries from "../components/CodeEntries";

const CodeEntriesPage = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    fetchEntries();
  }, []);

  const fetchEntries = async () => {
    try {
      const response = await axios.get("/api/snippets");
      setEntries(response.data);
    } catch (error) {
      console.error("Error fetching entries:", error);
    }
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Submitted Code Snippets</h1>
      <CodeEntries entries={entries} />
    </div>
  );
};

export default CodeEntriesPage;
