const grid = document.getElementById("grid");
const blackBtn = document.querySelector('.blackBtn');
const rgbBtn = document.querySelector('.rgbBtn');
const restart = document.querySelector('.restart-btn');
const resize = document.getElementById('resize');



defaultGrid(16, 16);
//Create the grid 
function defaultGrid(col, rows) {
    //Setting css vars
    grid.style.setProperty('--grid-rows', rows);
    grid.style.setProperty('--grid-cols', col);

    for (let i = 0; i < (col * rows); i++) {
        const cell = document.createElement("div");
        grid.appendChild(cell).className = 'box';

    }
    // so that it always starts with the black trails pixels
    blackColor();
}



//Event listeners for the colors buttons
blackBtn.addEventListener('click', blackColor);
rgbBtn.addEventListener('click', rgbColor);

// Func for black color
function blackColor(e) {
    const boxs = grid.querySelectorAll('.box');
    boxs.forEach(box => box.addEventListener('mouseover', () => {
        box.style.background = 'black';
    }))

}

//Func for rgb color
function rgbColor(e) {
    const boxs = grid.querySelectorAll('.box');
    boxs.forEach(box => box.addEventListener('mouseover', () => {
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);
        box.style.background = `rgb(${r}, ${g}, ${b})`;
    }))
}

//Event listener for restart button
restart.addEventListener('click', reset);
//Restart Function
function reset(e) {
    const boxs = grid.querySelectorAll('.box');
    boxs.forEach(box => box.remove());
    defaultGrid(16, 16);
}

//Event listener for resize grid button
resize.addEventListener('click', resizeGrid);

//Func to resize the grid
function resizeGrid(e) {
    let r = prompt('Insert Number of rows between 1 and 100');
    if (r !== null && r <= 100 && r > 1) {
        let c = prompt('Insert Number of columns betwenn 1 and 100');
        if (c !== null && c <= 100 && c > 1) {
            const boxs = grid.querySelectorAll('.box');
            boxs.forEach(box => box.remove());
            defaultGrid(r, c);


        } else {
            alert('Invalid Value');
        }
    } else {
        alert('Invalid Value');
    }
}