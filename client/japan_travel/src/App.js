import { Routes, Route, Link } from "react-router-dom"
import './App.css';
import  Home  from './views/Home/'

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
