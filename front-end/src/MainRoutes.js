import React from 'react'
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";


import ListAllUsers from "./components/users/ListAllUsers";
import ListAllTasks from "./components/tasks/ListAllTasks";
import ListAllVacations from "./components/vacations/ListAllVacations";
import ListAllDepartments from "./components/departments/ListAllDepartments";
import MyVacation from "./components/vacations/MyVacation";
import MyTasks from "./components/tasks/MyTasks";
import MyComplaints from "./components/complaints/MyComplaints";

import ListAllAttendance from "./components/attendance/ListAllAtendance";
import ListAllLeave from "./components/leave/ListAllLeave";
import ListAllOvertime from "./components/overtime/ListAllOvertime";
import MyAttendance from "./components/attendance/MyAttendance";
import MyLeave from "./components/leave/MyLeave";
import MyOvertime from "./components/overtime/MyOvertime";

import ListAllComplaints from "./components/complaints/ListAllComplaints";
const MainRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-5 bg-info p-1">
        <Routes>
          
          <Route path="/users" element={<ListAllUsers />} />
          <Route path="/tasks" element={<ListAllTasks />} />
          <Route path="/vacations" element={<ListAllVacations />} />
          <Route path="/departments" element={<ListAllDepartments />} />

          <Route path="/complaints" element={<ListAllComplaints />}></Route>
          <Route path="/attendance" element={<ListAllAttendance />}></Route>
          <Route path="/leave" element={<ListAllLeave />}></Route>
          <Route path="/over-time" element={<ListAllOvertime />}></Route>
          <Route path="/myovertime" element={<MyOvertime />}></Route>
          <Route path="/myattendance" element={<MyAttendance />}></Route>
          <Route path="/myleave" element={<MyLeave />}></Route>
          <Route path="/myvacation" element={<MyVacation />}></Route>
          <Route path="/mycomplaints" element={<MyComplaints />}></Route>
          <Route path="/mytasks" element={<MyTasks />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default MainRoutes