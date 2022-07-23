import { useState } from "react";
import APIService from "../../services/APIService";

function CreateUserModal({setSuccess}) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const result = await APIService.post(
            "http://127.0.0.1:8000/api/users",
            data
        );
        if (result.success) {
            setSuccess('User created successfully.');
            document.getElementById("close-modal").click();
        } else {
            setError(result.error);
        }
        setLoading(false);
    };

    return (
        <>
            <div className="modal fade" id="modal" tabIndex="-1" aria-hidden="true">
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
                                    onChange={(e) => setData({ ...data, employee_code: e.target.value })}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="code" className="form-label">
                                    Department ID
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="department_id"
                                    onChange={(e) => setData({ ...data, department_id: e.target.value })}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
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
                                    onChange={(e) => setData({ ...data, password: e.target.value })}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">
                                    Birth Date
                                </label>
                                <input
                                    type="date"
                                    className="form-control"
                                    id="date"
                                    onChange={(e) =>
                                        setData({ ...data, b_date: e.target.value })
                                    }
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="priority" className="form-label">
                                    Gender
                                </label>
                                <select
                                    className="d-block w-100"
                                    id="priority"
                                    onChange={(e) =>
                                        setData({ ...data, gender: e.target.value })
                                    }
                                >
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="priority" className="form-label">
                                    Employee Group
                                </label>
                                <select
                                    className="d-block w-100"
                                    id="priority"
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
                                <label htmlFor="priority" className="form-label">
                                    Employee Title
                                </label>
                                <select
                                    className="d-block w-100"
                                    id="priority"
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
                                    onChange={(e) =>
                                        setData({ ...data, phone: e.target.value })
                                    }
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
        </>
    );
}

export default CreateUserModal;