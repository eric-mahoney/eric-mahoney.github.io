function getTime() {
  return new Date();
}

function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
}

function setTime() {
  document.getElementById("full-time").innerHTML = getTime();
  document.getElementById("hour-min-time").innerHTML = formatAMPM(getTime());
  setAnalog(getTime());
}

function setAnalog(date) {
  var seconds = date.getSeconds();
  var minutes = date.getMinutes();
  var hours = date.getHours();
  hours = hours % 12;
  hours = hours ? hours : 12;
  hours = (hours / 12) * 360 - 180;
  minutes = (minutes / 60) * 360 - 180;
  seconds = (seconds / 60) * 360 - 180;
  document.getElementById("hour-hand").style.transform = `rotate(${hours}deg)`;
  document.getElementById("minute-hand").style.transform = `rotate(${minutes}deg)`;
  document.getElementById("second-hand").style.transform = `rotate(${seconds}deg)`;
}

setInterval(setTime, 1000);
