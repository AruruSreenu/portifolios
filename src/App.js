// import Home from "./components/Home";
import "./App.css";
import Home from "./components/Home";
import profile from "./Images/image.png";

function App() {
  return (
    <div className="app-container">
      <img className="profile-image" src={profile} alt="profile-image" />
      <Home />
    </div>
  );
}

export default App;
