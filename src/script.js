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

resetButton.addEventListener('mouseover', () => {
    resetButton.style.backgroundColor="#585b70";
    resetButton.style.color="white";
});

resetButton.addEventListener('mouseout', () => {
    resetButton.style.backgroundColor="#a6adc8";
    resetButton.style.color="black";
});
