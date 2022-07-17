import './App.css';
import {
  Routes,
  Route,
}
  from 'react-router-dom';
import Hello from "./Components/Hello";
function App() {
  return (
    <div className="App">
        <Routes>
          <Route exact path='/' element={<Hello/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
