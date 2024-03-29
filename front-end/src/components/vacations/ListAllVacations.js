import useGet from "../../custumHooks/useGet";
import DataTable from "react-data-table-component";
import React, {useEffect, useState, useContext} from "react";
import CreateVacationModal from "./CreateVacationModal";
import DeleteVacationModal from "./DeleteVacationModal";
import ViewVacation from "./ViewVacation";
import EditVacationModal from "./EditVacationModal";
import {useNavigate} from "react-router-dom";
import {UserContext} from "../../App";

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

const ListAllVacations = () => {
    const [txt, setTxt] = useState("");
    const [success, setSuccess] = useState('');
    const [currentID, setCurrentID] = useState(0);
    const [viewVacationData, setVacationData] = useState({
        user : {
            name : '',
            employee_title : '',
            phone: '',
            email: '',
        },
        department:{
            name:'',
        },
        status: '',
        reasons: '',
        start_date:'',
        duration:'',


    })

    const {data, isPending, error,refetch} = useGet(
        "GET", "http://127.0.0.1:8000/api/vacations", localStorage.getItem('token')
    );

    const navigate = useNavigate();

    const {user} = useContext(UserContext);

    const handleChange = ()=>{
        refetch({})
    }

    useEffect(() => {
        if(!user.authenticated)
            navigate("/login");
        if(user.employee_group !== 'admin' && user.employee_group !== 'higher-management' && user.employee_group !== 'middle-management')
            navigate('/home');
    }, [user]);


    function search(rows) {
        return rows.filter((row) =>
            row.user.name.toLowerCase().includes(txt.toLowerCase())
        );
    }

    const columns = [
        {
            name: "name",
            selector: (row) => row.user.name,
            sortable: true,
        },
        {
            name: "Department",
            selector: (row) => row.department?row.department?.name:"deleted",
        },
        {
            name: "Duration",
            selector: (row) => row.duration,
        },
        {
            name: "Reasons",
            selector: (row) => row.reasons,
            sortable: true,
        },
        {
            name: "Paid",
            selector: (row) => row.paid ? "YES" : "NO",
            width: "fit-content",
        },
        {
            name: "Start Date",
            selector: (row) => row.start_date,
            sortable: true,
        },
        {
            name: "End Date",
            selector: (row) => row.end_date,
            sortable: true,
        },
        {
            name: "Status",
            selector: (row) => row.status,
            sortable: true,
            width: "fit-content",
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
                        <div className="d-flex justify-content-between w-75">
                            <i
                                className="far fa-edit fa-lg me-2"
                                style={{cursor: "pointer", color: "blue"}}
                                data-bs-toggle="modal"
                                data-bs-target="#editModal"
                                onClick={() => setVacationData(record)}
                            ></i>
                            <i
                                className="fa-regular fa-trash-can fa-lg me-2"
                                style={{cursor: "pointer", color: "red"}}
                                data-bs-toggle="modal"
                                data-bs-target="#deleteModal"
                                onClick={() => setCurrentID(record.id)}
                            ></i>

                            <i
                                className="fa-solid fa-circle-info fa-lg me-2"
                                style={{cursor: "pointer", color: "green"}}
                                data-bs-toggle="modal"
                                data-bs-target="#viewModal"
                                onClick={() => setVacationData(record)}
                            ></i>
                        </div>
                    </>
                );
            },
        },
    ];

    return (
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
                            </div>
                        )}
                        <div className="offset-6 col-3 input-group-sm mb-1">
                            <input
                                className="form-control "
                                type="text"
                                placeholder="Search by name"
                                value={txt}
                                onChange={(e) => setTxt(e.target.value)}
                            />
                        </div>
                        <div className=" col-2 me-1 ">
                            <button
                                className="btn btn-sm btn-success "
                                data-bs-toggle="modal"
                                data-bs-target="#modal"
                            >
                                Add Vacation
                            </button>
                        </div>
                        <CreateVacationModal
                            setSuccess={setSuccess}
                            handleChange={handleChange}
                        />
                        <DeleteVacationModal
                            id={currentID}
                            setSuccess={setSuccess}
                            handleChange={handleChange}
                        />
                        <ViewVacation
                            record={viewVacationData}
                        />
                        <EditVacationModal 
                         vacation={viewVacationData}
                         setSuccess={setSuccess}
                         handleChange={handleChange}/>
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

export default ListAllVacations;
