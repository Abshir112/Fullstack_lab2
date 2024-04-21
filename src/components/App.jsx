import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/project-assignments');
      const data = await response.json();
      setAssignments(data);
    }

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Latest Project Assignments</h1>
      <table>
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Project Code</th>
            <th>Start Date</th>
          </tr>
        </thead>
        <tbody>
          {assignments.map(assignment => (
            <tr key={assignment._id}>
              <td>{assignment.employee_id}</td>
              <td>{assignment.project_code}</td>
              <td>{new Date(assignment.start_date).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
