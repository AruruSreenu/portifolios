import "../Styles/MainContent.css";

const MainContent = () => {
  return (
    <div className="main-conten-container" id="about">
      <p className="web-text">Web Developer</p>
      <h1 className="main-content-heading">Hello, my name is Sreenu Aruru</h1>
      <p className="about-text">
        I Learn different techonologies like html, css, js, React Typscript I do
        different website clone like flikart and Yalantis.
      </p>
      <div className="button-container">
        <a
          href="https://github.com/AruruSreenu?tab=repositories"
          target="_blank"
          className="project-button"
        >
          Projects
        </a>
        <button className="linked-button">LinkedIn</button>
      </div>
    </div>
  );
};

export default MainContent;
