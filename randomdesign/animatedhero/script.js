var timeline = gsap.timeline({ repeat: -1 });

timeline.fromTo(".hero-text", { y: "50px", opacity: 0 }, { y: "0px", opacity: 1, stagger: 0.5 }, "+=1");

timeline.to(".hero-text", { opacity: 0 }, "+=1");

timeline.fromTo(".reveal-box", 0.1, { opacity: 0 }, { opacity: 1 });

timeline.to(".reveal-box", 0.2, { width: "100%" }, "+=.5");
timeline.to(".reveal-box", { right: "0" });
timeline.to(".reveal-box", 0.2, { width: "0%" });
timeline.fromTo(".hero-text2", { opacity: 0 }, { opacity: 1 }, "-=.5");
timeline.to(".reveal-box", 0, { backgroundColor: "black" });
timeline.to(".reveal-box", 0.2, { width: "100%" }, "+=2");
