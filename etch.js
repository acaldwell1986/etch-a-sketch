const container = document.querySelector('.container');
const grid = document.querySelector('.grid');
const reset = document.querySelector('.reset');
const colorButtons = document.querySelectorAll('.option-buttons');
const sizeUI = document.querySelector('.size-button-label');
const colorPick = document.querySelector('.colorPicker');

let slider = document.getElementById("gridRange");
let gridSize = 100; // initializes grid at 40x40
let mouseColor = 'orange';

slider.addEventListener('mouseup', reDrawGrid, false);
slider.addEventListener('input', updateUI, false);

colorPick.addEventListener('input', colorPicker, false);

//allows user to change color type
function colorPicker(color) {
    mouseColor = color.target.value;   
}

//initializes the grid for starting
for (let i = 0; i < gridSize; i++) {
    const cell = document.createElement('div');
    grid.appendChild(cell);
    cell.classList.add('cell');

    //add numbers to cells for troubleshooting UI
    //cell.textContent = `${i}`;
    
    cell.addEventListener("mouseover", function(e) {
        e.target.style.background = mouseColor;       
    }, false);
}

//colorButtons.forEach(button => { button.addEventListener('click', colorPicker) });

function updateUI(size) {
    let newSize = parseInt(size.target.value);
    console.log(newSize);
    sizeUI.removeChild(sizeUI.firstElementChild)
    const sizeUpdate = document.createElement('span');
    sizeUpdate.textContent = `${newSize}x${newSize}`;
    sizeUI.appendChild(sizeUpdate)
}

reset.addEventListener('click', resetGrid);

function deleteGrid(parent) {
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
}

function reDrawGrid(size) {
    deleteGrid(grid);
    let newSize = parseInt(size.target.value);
    let frSize = 'auto';
    gridSize = newSize * newSize;
    
   

        for (let i = 0; i < gridSize; i++) {
            const cell = document.createElement('div');
            grid.appendChild(cell);
            cell.classList.add('cell');

            //add numbers to cells for troubleshooting UI
            //cell.textContent = `${i}`;

            cell.addEventListener("mouseover", function(e) {
                e.target.style.background = mouseColor;       
            }, false);
        };

        grid.style.gridTemplateColumns = ` repeat(${newSize}, ${frSize})`;
        grid.style.gridTemplateRows = ` repeat(${newSize}, ${frSize})`;
}

function resetGrid() {
    const cells = document.querySelectorAll('.cell');
    for (let i = 0; i < gridSize; i++) {
        cells[i].style.background = "white"
     }
}

