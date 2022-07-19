import {useState} from "react";

function CreateTaskModal() {
    const [data, setData] = useState({
        priority: 1,
        status: 'opened',
        created_by: 1,
    });
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
                        <h5 className="modal-title" id="exampleModalLabel">Create Task</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"
                                aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" onChange={(e) => setData({...data, name: e.target.value})} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="code" className="form-label">Code</label>
                            <input type="text" className="form-control" id="code" onChange={(e) => setData({...data, code: e.target.value})} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Due Date</label>
                            <input type="date" className="form-control" id="date" onChange={(e) => setData({...data, due_date: e.target.value})} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="priority" className="form-label">Priority</label>
                            <select className="d-block w-100" id="priority" onChange={(e) => setData({...data, priority: e.target.value})}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">Description</label>
                            <textarea className="form-control" id="description" rows="3" onChange={(e) => setData({...data, description: e.target.value})}></textarea>
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

export default CreateTaskModal;