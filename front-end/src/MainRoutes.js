import React from 'react'
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

import ListAllUsers from "./components/users/ListAllUsers";
import ListAllTasks from "./components/tasks/ListAllTasks";
import ListAllVacations from "./components/vacations/ListAllVacations";
import ListAllDepartments from "./components/departments/ListAllDepartments";
const MainRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-5 bg-info p-1">
        <Routes>
         
          <Route path="/users" element={<ListAllUsers />}/>
          <Route path="/tasks" element={<ListAllTasks />}/>
          <Route path="/vacations" element={<ListAllVacations />}/>
          <Route path="/departments" element={<ListAllDepartments />}/>
        </Routes>
      </div>
    </>
  );
}

export default MainRoutes