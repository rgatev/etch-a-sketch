const container = document.querySelector(".container");
const wrapper = document.querySelector(".wrapper");
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");

function inputGrid() {
  btn2.addEventListener("click", reset);

  btn1.addEventListener("click", () => {
    let input = prompt("Select number of squares");

    for (let col = 0; col < input; col++) {
      // outer loop for col
      let gridCol = document.createElement("div");
      gridCol.className = `col-${col + 1}`;
      container.appendChild(gridCol);

      for (var row = 0; row < input; row++) {
        //inner loop for row
        let gridSquare = document.createElement("div");
        gridSquare.className = `square square-${row + 1}`;

        gridSquare.style.border = "1px solid black";
        gridSquare.style.boxSizing = "border-box";

        let style = window.getComputedStyle(container);
        let width = style.getPropertyValue("width");
        let height = style.getPropertyValue("height");

        width = parseFloat(width);
        height = parseFloat(height);

        let square = Math.fround((width + height) / input / 2) + "px"; //calculates the width and height of the square

        gridSquare.style.width = square;
        gridSquare.style.height = square;

        gridCol.appendChild(gridSquare);
      }

      btn1.addEventListener("click", () => {
        if (inputGrid) {
          gridCol.innerHTML = "";
        }
      });
    }
    if (input < 2 || input > 100) {
      alert("Input must be between 1 and 100");
      container.innerHTML = "";
      return;
    }
    mouseHover();
  });

  function mouseHover() {
    let squares = document.querySelectorAll(`.container .square`);
    squares.forEach(function (square) {
      square.addEventListener("mouseover", function () {
           square.style.backgroundColor = btn3.value;
      });
    });
  }
}

function reset() {
  container.innerHTML = "";
}

inputGrid();
