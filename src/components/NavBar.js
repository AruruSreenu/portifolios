import { Link } from "react-router-dom";
import "../Styles/Navbar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <p>Sreenu Aruru</p>
      </div>
      <div className="navbar-right">
        <a href="#">About</a>
        <a href="#">Project</a>
        <a href="#">Contacts</a>
      </div>
    </nav>
  );
};

export default NavBar;
