let backgroundColor = "rgb(204, 229, 230)";
let color = "rgb(8, 8, 8)";
let mode = 'color';

const grid = document.querySelector('.grid');
const colorPicker = document.querySelector('.color-picker');
const rainbowMode = document.querySelector('.rainbow-mode');
const colorMode = document.querySelector('.color-mode')
const eraserMode = document.querySelector('.eraser-mode')
const modes = document.querySelectorAll('.mode')
const clear = document.querySelector('.clear')
const setBackground = document.querySelector('.background-color-picker')
const size = document.querySelector('.size')

let gridItems;

// reseting the color pickers
colorPicker.value = color
setBackground.value = backgroundColor

// default grid
createGrid(grid, 20);

// creates a grid with given size inside grid container
function createGrid(grid, size) {
    for (let i = 0; i < size; i++) {
        let gridRow = document.createElement('div');
        gridRow.classList.add('grid-row');
        grid.appendChild(gridRow);
    }
    let gridRows = document.querySelectorAll('.grid-row');
    gridRows.forEach(gridrow => {
        for (let i = 0; i < size; i++) {
            let girdElement = document.createElement('div');
            girdElement.classList.add('grid-item');
            //girdElement.textContent = 'a'
            gridrow.appendChild(girdElement);
        }
    })
    addEventToGridItems()
}

// check for mousebutton being down
let mouseDown;

document.body.addEventListener('mousedown', () => mouseDown = true, {capture: true});
document.body.addEventListener('mouseup', () => mouseDown = false);

// add eventlistener to grid items
function addEventToGridItems() {
    gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(item => {
        item.addEventListener('mouseover', changeColor);
        item.addEventListener('mousedown', changeColor);
    })
}


function changeColor(e) {
    // doesn't do anything if mouse isnot down
    if (!mouseDown) return;
    if (mode === 'color') {
        this.style.backgroundColor = color;
    } else if (mode === 'rainbow') {
        this.style.backgroundColor = getRandomColor();
    } else if (mode === 'eraser') {
        this.style.backgroundColor = '';
    }
}

// selects a random rgb value for rainbow mode
function getRandomColor() {
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
    return `rgb(${red}, ${green}, ${blue})`;
}

// change the color with color picker
colorPicker.addEventListener('change', e => {
    color = e.target.value;
})

// change the mode to color
colorMode.addEventListener('click', e => {
    mode = 'color';
    clearSelection()
    e.target.classList.add('selected');
})

// change the mode to rainbow
rainbowMode.addEventListener('click', e => {
    mode = 'rainbow';
    clearSelection()
    e.target.classList.add('selected');
})

// change the mode to eraser
eraserMode.addEventListener('click', e => {
    mode = 'eraser';
    clearSelection()
    e.target.classList.add('selected');
})

function clearSelection() {
    modes.forEach(mode => {
        mode.classList.remove('selected');
    })
}

// clear button
clear.addEventListener('click', e => {
    gridItems.forEach(item => {
        item.style.backgroundColor = '';
    })
})

// change background button
setBackground.addEventListener('change', e => {
    backgroundColor = e.target.value;
    grid.style.backgroundColor = backgroundColor
})

// create new grid with range slider
size.addEventListener('change', e => {
    grid.innerHTML = ''
    createGrid(grid, e.target.value)
})









