import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Adduser from "./component/Adduser";
import Home from "./component/Home.js/Home";
import UpdateingUser from "./component/UpdateingUser/UpdateingUser";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/add" element={<Adduser />} />
        <Route path="/update/:id" element={<UpdateingUser />} />
      </Routes>
    </div>
  );
}

export default App;
