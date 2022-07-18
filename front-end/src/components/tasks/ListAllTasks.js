import {useState} from 'react';
import useGet from "../../custumHooks/useGet";
import DataTable from "react-data-table-component";

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
}

export default ListAllTasks;