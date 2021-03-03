var timeline = [];
var listening = false;

function playSound(sound) {
  if (listening == true) {
    addTimeline(sound);
  }
  const audioFile = document.getElementById(sound); // get the sound file
  audioFile.currentTime = 0; // set the time to the beginning of the file
  audioFile.play(); // play the sound
}

// adds event listeners to listen to the keys to play the correct sound
document.addEventListener("keydown", function (e) {
  switch (e.keyCode) {
    case 81:
      playSound("boom");
      break;
    case 87:
      playSound("clap");
      break;
    case 69:
      playSound("hihat");
      break;
    case 82:
      playSound("kick");
      break;
    case 84:
      playSound("openhat");
      break;
    case 89:
      playSound("ride");
      break;
    case 85:
      playSound("snare");
      break;
    case 73:
      playSound("tink");
      break;
    case 79:
      playSound("tom");
      break;
  }
});

// starts the timeline to listen to drums
function startTimeline() {
  document.getElementById("listening").classList.remove("hidden");
  listening = true;
}

// stops the timeline from listening to drums
function stopTimeline() {
  document.getElementById("listening").classList.add("hidden");
  listening = false;
}

// adds to the timeline array and to the DOM
function addTimeline(sound) {
  timeline.push(sound);
  const item = document.createElement("p");
  item.innerHTML = sound;
  document.getElementById("timeline").appendChild(item);
}

// function that plays everything from the timeline array
function playTimeline() {
  stopTimeline();
  for (let i = 0; i < timeline.length; i++) {
    setTimeout(function () {
      playSound(timeline[i]);
    }, 500 * i);
  }
}

function clearTimeline() {
  timeline = [];
  document.getElementById("timeline").innerHTML = "";
}
