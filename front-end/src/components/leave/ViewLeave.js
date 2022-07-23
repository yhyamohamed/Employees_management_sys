import React from 'react';

function ViewLeave({record}) {
    return (
        <div>
            <div className="modal fade" id="viewModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Leave by: {record.user.name}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div>
                                <div>
                                    {/* Bug here */}
                                    <p><span className={'fw-bold'}>Employee Code: </span>{record.user.employee_code}</p>
                                    <p><span className={'fw-bold'}>Employee Starting Date: </span>{record.user.hired_at}</p>
                                    <p><span className={'fw-bold'}>Gender: </span>{record.user.gender}</p>
                                    <p><span className={'fw-bold'}>Phone: </span>{record.user.phone}</p>
                                    <p><span className={'fw-bold'}>Email: </span>{record.user.email}</p>
                                    <p><span className={'fw-bold'}>Department: </span>{record.user.department.name}</p>
                                    <p><span className={'fw-bold'}>Department Manager: </span>{record.user.supervisor.name}</p>
                                    <p><span className={'fw-bold'}>Manager Phone Number: </span>{record.user.supervisor.phone}</p>
                                    <p><span className={'fw-bold'}>Manager Email: </span>{record.user.supervisor.email}</p>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewLeave;