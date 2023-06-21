import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const EmployeeList = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    try {
      fetch("http://localhost:8000/employee")
        .then((response) => response.json())
        .then((data) => setData(data));
    } catch (error) {
      console.log(error);
    }
  }, []);

  console.log(data);

  const LoadDetails = (id) => {
    navigate("/employee/details/" + id);
  };

  const LoadEdit = (id) => {
    navigate("/employee/edit/" + id);
  };

  const Remove = (id) => {
    if (window.confirm("Do you want to remove Employee?")) {
      fetch("http://localhost:8000/employee/" + id, {
        method: "DELETE",
      })
        .then((res) => {
          alert("Removed successfully.");
          window.location.reload();
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-title">
          <h2>EmployeeList</h2>
        </div>
        <div className="card-body">
          <div className="divbtn">
            <Link to="employee/create" className="btn btn-success">
              {" "}
              Add New (+)
            </Link>
          </div>
          <table className="table table-bordered">
            <thead className="bg-dark text-white">
              <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Email</td>
                <td>Phone</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.map((eachUser) => {
                  return (
                    <tr key={eachUser.id}>
                      <td>{eachUser.id}</td>
                      <td>{eachUser.name}</td>
                      <td>{eachUser.email}</td>
                      <td>{eachUser.phone}</td>
                      <td>
                        <a
                          onClick={() => LoadEdit(eachUser.id)}
                          className="btn btn-success"
                        >
                          Edit
                        </a>
                        <a
                          onClick={() => Remove(eachUser.id)}
                          className="btn btn-danger"
                        >
                          Remove
                        </a>
                        <a
                          onClick={() => LoadDetails(eachUser.id)}
                          className="btn btn-primary"
                        >
                          Details
                        </a>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EmployeeList;
