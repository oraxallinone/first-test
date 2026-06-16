import React, { useState, useEffect } from 'react';
import { employeeApi } from '../../api/employeeApi'; // Fixed relative path based on folder structure (up two levels)
import './EmpList.css'; // Fixed case-sensitivity (.CSS -> .css)

const EmpList = () => { // Renamed to match file/folder name
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    employeeApi.getAll()
      .then((data) => {
        setEmployees(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error: ", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const handleEdit = (id) => {
    alert(`Edit functionality triggered for Employee ID: ${id}`);
  };

  const handleDelete = (id) => {
    if (window.confirm(`Are you sure you want to delete Employee ID: ${id}?`)) {
      alert(`Delete functionality triggered for Employee ID: ${id}`);
    }
  };

  if (loading) {
    return <div className="center-message">Loading employee data...</div>;
  }

  if (error) {
    return <div className="center-message error-message">Error loading data: {error}</div>;
  }

  return (
    <div className="employee-list-container">
      <h2 className="employee-list-heading">Employee List</h2>
      <div className="table-wrapper">
        <table className="employee-table">
          <thead>
            <tr className="th-row">
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th className="th-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.length === 0 ? (
              <tr>
                <td colSpan="4" style={{ textAlign: 'center' }}>No records found.</td>
              </tr>
            ) : (
              employees.map((emp) => (
                <tr key={emp.empId} className="tr-body">
                  <td>{emp.empId}</td>
                  <td>{emp.empName}</td>
                  <td>{emp.empAge}</td>
                  <td className="td-action">
                    <button 
                      onClick={() => handleEdit(emp.empId)} 
                      className="btn btn-edit"
                    >
                      Edit
                    </button>
                    <button 
                      onClick={() => handleDelete(emp.empId)} 
                      className="btn btn-delete"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmpList;