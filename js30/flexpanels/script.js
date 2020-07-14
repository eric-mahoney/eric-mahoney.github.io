// add an event listener to the document to listen for clicks
document.addEventListener("click", openPanel);

// open the panel when clicked
function openPanel(e) {
  // if we find an open panel, it will be closed
  if (document.querySelector(".open") != null) {
    document.querySelector(".open").classList.remove("open");
  }

  // if you clicked on a panel, the panel opens
  if (e.target.classList.contains("panel")) {
    e.target.classList.toggle("open");
  }
}
