import React from 'react';

function ViewDepartment({record}) {
    return (
        <div>
            <div className="modal fade" id="viewModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{record.name}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div>
                                <p><span className={'fw-bold'}>Manager Started At : </span>{record.manager_start_at}</p>
                                {record.manager_id === null && (
                                    <div>
                                        No Manager present
                                    </div>
                                )}
                                {record.manager_id !== null && (
                                    <div>
                                        <p><span className={'fw-bold'}>Manager Name : </span>{record.manager.name}</p>
                                        <p><span className={'fw-bold'}>Gender : </span>{record.manager.gender}</p>
                                        <p><span className={'fw-bold'}>Phone : </span>{record.manager.phone}</p>
                                        <p><span className={'fw-bold'}>E-Mail : </span>{record.manager.email}</p>
                                    </div>
                                )}
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

export default ViewDepartment;