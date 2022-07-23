import { useEffect, useState } from "react";
import useGet from "../../custumHooks/useGet";
import APIService from "../../services/APIService";

function EditComplaintModal({ complaint, setSuccess ,handleChange}) {
    const [dataModel, setData] = useState(complaint);
    const [err, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const { data, issPending, error } = useGet('GET', "http://127.0.0.1:8000/api/users")
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const result = await APIService.put(
            `http://127.0.0.1:8000/api/complaints/${complaint.id}`,
            dataModel
        );
        if (result.success) {
            setSuccess('Complaint updated successfully.');
            handleChange()
            document.getElementById("close-edit-modal").click();
        } else {
            setError(result.err);
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
                            {err && (
                                <div className="alert alert-danger" role="alert">
                                    <small>{err}</small>
                                </div>
                            )}
                            <div className="mb-3">
                                <label htmlFor="employee_id" className="form-label">Employee Name</label>
                                <select className="d-block w-100" id="employee_id" 
                                    onChange={(e) => setData({ ...dataModel, employee_id: e.target.value, department_id: data.filter(obj => obj.id == e.target.value)[0].department_id })}>
                                    <option value={dataModel.employee_id}>{dataModel.user.name}</option>
                                    {data &&
                                        data.map(user => (
                                            <option key={user.id} value={user.id}>{user.name}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            {/* <div className="mb-3">
                                <label htmlFor="department_id" className="form-label">
                                    Department
                                </label>
                                <div>
                                    <p><span className="text-primary"> {dataModel.department.name}</span></p>
                                </div>
                            </div> */}
                            <div className="mb-3">
                                <label htmlFor="subject" className="form-label">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="subject"
                                    value={dataModel.subject}
                                    onChange={(e) =>
                                        setData({ ...dataModel, subject: e.target.value })
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
                                    value={dataModel.body}
                                    onChange={(e) =>
                                        setData({ ...dataModel, body: e.target.value })
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
                                    value={dataModel.status}
                                    onChange={(e) =>
                                        setData({ ...dataModel, status: e.target.value })
                                    }
                                >
                                    <option value="pending">Pending</option>
                                    <option value="reviewing">Reviewing</option>
                                    <option value="solved">Solved</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="reasons" className="form-label">
                                    Reasons
                                </label>
                                <textarea
                                    type="reasons"
                                    className="form-control"
                                    id="reasons"
                                    value={dataModel.reasons}
                                    onChange={(e) =>
                                        setData({ ...dataModel, reasons: e.target.value })
                                    }
                                >
                                </textarea>
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
