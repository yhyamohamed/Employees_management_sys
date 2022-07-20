import {useState} from 'react';
import useGet from "../../custumHooks/useGet";
import DataTable from "react-data-table-component";
import CreateDepartmentModal from "./CreateDepartmentModal";
import ViewDepartment from "./ViewDepartment";
// import React from "@types/react";



const ListAllDepartments = () => {

    const { data, isPending, error } = useGet("GET","http://127.0.0.1:8000/api/departments");
    const [txt, setTxt] = useState("");
    const [success, setSuccess] = useState('');
    const [createMessage, setCreateMessage] = useState(null);
    const [viewData,setViewData] = useState({})

    function search(rows) {
        return rows.filter((row) =>
            row.name.toLowerCase().includes(txt.toLowerCase())
        );
    }

    const columns = [
        {
            name: 'ID',
            selector: row => row.id,
            sortable:true
        },
        {
            name: 'Name',
            selector: row => row.name,
            sortable:true
        },
        {
            name: 'Manager ID',
            selector: row => row.manager_id,
            sortable:true
        },
        {
            name: 'Manager Started At',
            selector: row => row.manager_start_at,
            sortable:true
        },
        {
            key: "action",
            text: "Action",
            name: "Action",
            className: "action",
            width: 100,
            align: "left",
            sortable: false,
            cell: (record) => {
                return (
                    <>
                        <div className="d-flex justify-content-between w-50">
                            <i
                                className="far fa-edit fa-lg"
                                style={{ cursor: "pointer", color: "blue" }}
                                onClick={() => console.log(record.id)}
                            ></i>
                            <i
                                className="fa-regular fa-trash-can fa-lg"
                                style={{ cursor: "pointer", color: "red" }}
                                onClick={() => console.log(record.id)}
                            ></i>

                            <i
                                className="fa-solid fa-circle-info fa-lg"
                                data-bs-toggle="modal" data-bs-target="#viewModal"
                                style={{ cursor: "pointer", color: "green" }}
                                onClick={() => setViewData(record)}
                            ></i>
                        </div>
                    </>
                );
            },
        }
    ];

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

    return (
        <div className="row">
            {isPending && (
                <>
                    <div className="alert alert-primary" role="alert">
            <span
                className="spinner-border text-info spinner-border-m me-2"
                role="status"
            >
              <span className="visually-hidden text-center">Loading...</span>
            </span>
                        <span>Getting Data pleas wait!</span>
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
                        {createMessage && (
                            <div className="col-12 " role="alert">
                                <h6 className="p-2 ms-5 text-success">{createMessage}</h6>
                            </div>
                        )}
                    </div>
                    {success && (
                        <div
                            className="alert alert-success alert-dismissible fade show"
                            role="alert"
                        >
                            {success}
                            <button
                                onClick={() => setSuccess("")}
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="alert"
                                aria-label="Close"
                            ></button>
                        </div>)}
                <div className="row ">
                    <div className="offset-6 col-3 input-group-sm ">
                        <input
                            className="form-control "
                            type="text"
                            placeholder="type to search"
                            value={txt}
                            onChange={(e) => setTxt(e.target.value)}
                        />
                    </div>
                    <div className=" col-2 me-1 ">
                        <button className="btn btn-sm btn-success " data-bs-toggle="modal" data-bs-target="#modal">Add new department</button>
                    </div>
                    <CreateDepartmentModal
                        setSuccess={setSuccess}
                        setCreateMessage={setCreateMessage}
                    />
                    <ViewDepartment
                        record={viewData}/>
                </div>
                    <DataTable
                        columns={columns}
                        data={search(data)}
                        pagination
                        customStyles={customStyles}
                    />
                </>
            )}
        </div>
    );
};

export default ListAllDepartments
