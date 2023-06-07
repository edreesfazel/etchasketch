const container = document.querySelector('.container');

function createGrid(size) {
    for(let i = 0; i < size; i++) {
        for(let j = 0; j <size; j++) {
            const square = document.createElement('div');
            square.classList.add('square');
            container.appendChild(square);
        }
    }
}

function clearGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function promptGridSize() {

    const gridSize = parseInt(prompt('Enter the number of squares per side (maximum 100):'), 10);

    if(!isNaN(gridSize) && gridSize > 0 && gridSize <=100) {
        clearGrid();
        createGrid(gridSize);
    } else {
        alert('Invalid input!');
    }
}

newGridButton.addEventListener('click', promptGridSize);

function handleHover(event) {
    if (event.target.classList.contains('square')) {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        const randomColor = `rgb(${red}, ${green}, ${blue})`;
        event.target.style.backgroundColor = randomColor;
      }
}

function handleMouseLeave(event) {
    if(event.target.classList.contains('square')) {
        event.target.classList.remove('hovered');
    }
}

container.addEventListener('mouseover', handleHover);
container.addEventListener('mouseleave', handleMouseLeave);


createGrid(16);
