const container = document.querySelector('.container');
const grid = document.querySelector('.grid');
const reset = document.querySelector('.reset-panel');
const colorButtons = document.querySelectorAll('.option-buttons')

let gridSize = 1600;
let mouseColor = 'orange';

console.log(colorButtons)

function colorPicker(color) {
    mouseColor = color.target.textContent;

    if (color === 'orange') {
        mouseColor = 'orange';
    }
    else if (mouseColor ==='blue') {
        mouseColor = 'blue'
    }
}


for (let i = 0; i < gridSize; i++) {
    const cell = document.createElement('div');
    grid.appendChild(cell);
    cell.classList.add('cell');
    //cell.textContent = `${i}`; - populates cells with numbers for quick ref
    
    
    cell.addEventListener("mouseover", function(e) {
        e.target.style.background = mouseColor;

        setTimeout(function() {
            e.target.style.background = "red";
        }, 1000);
    }, false);
}

const cells = document.querySelectorAll('.cell');

function resetGrid() {
    for (let i = 0; i < gridSize; i++) {
        cells[i].style.background = "white"
     }
}


colorButtons.forEach(button => { button.addEventListener('click', colorPicker) });

reset.addEventListener('click', resetGrid);

function newGridSize(size) {
    let newSize = size * size;
    
    console.log(gridSize);
    const cells = document.querySelectorAll('div.cell')

    if (newSize === gridSize) {
        
    }
}




//remove marks in grid -- set with timer at the moment
// setTimeout(function() {
//     for (let i = 0; i < 1600; i++) {
//        cells[i].style.background = "white"
//     }
// }, 5000);