// Selecting starting id where the grid will be placed and managed

const container = document.querySelector("#container");

// Setting the starting size of the grid, 16x16

let gridSize = 16;

// Function to create the grid and keeping it the the same exact size no matter how many squares

function createGrid() {
  container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  for (let i = 0; i < gridSize * gridSize; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

// Creates a hover effect so that the grid divs change color when your mouse passes over them

    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = "turquoise";
    });
    container.appendChild(square);
  }
}

// Function for the user to chose the size of the grid and to keep the size of the grid below 100x100

function createNewGrid() {
  let newSize = prompt("Enter new grid size (max: 100):");
  if (newSize >= 1 && newSize <= 100) {
    gridSize = parseInt(newSize);
    container.innerHTML = "";
    createGrid();
  } else {
    alert("Please enter a number between 1 and 100.");
  }
}

createGrid();