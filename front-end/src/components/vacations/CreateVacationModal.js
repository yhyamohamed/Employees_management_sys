import { useState } from "react";
import useGet from "../../custumHooks/useGet";
import APIService from "../../services/APIService";

function CreateVacationModal({ setSuccess, handleChange }) {
  const [dataModel, setData] = useState({ status: 'pending' });
  const { data, issPending, error } = useGet('GET', "http://127.0.0.1:8000/api/users", localStorage.getItem('token'))

  const [err, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const result = await APIService.post(
      "http://127.0.0.1:8000/api/vacations",
      dataModel,
      localStorage.getItem('token')
    );
    if (result.success) {
      setSuccess('vacation created successfully.');
      handleChange();
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
              Take Vacation
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            {err && (
              <div className="alert alert-danger" role="alert">
                <small>{err}</small>
              </div>
            )}
            <div className="mb-3">
              <label htmlFor="employee_id" className="form-label">Employee Name</label>
              <select className="d-block w-100" id="employee_id" defaultValue={'none'}
                onChange={(e) => setData({ ...dataModel, employee_id: e.target.value, department_id: data.filter(obj => obj.id == e.target.value)[0].department_id })}>
                <option value="none" disabled hidden>Employee Name</option>
                {data &&
                  data.map(user => (
                    <option key={user.id} value={user.id}>{user.name}</option>
                  ))
                }
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Duration
              </label>
              <input
                type="number"
                className="form-control"
                min="1"
                max="7"
                placeholder="max 7 days"
                id="duration"
                onChange={(e) => setData({ ...dataModel, duration: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Reasons
              </label>
              <textarea
                className="form-control"
                id="description"
                rows="3"
                onChange={(e) => setData({ ...dataModel, reasons: e.target.value })}
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="paid" className="form-label">
                Paid
              </label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="paid"
                  id="paid1"
                  value="1"
                  onChange={(e) => setData({ ...dataModel, paid: e.target.value })}
                />
                <label className="form-check-label" htmlFor="paid1">
                  Yes
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="paid"
                  id="paid2"
                  value="0"
                  onChange={(e) => setData({ ...dataModel, paid: e.target.value })}
                />
                <label className="form-check-label" htmlFor="paid2">
                  No
                </label>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="start-date" className="form-label">
                Start Date
              </label>
              <input
                type="date"
                className="form-control"
                id="date"
                onChange={(e) =>
                  setData({ ...dataModel, start_date: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <label htmlFor="end-date" className="form-label">
                End Date
              </label>
              <input
                type="date"
                className="form-control"
                id="date"
                onChange={(e) => setData({ ...dataModel, end_date: e.target.value })}
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

export default CreateVacationModal;