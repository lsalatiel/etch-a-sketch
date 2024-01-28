const gridContainer = document.querySelector('#grid-container');

for(let i = 0; i < 16*16; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    // gridItem.textContent = i + 1;
    gridContainer.appendChild(gridItem);
    gridItem.style.backgroundColor="rgba(215, 215, 215, 1)";
    gridItem.style.border="1px solid rgba(0, 0, 0, 0.8)";
    gridItem.style.padding="20px";
    gridItem.style.fontSize="30px";
    gridItem.style.textAlign="center";
}

gridItens = document.querySelectorAll('.grid-item');

gridItens.forEach((item) => {
    item.addEventListener('mouseover', () => {
        item.style.backgroundColor="rgba(0, 0, 0, 0.8)";
    });
});

const resetButton = document.querySelector('#reset-btn');

resetButton.addEventListener('click', () => {
    gridItens.forEach((item) => {
        item.style.backgroundColor="rgba(215, 215, 215, 1)";
    });
});

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('mouseover', () => {
        button.style.backgroundColor="#585b70";
        button.style.color="white";
    });
});

buttons.forEach((button) => {
    button.addEventListener('mouseout', () => {
        button.style.backgroundColor="#a6adc8";
        button.style.color="black";
    });
});

const gridButton = document.querySelector('#grid-btn');

gridButton.addEventListener('click', () => {
    let gridSize = prompt("Enter the grid size: ");
    if(gridSize > 100 || gridSize < 1) {
        alert("The grid size must be positive and less than 100");
        return;
    }

    gridContainer.innerHTML = '';

    for(let i = 0; i < gridSize*gridSize; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        // gridItem.textContent = i + 1;
        gridContainer.appendChild(gridItem);
        gridItem.style.backgroundColor="rgba(215, 215, 215, 1)";
        gridItem.style.border="1px solid rgba(0, 0, 0, 0.8)";
        gridItem.style.padding="20px";
        gridItem.style.fontSize="30px";
        gridItem.style.textAlign="center";
    }

    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;

    // don't know why but this code needs to be here asswell
    gridItens = document.querySelectorAll('.grid-item');

    gridItens.forEach((item) => {
        item.addEventListener('mouseover', () => {
            item.style.backgroundColor="rgba(0, 0, 0, 0.8)";
        });
    });
});
