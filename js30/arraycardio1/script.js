var arr = [];

function deleteItem(item) {
  arr.splice(item, item);
}

function addToArray() {
  // get the value of the input
  const input = document.getElementById("add-input").value;

  // create the container to contain the button and the text
  const container = document.createElement("div");
  container.className = "array-item";
  container.setAttribute("data-id", arr.length);

  // create the button to delete the element
  const button = document.createElement("button");
  button.innerHTML = "x";
  button.className = "array-btn";
  button.onclick = function () {
    deleteItem(arr.length - 1);
  };
  container.appendChild(button);

  // create a new element to add to the DOM
  const newItem = document.createElement("p");
  newItem.innerHTML = arr.length + " " + input;
  container.appendChild(newItem);

  // add the item to the array
  arr.push(input);

  // add the new element to the parent container
  document.getElementById("array-container").appendChild(container);

  // output to console
  console.log("added new item: ", input);
  console.log(arr);
}
