import {useEffect, useState} from "react";
import APIService from "../../services/APIService";

function EditVacationModal({vacation, setSuccess}) {
    const [data, setData] = useState(vacation);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const result = await APIService.put(
            `http://127.0.0.1:8000/api/vacations/${vacation.id}`,
            data
        );
        if (result.success) {
            setSuccess('vacation updated successfully.');
            document.getElementById("close-edit-modal").click();
        } else {
            setError(result.error);
        }
        setLoading(false);
    };

    useEffect(() => {
        setData(vacation);
    }, [vacation])

    return (
        <>
            <div className="modal fade" id="editModal" tabIndex="-1" aria-hidden="true">
                <form onSubmit={handleSubmit} className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Edit vacation
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
                value={data.user.id}
                
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
                value={data.department.id}
                onChange={(e) =>
                  setData({ ...data, department_id: e.target.value })
                }
              />
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
                value={data.duration}
                onChange={(e) => setData({ ...data, duration: e.target.value })}
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
                value={data.reasons}
                onChange={(e) => setData({ ...data, reasons: e.target.value })}
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="paid" className="form-label">
                Paid
              </label>
              
                {data.paid === 0 && (
                  <div>
                      <div className="form-check">
                      <input
                  className="form-check-input"
                  type="radio"
                  name="paid"
                  id="paid1"
                  value={data.paid}
                  onChange={(e) => setData({ ...data, paid: e.target.value })}
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
                  checked
                  value={data.paid}
                  onChange={(e) => setData({ ...data, paid: e.target.value })}
                />
                <label className="form-check-label" htmlFor="paid2">
                  No
                </label>
              </div>
                  </div>
                )}
                
                {data.paid === 1 && (
                  <div>
                      <div className="form-check">
                      <input
                  className="form-check-input"
                  type="radio"
                  name="paid"
                  id="paid1"
                  checked
                  value={data.paid}
                  onChange={(e) => setData({ ...data, paid: e.target.value })}
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
                 
                  value={data.paid}
                  onChange={(e) => setData({ ...data, paid: e.target.value })}
                />
                <label className="form-check-label" htmlFor="paid2">
                  No
                </label>
              </div>
                  </div>
                )}
              
            </div>
            <div className="mb-3">
              <label htmlFor="start-date" className="form-label">
                Start Date
              </label>
              <input
                type="date"
                className="form-control"
                id="date"
                value={data.start_date}
                onChange={(e) =>
                  setData({ ...data, start_date: e.target.value })
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
                value={data.end_date}
                onChange={(e) => setData({ ...data, end_date: e.target.value })}
              />
            </div>
            <div className="mb-3">
                                <label htmlFor="status" className="form-label">
                                    Status
                                </label>
                                <select
                                    className="d-block w-100"
                                    id="status"
                                    value={data.status}
                                    onChange={(e) =>
                                        setData({ ...data, status: e.target.value })
                                    }
                                >
                                    <option value="approved">Approved</option>
                                    <option value="pending">Pending</option>
                                    <option value="rejected">rejected</option>
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

export default EditVacationModal;
