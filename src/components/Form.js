import { useState, useEffect } from "react";
import "../Styles/Form.css";
import { v4 as uuidv4 } from "uuid";
import imagesList from "../assets/ImageList";

const Form = () => {
  const [project, setProject] = useState({
    name: "",
    link: "",
    description: "",
  });
  const [selectedImagePath, setSelectedImagePath] = useState("");

  useEffect(() => {
    const randomImagePath =
      imagesList[Math.floor(Math.random() * imagesList.length)];
    setSelectedImagePath(randomImagePath);
  }, []);

  const [projectsList, setProjectsList] = useState(
    JSON.parse(localStorage.getItem("projects")) || []
  );

  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projectsList));
  }, [projectsList]);

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const newProject = {
      id: uuidv4(),
      imagePath: selectedImagePath,
      name: project.name,
      link: project.link,
      description: project.description,
    };

    setProjectsList((prevProjectsList) => [...prevProjectsList, newProject]);
    window.location.reload();
    setProject({
      name: "",
      link: "",
      description: "",
    });
  };

  const handleInputChanges = (event) => {
    const { name, value } = event.target;

    setProject({
      ...project,
      [name]: value,
    });
  };

  return (
    <form className="form-container" onSubmit={formSubmitHandler}>
      <label className="input-lable" htmlFor="name">
        Project Name
      </label>

      <input
        id="name"
        name="name"
        value={project.name}
        onChange={handleInputChanges}
        className="form-input"
        type="text"
      />

      <label className="input-lable" htmlFor="link">
        Project Link
      </label>

      <input
        id="link"
        name="link"
        value={project.link}
        onChange={handleInputChanges}
        className="form-input"
        type="text"
      />

      <label className="input-lable" htmlFor="description">
        Description
      </label>

      <textarea
        id="description"
        name="description"
        value={project.description}
        onChange={handleInputChanges}
        className="form-input special-input"
      />

      <button type="submit" className="add-button">
        Add
      </button>
    </form>
  );
};

export default Form;
