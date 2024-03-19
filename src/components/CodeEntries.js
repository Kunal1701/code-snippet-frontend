import React from "react";

const CodeEntries = ({ entries }) => {
  return (
    <table className="table table-bordered table-hover">
          <thead className="table-dark">
            <tr>
              <th scope="col">Username</th>
              <th scope="col">Code Language</th>
              <th scope="col">Stdin</th>
              <th scope="col">Source Code</th>
              <th scope="col">Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {entries.map((entry, index) => (
              <tr key={index}>
                <td>{entry.username}</td>
                <td>{entry.language}</td>
                <td>{entry.stdin}</td>
                <td>{entry.source_code_preview.substring(0, 100)}</td>
                <td>{entry.timestamp}</td>
              </tr>
            ))}
          </tbody>
        </table>
  );
};

export default CodeEntries;
