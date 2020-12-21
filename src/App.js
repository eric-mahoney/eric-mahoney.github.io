import "./App.css";

// dependency imports
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// component imports
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Project from "./components/Project/Project";

function App() {
  const professionalExperience = ["Angular", "Ionic", "Firebase", "JavaScript", "CSS", "HTML", "Git", "GitHub", "GitLab"];
  const personalExperience = ["React", "Django", "Bootstrap", "GSAP", "ScrollMagic", "Materialize CSS"];

  return (
    <div class="main-container">
      <Router>
        <Navbar />
        <Route path="/" exact component={Home} />
        <Route path="/project/:id" component={Project} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
