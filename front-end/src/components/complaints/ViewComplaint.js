import React from 'react';

function ViewComplaint({record}) {
    return (
        <div>
            <div className="modal fade" id="viewModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{record.subject}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div>
                                {record.subject !== null && (
                                    <div>
                                        {/* Bug here */}
                                        <p><span className={'fw-bold'}>Employee: </span>{record.user.name}</p>
                                        <p><span className={'fw-bold'}>Department: </span>{record.department.name}</p>
                                        <p><span className={'fw-bold'}>Subject: </span>{record.subject}</p>
                                        <p><span className={'fw-bold'}>Body: </span>{record.body}</p>
                                        <p><span className={'fw-bold'}>Reasons: </span>{record.reasons}</p>
                                        <p><span className={'fw-bold'}>Created At: </span>{record.created_at}</p>
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

export default ViewComplaint;