import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";


import MainRoutes from "./MainRoutes";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route  path="*" element={<MainRoutes/>}></Route>
      </Routes>
    </>
  );
}

export default App;
