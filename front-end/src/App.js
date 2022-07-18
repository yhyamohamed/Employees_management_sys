import "./App.css";
import { Routes, Route } from "react-router-dom";
import Hello from "./components/Hello";
import Navbar from "./components/Navbar"
import ListAllUsers from "./components/users/ListAllUsers";
import ListAllTasks from "./components/tasks/ListAllTasks";


function App() {
  return (
    <>
      <Navbar />
      <div className="container mt-5 bg-light p-1">
        <Routes>
          <Route exact path="/" element={<Hello />}></Route>
          <Route  path="/users" element={<ListAllUsers />}></Route>
          <Route  path="/tasks" element={<ListAllTasks />}></Route>

        </Routes>
      </div>
    </>
  );
}

export default App;
