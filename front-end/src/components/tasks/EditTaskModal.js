import {useEffect, useState} from "react";
import APIService from "../../services/APIService";

function EditTaskModal({task, setSuccess}) {
    const [data, setData] = useState(task);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const result = await APIService.put(
            `http://127.0.0.1:8000/api/tasks/${task.id}`,
            data
        );
        if (result.success) {
            setSuccess('Task updated successfully.');
            document.getElementById("close-edit-modal").click();
        } else {
            setError(result.error);
        }
        setLoading(false);
    };

    useEffect(() => {
        setData(task);
    }, [task])

    return (
        <>
            <div className="modal fade" id="editModal" tabIndex="-1" aria-hidden="true">
                <form onSubmit={handleSubmit} className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Edit Task
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
                                    Code
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="code"
                                    value={data.code}
                                    onChange={(e) => setData({ ...data, code: e.target.value })}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">
                                    Due Date
                                </label>
                                <input
                                    type="date"
                                    className="form-control"
                                    id="date"
                                    value={data.due_date}
                                    onChange={(e) =>
                                        setData({ ...data, due_date: e.target.value })
                                    }
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="priority" className="form-label">
                                    Priority
                                </label>
                                <select
                                    className="d-block w-100"
                                    id="priority"
                                    value={data.priority}
                                    onChange={(e) =>
                                        setData({ ...data, priority: e.target.value })
                                    }
                                >
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">
                                    Description
                                </label>
                                <textarea
                                    className="form-control"
                                    id="description"
                                    rows="3"
                                    value={data.description}
                                    onChange={(e) =>
                                        setData({ ...data, description: e.target.value })
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

export default EditTaskModal;
