import React from "react";
import "./ExperienceCard.css";

class ExperienceCard extends React.Component {
  render() {
    return (
      <div class="skills-column">
        <h3 class="skills__header">{this.props.header}</h3>
        <ul class="skills__experience">
          {this.props.technologies.map((tech) => {
            return <li>{tech}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default ExperienceCard;
