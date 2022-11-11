import "./App.css";
import Home from "./Home";
import { Routes, Route, Link } from "react-router-dom";
import AddUser from "./AddUser";
import EditUser from "./EditUser";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adduser" element={<AddUser />} />
        <Route path="/editUser/:index" element={<EditUser />} />
      </Routes>
    </div>
  );
}

export default App;
