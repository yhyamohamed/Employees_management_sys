import React from 'react';

function ViewUser({record}) {
    return (
        <div>
            <div className="modal fade" id="viewModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel"><span className={'fw-bold'}>User: </span>{record.name}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div>
                                <p><span className={'fw-bold'}>Department: </span>{record.department.name}</p>
                                <p><span className={'fw-bold'}>Title: </span>{record.employee_title}</p>
                                <p><span className={'fw-bold'}>Gender: </span>{record.gender}</p>
                                <p><span className={'fw-bold'}>Phone: </span>{record.phone}</p>
                                <p><span className={'fw-bold'}>Salary: </span>{record.salary}</p>
                                {record.supervisor !==null && (
                                    <p><span className={'fw-bold'}>Supervisor: </span>{record.supervisor.name}</p>
                                    )}
                                {/*<p><span className={'fw-bold'}>Title: </span>{record.user.employee_title}</p>*/}
                                {/*<p><span className={'fw-bold'}>Phone: </span>{record.user.phone}</p>*/}
                                {/*<p><span className={'fw-bold'}>Mail: </span>{record.user.email}</p>*/}
                                {/*<p><span className={'fw-bold'}>Vacation days: </span>{record.duration}</p>*/}
                                {/*<p><span className={'fw-bold'}>Starting from: </span>{record.start_date}</p>*/}
                                {/*<p><span className={'fw-bold'}>Status: </span>{record.status}</p>*/}
                                {/*<p><span className={'fw-bold'}>Reasons: </span>{record.reasons}</p>*/}

                                {/*<p><span className={'fw-bold'}>Priority: </span>{record.priority}</p>*/}
                                {/*<p><span className={'fw-bold'}>Status: </span>{record.status}</p>*/}
                                {/*<p><span className={'fw-bold'}>Due date: </span>{record.due_date}</p>*/}
                                {/*<p><span className={'fw-bold'}>Description: </span>{record.description}</p>*/}
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

export default ViewUser;