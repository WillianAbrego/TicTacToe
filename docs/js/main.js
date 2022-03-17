const board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

let turn = 0; //0 = user, 1= pc
const boarContainer = document.querySelector("#board");
const playerDiv = document.querySelector("#player");

renderBoard();
function renderBoard() {
  const html = board.map((row) => {
    const cells = row.map((cell) => {
      return `<button class="cell">${cell}</button>`;
    });
    return `<div class="row">${cells.join("")}</div>`;
  });
  boarContainer.innerHTML = html.join("");
}
