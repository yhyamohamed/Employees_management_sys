import React from "react";
import useGet from "../../custumHooks/useGet";
import { Link } from "react-router-dom";
import DataTable from "react-data-table-component";
import FilterComponent from "../partials/FilterComponent";


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
    selector: (row) => row.paid,
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
  },
  {
    key: "action",
    text: "Action",
    className: "action",
    width: 100,
    align: "left",
    sortable: false,
    cell: (record) => {
      return (
        <>
          <button
            className="btn btn-sm btn-success"
            onClick={() => console.log(record)}>
            Edit
          </button>
          <button
            className="btn btn-sm btn-danger"
            onClick={() => console.log(record)}>
            Delete
          </button>
          <button
            className="btn btn-sm btn-primary"
            onClick={() => console.log(record)}>
            Show
          </button>
        </>
      );
    },
  },
];

const ListAllVacations = () => {
  const { data, isPending, error } = useGet("http://127.0.0.1:8000/api/vacations");
 
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
        <DataTable
          columns={columns}
          data={data}
          pagination
       
       
        />
      )}
    </div>
  );
};

export default ListAllVacations;
