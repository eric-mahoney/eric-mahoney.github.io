function updateBoxShadow() {
  const xAxis = document.getElementById("xAxisSlider").value;
  const yAxis = document.getElementById("yAxisSlider").value;
  const blur = document.getElementById("blurSlider").value;
  const color = document.getElementById("colorSlider").value;
  const card = document.getElementById("sample-card");
  const output = document.getElementById("box-shadow-output");
  const css = `${xAxis}px ${yAxis}px ${blur}px ${color}`;

  card.style.boxShadow = css;

  output.innerHTML = "box-shadow: " + css + ";";
}
