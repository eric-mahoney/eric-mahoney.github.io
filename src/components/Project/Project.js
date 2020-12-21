import React from "react";
import "./Project.css";
import SectionHeader from "../SectionHeader/SectionHeader";

function Project(props) {
  // props passed through Link state
  const image = props.location.state.image;
  const title = props.location.state.title;
  const description = props.location.state.description;
  const link = props.location.state.github;

  return (
    <div className="project-container">
      <div className="project-img-container">
        <img className="project-image" src={image} />
      </div>
      <div className="project-info">
        <h2 className="project-title">{title}</h2>
        <p className="project-description">{description}</p>
        <p className="project-link">
          <a href={link} target="_blank" rel="noreferrer">
            View Project
          </a>
        </p>
      </div>
    </div>
  );
}

export default Project;
