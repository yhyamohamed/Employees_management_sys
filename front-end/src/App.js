import "./App.css";
import {Routes, Route} from "react-router-dom";
import Hello from "./components/Hello";
import Navbar from "./components/Navbar"
import ListAllUsers from "./components/users/ListAllUsers";
import ListAllTasks from "./components/tasks/ListAllTasks";
import ListAllVacations from "./components/vacations/ListAllVacations";
import ListAllDepartments from "./components/departments/ListAllDepartments";
import ListAllComplaints from "./components/complaints/ListAllComplaints";
import {createContext, useEffect, useState} from "react";


import MainRoutes from "./MainRoutes";
import MyVacation from "./components/vacations/MyVacation";
import MyTasks from "./components/tasks/MyTasks";
import MyComplaints from "./components/complaints/MyComplaints";
import Login from "./components/Login";
import APIService from "./services/APIService";
import ListAllAttendance from "./components/attendance/ListAllAtendance";

export const UserContext = createContext();

function App() {
    const [user, setUser] = useState({
        authenticated: false,
        token: '',
    });
    const [loading, setLoading] = useState(true);

    const checkToken = async () => {
        if(localStorage.getItem('token')){
            const result = await APIService.get('http://127.0.0.1:8000/api/user', localStorage.getItem('token'));
            if(result.success) {
                setUser({
                    authenticated: true,
                    token: localStorage.getItem('token'),
                    ...result.result.data
                });
                setLoading(false);
            } else {
                localStorage.removeItem('token');
                setUser({
                    authenticated: false,
                    token: ''
                });
                setLoading(false);
            }
        } else {
            setLoading(false);
        }
    }

    useEffect(() => {
        checkToken();
    },[]);

    if(loading) {
        return <div>Loading...</div>
    }

    return (
        <UserContext.Provider value={{user, setUser}}>
            <>
                <Navbar/>
                <div className="container mt-5 bg-light p-1">
                    <Routes>
                        <Route exact path="/" element={<Hello/>}></Route>
                        <Route exact path="/login" element={<Login/>}></Route>
                        <Route path="/users" element={<ListAllUsers/>}></Route>
                        <Route path="/tasks" element={<ListAllTasks/>}></Route>
                        <Route path="/vacations" element={<ListAllVacations/>}></Route>
                        <Route path="/departments" element={<ListAllDepartments/>}></Route>
                        <Route path="/complaints" element={<ListAllComplaints/>}></Route>
                        <Route path="/attendance" element={<ListAllAttendance/>}></Route>
                        <Route path="/myvacation" element={<MyVacation/>}></Route>
                        <Route path="/mycomplaints" element={<MyComplaints/>}></Route>
                        <Route path="/mytasks" element={<MyTasks/>}></Route>
                    </Routes>
                </div>
            </>
        </UserContext.Provider>
    );
}

export default App;
