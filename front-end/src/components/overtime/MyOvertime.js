import React from 'react';
import {useContext, useEffect, useState} from "react";
import {UserContext} from "../../App";
import {useNavigate} from "react-router-dom";
import useGet from "../../custumHooks/useGet";
import ViewOvertime from "./ViewOvertime";
import DataTable from "react-data-table-component";


const customStyles = {
    columns: {
        style: {
            width: "fit-content",
        },
    },
    rows: {
        style: {
            minHeight: "50px", // override the row height
        },
    },
    headCells: {
        style: {
            paddingLeft: "8px", // override the cell padding for head cells
            paddingRight: "8px",
        },
    },
    cells: {
        style: {
            paddingLeft: "8px", // override the cell padding for data cells
            paddingRight: "8px",
        },
    },
};


function MyOvertime(props) {

    const [txt, setTxt] = useState("");
    const [overtimeData, setOvertimeData] = useState({
        duration: '',
        user: {
            name: '',
            employee_code: '',
            hired_at: '',
            gender: '',
            phone: '',
            email: '',
            department: {
                name: '',
            },
            supervisor: {
                name: '',
                phone: '',
                email: '',
            }
        }
    })

    const {user} = useContext(UserContext);

    const navigate = useNavigate();

    const {data, isPending, error} = useGet(
        "GET", "http://127.0.0.1:8000/api/myovertime",
        user.token
    );

    useEffect(() => {
        if (!user.authenticated)
            navigate("/login");
    }, [user]);


    function search(rows) {
        return rows.filter((row) =>
            row.user.name.toLowerCase().includes(txt.toLowerCase())
        );
    }

    const columns = [
        {
            name: "Overtime ID",
            selector: (row) => row.id,
            sortable: true,
        },
        {
            name: "Name",
            selector: (row) => row.user.name,
            sortable: true,
        },
        {
            name: "Overtime (in hours)",
            selector: (row) => row.duration,
            sortable: true,
        },
        {
            name: "Phone Number",
            selector: (row) => row.user.phone,
            sortable: true,
        },
        {
            name: "Employee Group",
            selector: (row) => row.user.employee_group,
            sortable: true,
        },
        {
            name: "Employee Title",
            selector: (row) => row.user.employee_title,
            sortable: true,
        },
        {
            name: "Date of Overtime",
            selector: (row) => row.created_at.slice(0,10),
            sortable: true,
        },
        {
            name: "Time",
            selector: (row) => row.created_at.slice(11,16),
            sortable: true,
        },
        {
            key: "action",
            text: "Action",
            name: "Action",
            className: "action",
            width: "8%",
            align: "left",
            sortable: false,

            cell: (record) => {
                return (
                    <>
                        <div className="d-flex justify-content-evenly w-75">
                            <i
                                className="fa-solid fa-circle-info fa-lg me-2"
                                style={{cursor: "pointer", color: "green"}}
                                data-bs-toggle="modal"
                                data-bs-target="#viewModal"
                                onClick={() => setOvertimeData(record)}
                            ></i>
                        </div>
                    </>
                );
            },
        },
    ];

    return (
        <div>
            <div>
                <div className="row">
                    {isPending && (
                        <>
                            <div className="alert alert-primary" role="alert">
            <span
                className="spinner-border text-info spinner-border-m me-2"
                role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </span>
                                Getting Data pleas wait!
                            </div>
                        </>
                    )}
                    {error && (
                        <>
                            <div className="alert alert-danger" role="alert">
                                we'r sry , {error} ..pls try again later!
                            </div>
                        </>
                    )}
                    {data && (
                        <>
                            <div className="row ">
                                <div className="offset-6 col-3 input-group-sm mb-1">
                                    <input
                                        className="form-control "
                                        type="text"
                                        placeholder="type to search"
                                        value={txt}
                                        onChange={(e) => setTxt(e.target.value)}
                                    />
                                </div>
                            </div>
                            <ViewOvertime
                                record={overtimeData}
                            />
                            <DataTable
                                columns={columns}
                                data={search(data)}
                                pagination
                                customStyles={customStyles}
                            />
                        </>
                    )}

                </div>
            </div>
        </div>
    );
}

export default MyOvertime;