function updateBoxShadow() {
  const xAxis = document.getElementById("xAxisSlider").value;
  const yAxis = document.getElementById("yAxisSlider").value;
  const blur = document.getElementById("blurSlider").value;
  const color = document.getElementById("colorSlider").value;
  const card = document.getElementById("sample-card");
  const output = document.getElementById("box-shadow-output");

  card.style.boxShadow = `${xAxis}px ${yAxis}px ${blur}px ${color}`;

  output.innerHTML = card.style.boxShadow;
}
