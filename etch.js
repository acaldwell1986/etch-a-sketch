const container = document.querySelector('.container');
const grid = document.querySelector('.grid');
const reset = document.querySelector('.reset-panel');


let gridSize = 16;
let mouseColor = 'orange';


function colorPicker(color) {
    if (color === 'orange') {
        mouseColor = 'orange';
    }
    else if (mouseColor ==='blue') {
        mouseColor = 'blue'
    }
}



for (let i = 0; i < 1600; i++) {
    const cell = document.createElement('div');
    grid.appendChild(cell);
    cell.classList.add('cell');
    //cell.textContent = `${i}`; - populates cells with numbers for quick ref
    
    
    cell.addEventListener("mouseover", function(e) {
        e.target.style.background = "orange";

        setTimeout(function() {
            e.target.style.background = "red";
        }, 1000);
    }, false);
}

const cells = document.querySelectorAll('.cell');

function resetGrid() {
    for (let i = 0; i < 1600; i++) {
        cells[i].style.background = "white"
     }
}

reset.addEventListener('click', resetGrid);





//remove marks in grid -- set with timer at the moment
// setTimeout(function() {
//     for (let i = 0; i < 1600; i++) {
//        cells[i].style.background = "white"
//     }
// }, 5000);