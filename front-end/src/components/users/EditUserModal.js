import { useState, useEffect } from "react";
import APIService from "../../services/APIService";
import useGet from "../../custumHooks/useGet";

function EditUserModal({ record, setSuccess, handleChange }) {
  const managers = useGet(
    "GET",
    "http://127.0.0.1:8000/api/managers",
    localStorage.getItem("token")
  ).data;
  const departments = useGet(
    "GET",
    "http://127.0.0.1:8000/api/departments",
    localStorage.getItem("token")
  ).data;
  const [data, setData] = useState(record);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const result = await APIService.put(
      `http://127.0.0.1:8000/api/users/${record.id}`,
      data,
      localStorage.getItem("token")
    );
    if (result.success) {
      setSuccess("User updated successfully.");
      handleChange();
      document.getElementById("close-edit-modal").click();
    } else {
      setError(result.error);
    }
    setLoading(false);
  };

  useEffect(() => {
    setData(record);
  }, [record]);

  return (
    <>
      <div
        className="modal fade"
        id="editModal"
        tabIndex="-1"
        aria-hidden="true"
      >
        <form onSubmit={handleSubmit} className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Create User
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {error && (
                <div className="alert alert-danger" role="alert">
                  <small>{error}</small>
                </div>
              )}
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={data.name}
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="code" className="form-label">
                  Employee Code
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="code"
                  value={data.employee_code}
                  onChange={(e) =>
                    setData({ ...data, employee_code: e.target.value })
                  }
                />
              </div>
              <div className="mb-3">
                <label htmlFor="department_id" className="form-label">
                  Department
                </label>
                <select
                  className="d-block w-100"
                  id="department_id"
                  defaultValue={"none"}
                  value={data.department_id}
                  onChange={(e) =>
                    setData({ ...data, department_id: e.target.value })
                  }
                >
                  <option value="none" disabled hidden>
                    Select a Department
                  </option>
                  {departments &&
                    departments.map((department) => (
                      <option key={department.id} value={department.id}>
                        {department.name}
                      </option>
                    ))}
                </select>
              </div>
              {/* <div className="mb-3">
                <label htmlFor="department_id" className="form-label">
                  Department ID
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="department_id"
                  value={data.department_id}
                  onChange={(e) =>
                    setData({ ...data, department_id: e.target.value })
                  }
                />
              </div> */}
              <div className="mb-3">
                <label htmlFor="supervisor_id" className="form-label">
                  Supervisor
                </label>
                <select
                  className="d-block w-100"
                  id="supervisor_id"
                  value={data.supervisor_id}
                  onChange={(e) =>
                    setData({ ...data, supervisor_id: e.target.value })
                  }
                >
                  <option value="none" disabled hidden>
                    Select a Supervisor
                  </option>
                  {managers &&
                    managers.map((manager) => (
                      <option key={manager.id} value={manager.id}>
                        {manager.name}
                      </option>
                    ))}
                </select>
              </div>
              {/* <div className="mb-3">
                <label htmlFor="supervisor_id" className="form-label">
                  Supervisor ID
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="supervisor_id"
                  value={data.supervisor_id ? data.supervisor_id : ""}
                  onChange={(e) =>
                    setData({ ...data, supervisor_id: e.target.value })
                  }
                />
              </div> */}
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={data.email}
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  onChange={(e) =>
                    setData({ ...data, password: e.target.value })
                  }
                />
              </div>
              <div className="mb-3">
                <label htmlFor="date" className="form-label">
                  Birth Date
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="date"
                  value={data.b_date}
                  onChange={(e) => setData({ ...data, b_date: e.target.value })}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="gender" className="form-label">
                  Gender
                </label>
                <select
                  className="d-block w-100"
                  id="gender"
                  value={data.gender}
                  onChange={(e) => setData({ ...data, gender: e.target.value })}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="employee_group" className="form-label">
                  Employee Group
                </label>
                <select
                  className="d-block w-100"
                  id="employee_group"
                  value={data.employee_group}
                  onChange={(e) =>
                    setData({ ...data, employee_group: e.target.value })
                  }
                >
                  <option value="higher-management">higher-management</option>
                  <option value="middle-management">middle-management</option>
                  <option value="part-time">part-time</option>
                  <option value="full-time">full-time</option>
                  <option value="intern">intern</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="employee_title" className="form-label">
                  Employee Title
                </label>
                <select
                  className="d-block w-100"
                  id="employee_title"
                  value={data.employee_title}
                  onChange={(e) =>
                    setData({ ...data, employee_title: e.target.value })
                  }
                >
                  <option value="dep-manager">dep-manager</option>
                  <option value="senior">senior</option>
                  <option value="mid-senior">mid-senior</option>
                  <option value="junior">junior</option>
                  <option value="mid-junior">mid-junior</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  Phone
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  value={data.phone}
                  onChange={(e) => setData({ ...data, phone: e.target.value })}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="salary" className="form-label">
                  Salary
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="salary"
                  value={data.salary}
                  onChange={(e) => setData({ ...data, salary: e.target.value })}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="submit"
                disabled={loading}
                className="btn btn-primary"
              >
                Save
              </button>
              <button
                type="button"
                id="close-edit-modal"
                data-bs-dismiss="modal"
                style={{ display: "none" }}
              >
                Close
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default EditUserModal;
