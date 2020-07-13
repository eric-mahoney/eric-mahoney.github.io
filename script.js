/*
 * ABOUT SECTION GSAP


// initialize scrollmagic controller
var intCont = new ScrollMagic.Controller();

// initialize gsap timeline
var intTl = new TimelineMax();

// gsap animations
intTl.from(
  ".about-left",
  1,
  {
    opacity: 0,
    x: "-100px",
  },
  0
);

intTl.from(
  ".about-right",
  1,
  {
    opacity: 0,
    x: "100px",
  },
  0
);

var intScene = new ScrollMagic.Scene({
  triggerElement: ".section--about",
})
  .setTween(intTl)
  .addTo(intCont);

   */

/*
 * WORK SECTION GSAP


// initialize scrollmagic controller
var workCont = new ScrollMagic.Controller();

// initialize gsap timeline
var workTl = new TimelineMax();

// select all the jobs
var jobs = document.querySelectorAll(".job");

// gsap animations
workTl.from(jobs, 1, {
  opacity: 0,
  x: "-100px",
  stagger: 0.5,
});

// initialize scene
var workScene = new ScrollMagic.Scene({
  triggerElement: ".section--work",
  triggerHook: 0.5,
  reverse: false,
})
  .setTween(workTl)
  .addTo(workCont);

   */

/*
 * PROJECT SECTION GSAP

// initialize scrollmagic controller
var projCont = new ScrollMagic.Controller();

// initialize gsap timeline
var projTl = new TimelineMax();

// select all the jobs
var projects = document.querySelectorAll(".project");

// gsap animations
projTl.from(projects, 0.5, {
  opacity: 0,
  x: "-100px",
  stagger: 0.5,
});

// initialize scene
var projScene = new ScrollMagic.Scene({
  triggerElement: ".section--project",
  triggerHook: 0.5,
  reverse: false,
})
  .setTween(projTl)
  .addTo(projCont);

   */

/*
 * SKILLS SECTION GSAP

// initialize scrollmagic controller
var skillCont = new ScrollMagic.Controller();

// initialize gsap timeline
var skillTl = new TimelineMax();

// select all the jobs
var skills = document.querySelectorAll(".skills-container");

// gsap animations
skillTl.from(skills, 2, {
  opacity: 0,
});

// initialize scene
var skillScene = new ScrollMagic.Scene({
  triggerElement: ".section--skills",
  triggerHook: 0.5,
  reverse: false,
})
  .setTween(skillTl)
  .addTo(skillCont);

   */

/*
 * SKILLS SECTION GSAP

// initialize scrollmagic controller
var connectCont = new ScrollMagic.Controller();

// initialize gsap timeline
var connectTl = new TimelineMax();

// select all the jobs
var icons = document.querySelector(".icon-container");

// gsap animations
connectTl.from(icons, 2, {
  opacity: 0,
});

// initialize scene
var connectScene = new ScrollMagic.Scene({
  triggerElement: ".section--connect",
  triggerHook: 0.8,
  reverse: false,
})
  .setTween(connectTl)
  .addTo(connectCont);
 */
