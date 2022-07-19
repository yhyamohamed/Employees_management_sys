import {useState} from "react";
import APIService from "../../services/APIService";

function CreateVacationModal() {
    const [data, setData] = useState({
    });
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
     
        setLoading(true)
        const result = await APIService.post('http://127.0.0.1:8000/api/vacations', data);
        if(result.success)
            setSuccess(result);
        else
            setError(result);
        setLoading(false);
    }
    return (
        <div className="modal fade" id="modal" tabIndex="-1"
             aria-hidden="true">
            <form onSubmit={handleSubmit} className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Take Vacation</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"
                                aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
        
                        <div className="mb-3">
                            <label htmlFor="code" className="form-label">Employee ID</label>
                            <input type="text" className="form-control" id="code" onChange={(e) => setData({...data, employee_id: e.target.value})} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="code" className="form-label">Department ID</label>
                            <input type="text" className="form-control" id="code" onChange={(e) => setData({...data, department_id: e.target.value})} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Duration</label>
                            <input type="number" className="form-control" min='1' max='7' placeholder='max 7 days' id="duration" onChange={(e) => setData({...data, duration: e.target.value})} />
                           
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">Reasons</label>
                            <textarea className="form-control" id="description" rows="3" onChange={(e) => setData({...data, reasons: e.target.value})}></textarea>
                        </div>
                        <div className="mb-3">
                        <label htmlFor="paid" className="form-label">Paid</label>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="paid" id="paid1" value="1" checked  onChange={(e) => setData({...data, paid: e.target.value})}/>
                                <label class="form-check-label" for="paid1">
                                        Yes
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="paid" id="paid2" value="0" onChange={(e) => setData({...data, paid: e.target.value})}/>
                                <label class="form-check-label" for="paid2">
                                         No
                                </label>
                             </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="status" className="form-label">Status</label>
                            <input type="text" className="form-control" id="status" onChange={(e) => setData({...data,status: e.target.value})} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="start-date" className="form-label">Start Date</label>
                            <input type="date" className="form-control" id="date" onChange={(e) => setData({...data, start_date: e.target.value})} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="end-date" className="form-label">End Date</label>
                            <input type="date" className="form-control" id="date" onChange={(e) => setData({...data, end_date: e.target.value})} />
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

export default CreateVacationModal;