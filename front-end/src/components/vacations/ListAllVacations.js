import useGet from "../../custumHooks/useGet";
import { Link } from "react-router-dom";
import DataTable from "react-data-table-component";
import React, { useState } from "react";
import CreateVacationModal from "./CreateVacationModal";

const columns = [
  {
    name: "name",
    selector: (row) => row.user.name,
    sortable: true,
  },
  {
    name: "Department",
    selector: (row) => row.department.name,
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
              style={{ cursor: "pointer", color: "blue" }}
              onClick={EditVacation}
            ></i>
            <i
              className="fa-regular fa-trash-can fa-lg me-2"
              style={{ cursor: "pointer", color: "red" }}
              onClick={() => console.log(record.id)}
            ></i>

            <i
              className="fa-solid fa-circle-info fa-lg me-2"
              style={{ cursor: "pointer", color: "green" }}
              onClick={() => console.log(record.id)}
            ></i>
          </div>
        </>
      );
    },
  },
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

const ListAllVacations = () => {
  const { data, isPending, error } = useGet(
    "GET","http://127.0.0.1:8000/api/vacations"
  );
  const [txt, setTxt] = useState("");
  function search(rows) {
    return rows.filter((row) =>
      row.user.name.toLowerCase().includes(txt.toLowerCase())
    );
  }
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
            <div className="offset-6 col-3 input-group-sm ">
              <input
                className="form-control "
                type="text"
                placeholder="Search by name"
                value={txt}
                onChange={(e) => setTxt(e.target.value)}
              />
            </div>
            <div className=" col-2 me-1 ">
              <button className="btn btn-sm btn-success " data-bs-toggle="modal" data-bs-target="#modal">Add Vacation</button>
            </div>
            <CreateVacationModal/>
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

const EditVacation = () => {
  
  console.log("tmam")
}

export default ListAllVacations;
