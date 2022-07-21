import { useEffect, useState } from "react";
import APIService from "../../services/APIService";

function EditComplaintModal({ complaint, setSuccess }) {
    const [data, setData] = useState(complaint);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const result = await APIService.put(
            `http://127.0.0.1:8000/api/complaints/${complaint.id}`,
            data
        );
        if (result.success) {
            setSuccess('Complaint updated successfully.');
            document.getElementById("close-edit-modal").click();
        } else {
            setError(result.error);
        }
        setLoading(false);
    };

    useEffect(() => {
        setData(complaint);
    }, [complaint])

    return (
        <>
            <div className="modal fade" id="editModal" tabIndex="-1" aria-hidden="true">
                <form onSubmit={handleSubmit} className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Edit complaint
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
                                <label htmlFor="employee_id" className="form-label">
                                    Employee ID
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="employee_id"
                                    value={data.employee_id}
                                    onChange={(e) => setData({ ...data, employee_id: e.target.value })}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="department_id" className="form-label">
                                    Department ID
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="department_id"
                                    value={data.department_id}
                                    onChange={(e) => setData({ ...data, department_id: e.target.value })}
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
                                    value={data.subject}
                                    onChange={(e) =>
                                        setData({ ...data, subject: e.target.value })
                                    }
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="body" className="form-label">
                                    Body
                                </label>
                                <textarea
                                    type="body"
                                    className="form-control"
                                    id="body"
                                    value={data.body}
                                    onChange={(e) =>
                                        setData({ ...data, body: e.target.value })
                                    }
                                >
                                </textarea>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="status" className="form-label">
                                    Status
                                </label>
                                <select
                                    className="form-control"
                                    id="status"
                                    value={data.status}
                                    onChange={(e) =>
                                        setData({ ...data, status: e.target.value })
                                    }
                                >
                                    <option value="pending">Pending</option>
                                    <option value="in-progress">In-progress</option>
                                    <option value="resolved">Resolved</option>
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

export default EditComplaintModal;
