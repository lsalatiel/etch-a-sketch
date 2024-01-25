const gridContainer = document.querySelector('#grid-container');

for(let i = 0; i < 16*16; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    gridItem.textContent = i + 1;
    gridContainer.appendChild(gridItem);
    gridItem.style.backgroundColor="rgba(255, 255, 255, 0.8)";
    gridItem.style.border="1px solid rgba(0, 0, 0, 0.8)";
    gridItem.style.padding="20px";
    gridItem.style.fontSize="30px";
    gridItem.style.textAlign="center";
}

