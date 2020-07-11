function updateBoxShadow() {
  const xOffset = document.getElementById("xOffsetSlider").value;
  const yOffset = document.getElementById("yOffsetSlider").value;
  const blur = document.getElementById("blurSlider").value;
  const color = document.getElementById("colorSlider").value;
  const card = document.getElementById("sample-card");
  const output = document.getElementById("box-shadow-output");
  const css = `${xOffset}px ${yOffset}px ${blur}px ${color}`;

  console.log(css);

  card.style.boxShadow = css;

  output.innerHTML = "box-shadow: " + css + ";";
}

const inputs = document.querySelectorAll("input");

inputs.forEach((input) => input.addEventListener("change", updateBoxShadow));
inputs.forEach((input) => input.addEventListener("mousemove", updateBoxShadow));
document.getElementById("colorSlider").addEventListener("mousedown", updateBoxShadow);
