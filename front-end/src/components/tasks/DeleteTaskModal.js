import { useState } from "react";
import APIService from "../../services/APIService";

function CreateTaskModal({id, setSuccess}) {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleDelete = async () => {
        setLoading(true);
        const result = await APIService.destroy(`http://127.0.0.1:8000/api/tasks/${id}`);
        if (result.success) {
            setSuccess('Task deleted successfully.');
            document.getElementById("close-delete-modal").click();
        } else {
            setError(result.error);
        }
        setLoading(false);
    };

    return (
        <>
            <div className="modal fade" id="deleteModal" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Confirm Delete
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
                            Are you sure you want to delete task with id {id}?
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
                                onClick={handleDelete}
                                disabled={loading}
                                className="btn btn-primary"
                            >
                                Delete
                            </button>
                            <button
                                type="button"
                                id="close-delete-modal"
                                data-bs-dismiss="modal"
                                style={{ display: "none" }}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CreateTaskModal;
