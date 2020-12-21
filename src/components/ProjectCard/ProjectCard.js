import React from "react";
import "./ProjectCard.css";
import WarzoneImg from "../../images/projects/warzoneroulette.png";

class ProjectCard extends React.Component {
  render() {
    return (
      <div class="project card">
        <img class="project__img" src={this.props.image}></img>
        <div class="project__info">
          <h3 class="project__name">{this.props.title}</h3>
          <p class="project__description">{this.props.description}</p>
          <ul class="project__tech">
            {this.props.technologies.map((tech) => {
              return <li>{tech}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  }
}
export default ProjectCard;
