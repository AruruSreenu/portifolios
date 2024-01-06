import "../Styles/Project.css";
import filkart from "../Images/flikartClone.png";

const Project = () => {
  return (
    <div className="projects-container">
      <div className="project-inner-container">
        <h1 className="project-inner-heading">Project Name</h1>
        <p className="project-description">
          I created this personal project in order to show how to create an
          interface in Figma using a portfolio as an example.
        </p>
        <button className="view-project-button">View Project</button>
      </div>
      <div className="project-img-container">
        <img className="project-img" src={filkart} />
      </div>
    </div>
  );
};

export default Project;
