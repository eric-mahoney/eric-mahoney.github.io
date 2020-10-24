function simDice() {
  return Math.ceil(Math.random() * 6);
}

function generateDice() {
  const num = document.getElementById("dice-num").value;
  const container = document.getElementById("dice-container");
  container.innerHTML = "";
  for (var i = 0; i < num; i++) {
    let newDice = document.createElement("div");
    let num = simDice();
    newDice.innerHTML = `<img class="dice-img" src="/dice/dice-images/${num}.png">`;
    newDice.classList.add("dice-roll");
    container.appendChild(newDice);
  }
}

document.getElementById("dice-num").addEventListener("change", () => {
  generateDice();
});
