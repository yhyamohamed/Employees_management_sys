import React, {useContext, useEffect, useState} from "react";
import useGet from "../../custumHooks/useGet";
import DataTable from "react-data-table-component";
import ViewUser from "./ViewUser";
import CreateUserModal from "./CreateUserModal";
import {UserContext} from "../../App";
import {useNavigate} from "react-router-dom";
import EditUserModal from "./EditUserModal";
import DeleteUserModal from "./DeleteUserModal";


const ListAllUsers = () => {
  const { data, isPending, error } = useGet("GET","http://127.0.0.1:8000/api/users");
  const [txt, setTxt] = useState("");
  const [success, setSuccess] = useState('');
  const [userData,setUserData] = useState({
    name:'',
    employee_code: '',
    employee_title:'',
    employee_group:'',
    email: '',
    b_date: '',
    gender:'',
    phone:'',
    salary:'',
    department_id: '',
    supervisor_id: null,
    supervisor:{
      name:''
    },
    department:{
      name:''
    }

  });

  const navigate = useNavigate();

  const {user} = useContext(UserContext);

  useEffect(() => {
    if(!user.authenticated)
        navigate("/login");
  }, [user]);

  function search(rows) {
    return rows.filter((row) =>
      row.name.toLowerCase().includes(txt.toLowerCase())
    );
  }

  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
      sortable: true,
      width: "50px" ,
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
      minWidth:"200px",
    },
    {
      name: "employee_group",
      selector: (row) => row.employee_group,
      sortable: true,
      style: { whiteSpace: "unset" },
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
      name:"Action",
      className: "action",
      width: 100,
      align: "left",
      sortable: false,
      cell: (record) => {
        return (
            <>
              <div className="d-flex justify-content-between w-50">
                <i
                    className="far fa-edit fa-lg ms-2"
                    style={{ cursor: "pointer", color: "blue" }}
                    data-bs-toggle="modal"
                    data-bs-target="#editModal"
                    onClick={() => setUserData(record)}
                ></i>
                <i
                    className="fa-regular fa-trash-can fa-lg ms-2"
                    style={{ cursor: "pointer", color: "red" }}
                    data-bs-toggle="modal"
                    data-bs-target="#deleteModal"
                    onClick={() => setUserData(record)}
                ></i>

                <i
                    className="fa-solid fa-circle-info fa-lg ms-2"
                    style={{ cursor: "pointer", color: "green" }}
                    data-bs-toggle="modal"
                    data-bs-target="#viewModal"
                    onClick={() => setUserData(record)}
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
              <button className="btn btn-sm btn-success" data-bs-toggle="modal" data-bs-target="#modal">Add new employee</button>
            </div>
          </div>
          <CreateUserModal
            setSuccess={setSuccess}
          />
          <EditUserModal
              record={userData}
              setSuccess={setSuccess}
          />
          <ViewUser
            record={userData}
          />
          <DeleteUserModal
              id={userData.id}
              setSuccess={setSuccess}
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
  );
};

export default ListAllUsers;
