import "../Styles/Home.css";

import NavBar from "./NavBar";
import MainContent from "./MainContent";
import Project from "./Project";
import Form from "./Form";
import Contacts from "./Contact";

const Home = () => {
  return (
    <div className="home-container">
      <NavBar />
      <MainContent />

      <div className="div-form-cotnainer">
        <h1 className="project-heading">Add Project</h1>
        <dvi className="project-heading-line"></dvi>

        <Form />
      </div>

      <div className="project-cotnainer">
        <h1 className="project-heading">Projects</h1>
        <dvi className="project-heading-line"></dvi>
        <Project />
        <Contacts />
      </div>
    </div>
  );
};

export default Home;
