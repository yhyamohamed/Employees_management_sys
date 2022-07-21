import { useEffect, useState } from "react";
import useGet from "../../custumHooks/useGet";
import DataTable from "react-data-table-component";
import CreateComplaintModal from "./CreateComplaintModal";
import DeleteComplaintModal from "./DeleteComplaintModal";
import ViewComplaint from "./ViewComplaint";

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

function ListAllComplaints() {
    const [txt, setTxt] = useState("");
    const [viewData, setViewData] = useState({
      id: 0,
      Employee: '',
      Department: '',
      Subject:'',
      Body:'',
      Reasons:'',
  })
    const [currentID, setCurrentID] = useState(0);
    const [success, setSuccess] = useState('');
    const { data, isPending, error } = useGet(
      "GET",
      "http://127.0.0.1:8000/api/complaints"
    );

  function search(rows) {
    return rows.filter((row) =>
      row.subject.toLowerCase().includes(txt.toLowerCase())
    );
  }

  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
      sortable: true,
    },
    {
        name: 'Employee',
        selector: row => row.user.name,
        sortable: true
    },
    {
        name: 'Department',
        selector: row => row.department.name,
        sortable: true
    },
    {
        name: 'Subject',
        selector: row => row.subject,
        sortable: true
    },
    {
        name: 'Body',
        selector: row => row.body,
        sortable: true
    },
    {
        name: 'Reasons',
        selector: row => row.reasons,
        sortable: true
    },
    {
        name: 'Created At',
        selector: row => row.created_at,
        sortable: true
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
                    onClick={() => console.log(record.id)}
                ></i>
                <i
                    className="fa-regular fa-trash-can fa-lg me-2"
                    style={{ cursor: "pointer", color: "red" }}
                    data-bs-toggle="modal"
                    data-bs-target="#deleteModal"
                    onClick={() => setCurrentID(record.id)}
                ></i>

                <i
                    className="fa-solid fa-circle-info fa-lg"
                    data-bs-toggle="modal"
                    data-bs-target="#viewModal"
                    style={{cursor: "pointer", color: "green"}}
                    onClick={() => setViewData(record)}
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
                Add new complaint
              </button>
            </div>
            <CreateComplaintModal
              setSuccess={setSuccess}
            />
            <ViewComplaint
                record={viewData}
            />
            <DeleteComplaintModal
                id={currentID}
                setSuccess={setSuccess}
            />
          </div>
          <DataTable columns={columns} data={search(data)} pagination />
        </>
      )}
    </div>
  );
}

export default ListAllComplaints;
