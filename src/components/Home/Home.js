import "./Home.css";

// dependency imports
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// images
import warzoneImg from "../../images/projects/warzoneroulette.png";
import glanceImg from "../../images/projects/glance.png";
import shipperImg from "../../images/projects/shipper.png";
import introImg from "../../images/me.png";

// imports
import Project from "../Project/Project";
import ProjectCard from "../ProjectCard/ProjectCard";
import SectionHeader from "../SectionHeader/SectionHeader";
import ExperienceCard from "../ExperienceCard/ExperienceCard";

function Home() {
  // experience section
  const professionalExperience = ["Angular", "Ionic", "Firebase", "JavaScript", "CSS", "HTML", "Git", "GitHub", "GitLab"];
  const personalExperience = ["React", "Django", "Bootstrap", "GSAP", "ScrollMagic", "Materialize CSS"];

  // project section
  const glanceTech = ["JavaScript", "CSS", "HTML"];
  const shipperTech = ["Django", "Bootstrap"];
  const warzoneTech = ["Angular", "Firebase"];

  return (
    <div id="home" className="home-container">
      <section id="intro" className="intro-section">
        <SectionHeader
          image={true}
          imageUrl={introImg}
          header="Hi, I'm Eric"
          description="I am a junior software developer with 2 years of experience in Front-End Development. Currently looking for opportunities in the Washington, D.C. metro area."
        />
      </section>
      <section id="skills" className="skills-section">
        <SectionHeader
          image={false}
          header="My Skills"
          description="Here are the tools and technologies that I have experience with professionally and personally. Personal experience includes coursework, groupwork, and personal time spent using the technology."
        />
        <div className="skills-container">
          <ExperienceCard header="Professional Experience" technologies={professionalExperience} />
          <ExperienceCard header="Personal Experience" technologies={personalExperience} />
        </div>
      </section>
      <section id="projects" className="project-section">
        <SectionHeader image={false} header="How I Stay Busy" description="I'm always pursuing a new project or learning a new technology. Here is a few that I've spent some time on." />
        <div className="project-container">
          <Link
            to={{
              pathname: "/project/glance",
              state: {
                title: "Glance",
                description: "A user dashboard developed to give users the information they need at a glance.",
                image: glanceImg,
                github: "https://github.com/eric-mahoney/glance",
              },
            }}
          >
            <ProjectCard
              link="https://github.com/eric-mahoney/glance"
              image={glanceImg}
              title="Glance"
              description="A user dashboard developed to give users the information they need at a glance."
              technologies={glanceTech}
            />
          </Link>
          <Link
            to={{
              pathname: "/project/shipper",
              state: {
                title: "Shipper",
                description: "An open-source order management system built for companies to easily handle the state of customer orders.",
                image: shipperImg,
                github: "https://github.com/eric-mahoney/Shipper",
              },
            }}
          >
            <ProjectCard
              link="https://github.com/eric-mahoney/Shipper"
              image={shipperImg}
              title="Shipper"
              description="An open-source order management system built for companies to easily handle the state of customer orders."
              technologies={shipperTech}
            />
          </Link>
          <Link
            to={{
              pathname: "/project/warzone-roulette",
              state: {
                title: "Warzone Roulette",
                description: "Community-sourced strategy web app for popular Call of Duty mode: Warzone. Developed to help players find more ways to have fun.",
                image: warzoneImg,
                github: "https://gitlab.com/2bois/warzone-roulette",
              },
            }}
          >
            <ProjectCard
              link="https://gitlab.com/2bois/warzone-roulette"
              image={warzoneImg}
              title="Warzone Roulette"
              description="Community-sourced strategy web app for popular Call of Duty mode: Warzone. Developed to help players find more ways to have fun."
              technologies={warzoneTech}
            />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
