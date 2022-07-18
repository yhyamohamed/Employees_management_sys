import React, { useState } from "react";
import useGet from "../../custumHooks/useGet";
import { Link } from "react-router-dom";
import DataTable from "react-data-table-component";


const columns = [
  {
    name: "ID",
    selector: (row) => row.id,
    sortable: true,
  },
  {
    name: "Employee code",
    selector: (row) => row.employee_code,
    sortable: true,
  },
  {
    name: "name",
    selector: (row) => row.name,
    sortable: true,
  },
  {
    name: "employee_group",
    selector: (row) => row.employee_group,
    sortable: true,
  },
  {
    name: "employee_title",
    selector: (row) => row.employee_title,
    sortable: true,
  },
  {
    name: "gender",
    selector: (row) => row.gender,
  },
  {
    name: "phone",
    selector: (row) => row.phone,
  },
  {
    name: "salary",
    selector: (row) => row.salary,
    sortable: true,
  },
  {
    name: "email",
    selector: (row) => row.email,
  },
  {
    name: "hired at",
    selector: (row) => row.hired_at,
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
            onClick={() => console.log(record)}
          >
            Edit
          </button>
        </>
      );
    },
  },
];

const ListAllUsers = () => {
  const { data, isPending, error } = useGet("http://127.0.0.1:8000/api/users");
 const [txt, setTxt] = useState("");

 function search(rows) {
    return rows.filter((row)=> row.name.toLowerCase().includes(txt.toLowerCase()))
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
          <div className="float-right row">
            <input
              className="form-control  col offset-8"
              type="text"
              placeholder="type to search"
              value={txt}
              onChange={(e) => setTxt(e.target.value)}
            />
          </div>
          <DataTable columns={columns} data={search(data)} pagination />
        </>
      )}
    </div>
  );
};

export default ListAllUsers;
