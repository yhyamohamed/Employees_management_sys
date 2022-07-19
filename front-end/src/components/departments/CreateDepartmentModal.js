import {useState} from "react";
import useGet from "../../custumHooks/useGet";

function CreateDepartmentModal() {
    const [dataModal, setData] = useState({
        name: "",
        manager_id: 0,
        manager_start_at: 0,
    });
    const {data, isPending, error} = useGet('GET', "http://127.0.0.1:8000/api/managers")

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
    }
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
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name"
                                   onChange={(e) => setData({...dataModal, name: e.target.value})}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Starting Date</label>
                            <input type="date" className="form-control" id="date"
                                   onChange={(e) => setData({...dataModal, due_date: e.target.value})}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="managerID" className="form-label">Priority</label>
                            <select className="d-block w-100" id="managerID" defaultValue={'none'}
                                    onChange={(e) => setData({...dataModal, priority: e.target.value})}>
                                <option value="none" disabled hidden>Select a Manager</option>
                                {data &&
                                    data.map(manager => (
                                        <option key={manager.id} value={manager.id}>{manager.name}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary"
                                data-bs-dismiss="modal">Close
                        </button>
                        <button type="submit" className="btn btn-primary">Create</button>
                    </div>
                </div>
            </form>
        </div>

    );
}

export default CreateDepartmentModal;