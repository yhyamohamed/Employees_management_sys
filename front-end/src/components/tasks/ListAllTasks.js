import {useState} from 'react';
import useGet from "../../custumHooks/useGet";
import DataTable from "react-data-table-component";
import CreateTaskModal from "./CreateTaskModal";


const columns = [
    {
        name: 'ID',
        selector: row => row.id,
        sortable: true,
    },
    {
        name: 'Name',
        selector: row => row.name,
        sortable: true,
    },
    {
        name: 'Code',
        selector: row => row.code,
        sortable: true,
    },
    {
        name: 'Description',
        selector: row => row.description,
        sortable: true,
    },
    {
        name: 'Due Date',
        selector: row => row.due_date,
        sortable: true,
    },
    {
        name: 'Priority',
        selector: row => row.priority,
        sortable: true,
    },
    {
        name: 'Status',
        selector: row => row.status,
        sortable: true,
    },
    {
        key: "action",
        text: "Action",
        Name: "Action",
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
                            onClick={() => console.log(record.id)}
                        ></i>
                        <i
                            className="fa-regular fa-trash-can fa-lg ms-2"
                            style={{ cursor: "pointer", color: "red" }}
                            onClick={() => console.log(record.id)}
                        ></i>

                        <i
                            className="fa-solid fa-circle-info fa-lg ms-2"
                            style={{ cursor: "pointer", color: "green" }}
                            onClick={() => console.log(record.id)}
                        ></i>
                    </div>
                </>
            );
        },
    },
];

function ListAllTasks() {
    const [txt, setTxt] = useState("");
    const { data, isPending, error } = useGet('http://127.0.0.1:8000/api/tasks');

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
                            <button className="btn btn-sm btn-success" data-bs-toggle="modal" data-bs-target="#modal">Add new task</button>
                        </div>
                        <CreateTaskModal/>
                    </div>
                    <DataTable columns={columns} data={search(data)} pagination />
                </>
            )}
        </div>
    );
}

export default ListAllTasks;