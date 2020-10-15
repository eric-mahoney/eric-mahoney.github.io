gsap.to(".bubble--container", 20, {
  rotation: 360,
  transformOrigin: "left 50%",
  repeat: -1,
  ease: "none",
});

var quotes = [
  '"Thank you so much for all of your help with everything!',
  '"Hands down the best support I have ever received."',
  '"The best service I have ever received!"',
  '"We could not have done it without you!"',
  '"Beyond grateful for the service I received!"',
  '"A wonderful experience all around!"',
];

var previousInt = 0;

function animateOut() {
  gsap.fromTo(".text", 2, { opacity: 1 }, { opacity: 0 });
}

function animateIn() {
  gsap.fromTo(".text", 2, { opacity: 0 }, { opacity: 1 });
}

// returns a random integer for the quote randomizer
function getRandomInt() {
  var randomInt = Math.floor(Math.random() * quotes.length);
  return randomInt;
}

function handleAnimation() {
  var randomInt = getRandomInt();

  // prevents the new quote from being the same as the previous quote
  while (randomInt == previousInt) {
    randomInt = getRandomInt();
  }

  previousInt = randomInt;

  // fades the animation out after a second
  setTimeout(() => {
    animateOut();
  }, 1000);

  // changes the text of the quote after 2.8 seconds
  setTimeout(() => {
    document.querySelector(".text").innerHTML = quotes[randomInt];
  }, 2800);

  // fades the quote back in after 3 seconds
  setTimeout(() => {
    animateIn();
  }, 3000);
}

// changes the quote every 7 seconds
setInterval(handleAnimation, 7000);
