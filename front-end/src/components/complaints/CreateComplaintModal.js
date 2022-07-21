import { useState } from "react";
import useGet from "../../custumHooks/useGet";
import APIService from "../../services/APIService";

function CreateComplaintModal({ setSuccess, setCreateMessage }) {
  const [dataModel, setData] = useState({
    id: 0,
    employee_id: '',
    department_id: '',
    subject: '',
    body: '',
    status: '',
    reasons: '',
  });

  const { data, issPending, error } = useGet('GET', "http://127.0.0.1:8000/api/users")
  const [Error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const result = await APIService.post(
      "http://127.0.0.1:8000/api/complaints",
      dataModel
    );
    if (result.success) {
      setSuccess('Department created successfully.');
      document.getElementById("close-modal").click();
    } else {
      console.log(result, result.error)
      setError(result.error);
    }
    setLoading(false);
  };

  return (
    <div className="modal fade" id="modal" tabIndex="-1"
      aria-hidden="true">
      <form onSubmit={handleSubmit} className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Create Department</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal"
              aria-label="Close"></button>
          </div>
          <div className="modal-body">
            {Error && (
              <div className="alert alert-danger" role="alert">
                <small>{Error}</small>
              </div>
            )}      
            <div className="mb-3">
                <label htmlFor="employee_id" className="form-label">Employee Name</label>
                <select className="d-block w-100" id="employee_id" defaultValue={'none'}
                        onChange={(e) => setData({...dataModel, employee_id: e.target.value, department_id: data.filter (obj => obj.id == e.target.value)[0].department_id})}>
                    <option value="none" disabled hidden>Employee Name</option>
                    {data &&
                        data.map(user => (
                            <option key={user.id} value={user.id}>{user.name}</option>
                        ))
                    }
                </select>
            </div>
            <div className="mb-3">
              <label htmlFor="subject" className="form-label">
                Subject
              </label>
              <input
                type="text"
                className="form-control"
                id="subject"
                onChange={(e) => setData({ ...dataModel, subject: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="body" className="form-label">
                Body
              </label>
              <textarea
                className="form-control"
                id="description"
                rows="3"
                onChange={(e) =>
                  setData({ ...dataModel, body: e.target.value })
                }
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="status" className="form-label">
                Status
              </label>
              <select
                className="form-control"
                id="status"
                onChange={(e) => setData({ ...dataModel, status: e.target.value })}
              >
                <option selected disabled hidden>Select Status</option>
                <option value="pending">Pending</option>
                <option value="resolved">Resolved</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>
            {dataModel.status}
            <div className="mb-3">
              <label htmlFor="reasons" className="form-label">
                Reasons
              </label>
              <textarea
                className="form-control"
                id="reasons"
                rows="3"
                onChange={(e) =>
                  setData({ ...dataModel, reasons: e.target.value })
                }
              ></textarea>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary"
              data-bs-dismiss="modal">Close
            </button>
            <button type="submit" disabled={loading} className="btn btn-primary">Create</button>
            <button
              type="button"
              id="close-modal"
              data-bs-dismiss="modal"
              style={{ display: "none" }}
            >
              Close
            </button>
          </div>
        </div>
      </form>
    </div>

  );
}

export default CreateComplaintModal;