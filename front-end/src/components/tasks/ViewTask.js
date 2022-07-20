import React from 'react';

function ViewTask({record}) {
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
                                <p><span className={'fw-bold'}>Task Code: </span>{record.code}</p>
                                <p><span className={'fw-bold'}>Priority: </span>{record.priority}</p>
                                <p><span className={'fw-bold'}>Status: </span>{record.status}</p>
                                <p><span className={'fw-bold'}>Due date: </span>{record.due_date}</p>
                                <p><span className={'fw-bold'}>Description: </span>{record.description}</p>
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

export default ViewTask;