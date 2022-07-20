import { useEffect, useState } from "react";
import useGet from "../../custumHooks/useGet";
import DataTable from "react-data-table-component";
import CreateTaskModal from "./CreateTaskModal";

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

function ListAllTasks() {
    const [txt, setTxt] = useState("");
    const [success, setSuccess] = useState('');
     const [createMessage, setCreateMessage] = useState(null);
    const { data, isPending, error } = useGet(
      "GET",
      "http://127.0.0.1:8000/api/tasks"
    );

  function search(rows) {
    return rows.filter((row) =>
      row.name.toLowerCase().includes(txt.toLowerCase())
    );
  }
  useEffect(() => {
    if (createMessage) {
      setTimeout(() => {
        setCreateMessage(null);
      }, 1000);
    }
  }, [createMessage]);
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
            {createMessage && (
              <div className="col-12 " role="alert">
                <h6 className="p-2 ms-5 text-success">
                  A simple success alert—check it out!
                </h6>
              </div>
            )}
            
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
              setCreateMessage={setCreateMessage}
            />
          </div>
          <DataTable columns={columns} data={search(data)} pagination />
        </>
      )}
    </div>
  );
}

export default ListAllTasks;
