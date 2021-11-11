function grid(size) {
    const containerWidth = 600;
    let width = Math.floor(containerWidth / size, 2);
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