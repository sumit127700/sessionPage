import logo from "./logo.svg";
import "./App.css";
import GateSessionCard from "./component/SessionCard.js";
import Navbar from "./component/Navbar.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <GateSessionCard
        name="Ayush Adhikari"
        handle="@Aerospace Engineer"
        degree="M.Tech"
        avatarUrl="https://www.shutterstock.com/image-photo/passport-photo-portrait-woman-on-260nw-2438031869.jpg"
        sessionDuration="45 min"
        sessionTitle="Should you do GATE after Btech?"
        sessionDescription="Join the session to know about tips and strategies to prepare for GATE Exam."
        seatsBooked={9}
        startDate="13/07/2024 08:30 PM"
        backgroundImageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlygWcz51gyDexlstejSgZZ2LSxqF4rBz3wQ&s"
      />
    </div>
  );
}

export default App;
