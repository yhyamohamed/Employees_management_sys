import "./App.css";
import { Routes, Route } from "react-router-dom";
import Hello from "./components/Hello";
import Navbar from "./components/Navbar"


function App() {
  return (
    <>
      <Navbar />
      <div className="container mt-5 bg-light p-1">
        <Routes>
          <Route exact path="/" element={<Hello />}></Route>
        
        </Routes>
      </div>
    </>
  );
}

export default App;
