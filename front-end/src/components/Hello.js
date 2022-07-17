import React from 'react';
import DataTable from 'react-data-table-component';

const columns = [
    {
        name: 'Title',
        selector: row => row.title,
    },
    {
        name: 'Year',
        selector: row => row.year,
    },
    {
        key: "action",
        text: "Action",
        className: "action",
        width: 100,
        align: "left",
        sortable: false,
        cell: (record) => {
            return <>
                <button onClick={() => console.log(record)}>
                    Edit
                </button>
            </>
        }
    }
];

const data = [
    {
        id: 1,
        title: 'Beetlejuice',
        year: '1988',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
    },
]

function Hello(props) {
    return (
        <div>
            Hello World
            <DataTable
                columns={columns}
                data={data}
            />
        </div>
    );
}

export default Hello;