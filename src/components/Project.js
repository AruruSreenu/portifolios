import React from "react";
import "../Styles/Project.css";

const Project = ({ projectsList }) => {
  const projects = projectsList || [];

  return (
    <div>
      {projects.map((eachItem, index) => (
        <div key={eachItem.id} className="projects-container">
          <div className="project-inner-container">
            <h1 className="project-inner-heading">{eachItem.name}</h1>
            <p className="project-description">{eachItem.description}</p>
            <button className="view-project-button">View Project</button>
          </div>
          <div
            className={`project-img-container ${
              index % 2 === 0 ? "even" : "odd"
            }`}
          >
            <img
              className={`project-img ${
                index % 2 === 0 ? "evenImage" : "oddImage"
              }`}
              src={eachItem.imagePath}
              alt={eachItem.name}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;
