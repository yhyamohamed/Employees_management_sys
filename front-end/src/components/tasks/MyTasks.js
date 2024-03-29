import { useState, useEffect, useContext } from "react";
import useGet from "../../custumHooks/useGet";
import DataTable from "react-data-table-component";
import CreateTaskModal from "./CreateTaskModal";
import DeleteTaskModal from "./DeleteTaskModal";
import EditTaskModal from "./EditTaskModal";
import ViewTask from "./ViewTask";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../App";

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

function MyTasks() {
  const [txt, setTxt] = useState("");
  const [success, setSuccess] = useState('');
  const [currentTask, setCurrentTask] = useState({
    id: 0,
    name: '',
    description: '',
    code: '',
    due_date: '',
  })

  const navigate = useNavigate();

  const { user } = useContext(UserContext);

  useEffect(() => {
    if (!user.authenticated)
      navigate("/login");
  }, [user]);

  const { data, isPending, error ,refetch} = useGet(
    "GET",
    "http://127.0.0.1:8000/api/mytasks", user.token
  );
  const handleChange = ()=>{
    refetch({})
}
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
    },
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Code",
      selector: (row) => row.code,
      sortable: true,
    },
    {
      name: "created At",
      selector: (row) => row.created_at,
      sortable: true,
    },
    {
      name: "Description",
      selector: (row) => row.description,
      sortable: true,
    },
    {
      name: "Due Date",
      selector: (row) => row.due_date,
      sortable: true,
    },
    {
      name: "Priority",
      selector: (row) => row.priority,
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
                data-bs-toggle="modal"
                data-bs-target="#editModal"
                onClick={() => setCurrentTask(record)}
              ></i>
              <i
                className="fa-regular fa-trash-can fa-lg me-2"
                style={{ cursor: "pointer", color: "red" }}
                data-bs-toggle="modal"
                data-bs-target="#deleteModal"
                onClick={() => setCurrentTask(record)}
              ></i>

              <i
                className="fa-solid fa-circle-info fa-lg"
                data-bs-toggle="modal"
                data-bs-target="#viewModal"
                style={{ cursor: "pointer", color: "green" }}
                onClick={() => setCurrentTask(record)}
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
                placeholder="type to search"
                value={txt}
                onChange={(e) => setTxt(e.target.value)}
              />
            </div>
            <div className=" col-2 me-1 ">
              <button
                className="btn btn-sm btn-success"
                data-bs-toggle="modal"
                data-bs-target="#modal"
              >
                Add new task
              </button>
            </div>
            <CreateTaskModal
              setSuccess={setSuccess}
              user={user}
              handleChange={handleChange}
            />
            <ViewTask
              record={currentTask}
            />
            <EditTaskModal
              task={currentTask}
              setSuccess={setSuccess}
              handleChange={handleChange}
            />
            <DeleteTaskModal
              id={currentTask.id}
              setSuccess={setSuccess}
              handleChange={handleChange}
            />
          </div>
          <DataTable columns={columns} data={search(data)} pagination customStyles={customStyles} />
        </>
      )}
    </div>
  );
}

export default MyTasks;
