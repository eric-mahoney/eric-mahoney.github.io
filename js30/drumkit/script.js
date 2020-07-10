function playSound(sound) {
  const audioFile = document.getElementById(sound); // get the sound file
  audioFile.currentTime = 0; // set the time to the beginning of the file
  audioFile.play(); // play the sound
}
