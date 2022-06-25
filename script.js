/*
function grid(size) {
    const containerWidth = 600;
    let width = Math.floor(containerWidth / size);
    const container = document.querySelector(".container");
    container.style.width = `${width * size}px`
    let div;
    for (let i = 0; i < size * size; i++) {        
        div = document.createElement('div');
        div.style.cssText = `width: ${width}px; height: ${width}px; margin: 0;`;
        div.classList.add("grid-child")
        container.appendChild(div);
    }
    const gridChilds = document.querySelectorAll(".grid-child")
    gridChilds.forEach((element) => element.addEventListener('mouseenter', changeColor))
    function changeColor(event) {
        this.classList.add('grid-child-hover')
    }
}

function main() {
    let size = 16;
    grid(size)
    const container = document.querySelector(".container");
    const resetButton = document.querySelector('#reset')
    resetButton.onclick = reset
    let gridChilds;
    function reset() {
        gridChilds = document.querySelectorAll(".grid-child")
        gridChilds.forEach((element) => element.classList.remove("grid-child-hover"))
        do {
        size = prompt("what size should the new grid be?")
        } while (size > 100 || size < 5);
        gridChilds.forEach((element) => element.remove())
        grid(size)
    }
}

main()
*/
let defaultColor = "white"
let color = "rgb(8, 8, 8)"

const grid = document.querySelector('.grid');

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
}

// default grid
createGrid(grid, 20);

// check for mousebutton being down
let mouseDown;

document.body.addEventListener('mousedown', () => mouseDown = true, {capture: true});
document.body.addEventListener('mouseup', () => mouseDown = false);



let gridItems = document.querySelectorAll('.grid-item');

gridItems.forEach(item => {
    item.addEventListener('mouseover', changeColor);
    item.addEventListener('mousedown', changeColor);
})

function changeColor(e) {
    // doesn't do anything if mouse isnot down
    if (!mouseDown) return;
    this.style.backgroundColor = color
    console.log(e)
}








