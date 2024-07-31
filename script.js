const container = document.querySelector(".container");
const gridCol = document.createElement("div");

function inputGrid() {
  let input = parseInt(prompt("Select number of squares"));

  for (let row = 0; row < input; row++) {
    const gridRow = document.createElement("div");
    gridRow.className = "row";
    container.appendChild(gridRow);

    for (let col = 0; col < input; col++) {
      const gridSquare = document.createElement("div");
      gridSquare.className = "square";
      gridRow.appendChild(gridSquare);
    }
  }
}

inputGrid();
