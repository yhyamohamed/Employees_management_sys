import "./App.css";
import {Routes, Route} from "react-router-dom";
import Hello from "./components/Hello";
import Navbar from "./components/Navbar"
import ListAllUsers from "./components/users/ListAllUsers";
import ListAllTasks from "./components/tasks/ListAllTasks";
import ListAllVacations from "./components/vacations/ListAllVacations";
import ListAllDepartments from "./components/departments/ListAllDepartments";
import ListAllComplaints from "./components/complaints/ListAllComplaints";


function App() {
    return (
        <>
            <Navbar/>
            <div className="container mt-5 bg-light p-1">
                <Routes>
                    <Route exact path="/" element={<Hello/>}></Route>
                    <Route path="/users" element={<ListAllUsers/>}></Route>
                    <Route path="/tasks" element={<ListAllTasks/>}></Route>
                    <Route path="/vacations" element={<ListAllVacations/>}></Route>
                    <Route path="/departments" element={<ListAllDepartments/>}></Route>
                    <Route path="/complaints" element={<ListAllComplaints/>}></Route>
                </Routes>
            </div>
        </>
    );
}

export default App;
