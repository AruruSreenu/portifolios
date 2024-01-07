import "../Styles/Home.css";

import NavBar from "./NavBar";
import MainContent from "./MainContent";
import Project from "./Project";
import Form from "./Form";
import Contacts from "./Contact";
import vectorWave from "../Images/Vector.png";

const Home = () => {
  const projectsList = JSON.parse(localStorage.getItem("projects"));
  return (
    <>
      <div className="home-container">
        <NavBar />
        <MainContent />

        <div className="div-form-cotnainer">
          <h1 className="project-heading">Add Project</h1>
          <div className="project-heading-line"></div>

          <Form />
        </div>

        <div className="project-cotnainer">
          <h1 className="project-heading" id="project">
            Projects
          </h1>
          <div className="project-heading-line"></div>
          <Project projectsList={projectsList} />
          <Contacts />
        </div>
      </div>
      <img src={vectorWave} className="vector-wave" alt="vector" />
    </>
  );
};

export default Home;
