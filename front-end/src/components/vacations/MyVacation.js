import useGet from "../../custumHooks/useGet";
import { Link } from "react-router-dom";
import DataTable from "react-data-table-component";
import React, { useEffect, useState } from "react";
import DeleteVacationModal from "./DeleteVacationModal";

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
  
  const MyVacation= () => {
    const [txt, setTxt] = useState("");
    const [success, setSuccess] = useState('');
    const [currentID, setCurrentID] = useState(0);
    
    const { data, isPending, error } = useGet(
      "GET","http://127.0.0.1:8000/api/myvacation"
    );
    
   
  
    const columns = [
      {
        name: "Department ID",
        selector: (row) => row.department_id,
      },
      {
        name: "Employee ID",
        selector: (row) => row.employee_id,
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
        selector: (row) => row.paid?"YES":"NO",
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
                            onClick={() => {
                                console.log(record)
                            }}
                        ></i>
                        <i
                            className="fa-regular fa-trash-can fa-lg me-2"
                            style={{cursor: "pointer", color: "red"}}
                            data-bs-toggle="modal"
                            data-bs-target="#deleteModal"
                            onClick={() => setCurrentID(record.id)}
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
                     <DeleteVacationModal
                            id={currentID}
                            setSuccess={setSuccess}
                        />
                  </div>
                  <DataTable
                      columns={columns}
                      data={(data)}
                      pagination
                      customStyles={customStyles}
                  />
              </>
          )}
      </div>
  );
 };
  
export default MyVacation;
  