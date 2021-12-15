const container = document.querySelector('.container');
const grid = document.querySelector('.grid');
const reset = document.querySelector('.reset-panel');
const colorButtons = document.querySelectorAll('.option-buttons');
const sizeButtons = document.querySelectorAll('.size-buttons');

let slider = document.getElementById("gridRange");

let gridSize = 2500;
let mouseColor = 'orange';

//slider.addEventListener('input', reDrawGrid, false);

//allows user to change color type
function colorPicker(color) {
    mouseColor = color.target.textContent;

    if (color === 'orange') {
        mouseColor = 'orange';
    }
    else if (mouseColor ==='blue') {
        mouseColor = 'blue'
    }
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

colorButtons.forEach(button => { button.addEventListener('click', colorPicker) });

reset.addEventListener('click', resetGrid);

function deleteGrid(parent) {
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
}

function reDrawGrid(size) {
    let newSize = size.target.id;
    gridSize = newSize * newSize;
    deleteGrid(grid);
    
    if (newSize === '15') {
        
        for (let i = 0; i < gridSize; i++) {
            const cell = document.createElement('div');
            grid.appendChild(cell);
            cell.classList.add('cell');
            cell.addEventListener("mouseover", function(e) {
                e.target.style.background = mouseColor;       
            }, false);
        }
        grid.style.cssText = "grid-template-columns: repeat(15, 40px);grid-template-rows: repeat(15, 40px);";
    }

    else if (newSize === '25') {
            for (let i = 0; i < gridSize; i++) {
                const cell = document.createElement('div');
                grid.appendChild(cell);
                cell.classList.add('cell');
                cell.addEventListener("mouseover", function(e) {
                    e.target.style.background = mouseColor;       
                }, false);
            }
            grid.style.cssText = "grid-template-columns: repeat(25, 25px);grid-template-rows: repeat(25, 25px);";
        }

    else {
        for (let i = 0; i < gridSize; i++) {
            const cell = document.createElement('div');
            grid.appendChild(cell);
            cell.classList.add('cell');
            cell.addEventListener("mouseover", function(e) {
                e.target.style.background = mouseColor;       
            }, false);
        }
        grid.style.cssText = "grid-template-columns: repeat(40, 15px);grid-template-rows: repeat(40, 15px);";
    }
}

function resetGrid() {
    const cells = document.querySelectorAll('.cell');
    for (let i = 0; i < gridSize; i++) {
        cells[i].style.background = "white"
     }
}

sizeButtons.forEach(button => { button.addEventListener('click', reDrawGrid)});

