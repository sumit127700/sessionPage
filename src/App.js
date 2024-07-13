import logo from "./logo.svg";
import "./App.css";
import GateSessionCard from "./component/SessionCard.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar.js";
import SessionList from "./component/SessionList.js";

function App() {
  return (
    <div className="App">
      <div className="navbar-container">
        <Navbar />
      </div>
      <Router>
        <Routes>
          <Route path="/" element={<SessionList />} />
          <Route path="/:sessionId" element={<SessionList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
