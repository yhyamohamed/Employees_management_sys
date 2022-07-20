import useGet from "../../custumHooks/useGet";
import { Link } from "react-router-dom";
import DataTable from "react-data-table-component";
import React, { useEffect, useState } from "react";



// function MyVacation(){
//     return (
//       <>
//       MyVacation
//       </>
        
//     );
//   };

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
  
  const MyVacation= () => {
    const [txt, setTxt] = useState("");
    const [success, setSuccess] = useState('');
    const [currentID, setCurrentID] = useState(0);
  
    const { data, isPending, error } = useGet(
      "GET","http://127.0.0.1:8000/api/myvacations"
    );
    
  
    function search(rows) {
      return rows.filter((row) =>
        row.user.name.toLowerCase().includes(txt.toLowerCase())
      );
    }
  
    const columns = [
      {
        name: "name",
        selector: (row) => row.user.name,
        sortable: true,
      },
      {
        name: "Department",
        selector: (row) => row.department?row.department.name:"dep-deleted",
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
      }
    ]
  
}
export default MyVacation;
  