import { useState } from "react";
import APIService from "../../services/APIService";

function CreateComplaintModal({ setSuccess, setCreateMessage }) {
  const [data, setData] = useState({ status: 'pending' });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const result = await APIService.post(
      "http://127.0.0.1:8000/api/complaints",
      data
    );
    if (result.success) {
      setSuccess('Complaint created successfully.');
      document.getElementById("close-modal").click();
    } else {
      setError(result.error);
    }
    setLoading(false);
  };
  
  return (
    <div className="modal fade" id="modal" tabIndex="-1" aria-hidden="true">
      <form onSubmit={handleSubmit} className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Make a Complaint
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
              <label htmlFor="code" className="form-label">
                Employee ID
              </label>
              <input
                type="text"
                className="form-control"
                id="code"
                onChange={(e) =>
                  setData({ ...data, employee_id: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <label htmlFor="code" className="form-label">
                Department ID
              </label>
              <input
                type="text"
                className="form-control"
                id="code"
                onChange={(e) =>
                  setData({ ...data, department_id: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <label htmlFor="subject" className="form-label">
                Subject
              </label>
              <input
                type="text"
                className="form-control"
                id="subject"
                onChange={(e) => setData({ ...data, subject: e.target.value })}
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
                  setData({ ...data, body: e.target.value })
                }
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="reasons" className="form-label">
                Reasons
              </label>
              <textarea
                className="form-control"
                id="reasons"
                rows="3"
                onChange={(e) =>
                  setData({ ...data, reasons: e.target.value })
                }
              ></textarea>
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
            <button type="submit" className="btn btn-primary">
              Create
            </button>
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