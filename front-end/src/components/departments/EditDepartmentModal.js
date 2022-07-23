import {useEffect, useState} from "react";
import APIService from "../../services/APIService";
import useGet from "../../custumHooks/useGet";
function EditDepartmentModal({ department, setSuccess, handleChange }) {
  const [departmentData, setDepartmentData] = useState({ department });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { data, isPending, Error } = useGet(
    "GET",
    "http://127.0.0.1:8000/api/managers"
  );


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);


    const result = await APIService.put(
      `http://127.0.0.1:8000/api/departments/${department.id}`,
      departmentData
    );
    if (result.success) {
      setSuccess("Department updated successfully.");
      handleChange()
      document.getElementById("close-edit-modal").click();
    } else {
      setError(result.error);
    }
    setLoading(false);
  };

  useEffect(() => {
    setDepartmentData(department);
  }, [department]);

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
                Edit Department
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
                  value={departmentData.name}
                  onChange={(e) =>
                    setDepartmentData({
                      ...departmentData,
                      name: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Manager Starting Date
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="date"
                  value={departmentData.manager_start_at}
                  onChange={(e) =>
                    setDepartmentData({
                      ...departmentData,
                      manager_start_at: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-3">
                <label htmlFor="managerID" className="form-label">
                  Manager Assigned
                </label>
                <select
                  className="d-block w-100"
                  id="managerID"
                  onChange={(e) =>
                    setDepartmentData({
                      ...departmentData,
                      manager_id: e.target.value,
                    })
                  }
                >
                  {/*<option value={department.manager_id} selected={department.manager_id}>{department.manager.name}</option>*/}
                  {data &&
                    data.map((manager) => (
                      <option key={manager.id} value={manager.id}>
                        {manager.name}
                      </option>
                    ))}
                </select>
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
                Edit
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

export default EditDepartmentModal;
