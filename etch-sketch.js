const container = document.querySelector("#grid-container");

let gridSize = 16;

function drawGrid(gridSize) {
    container.replaceChildren();
    for (let i = 0; i < gridSize; i++) {
        let outerDiv = document.createElement("div");
        container.appendChild(outerDiv);
        outerDiv.className = "outer";
        outerDiv.id = `outer-${i}`;
        for (let j = 0; j < gridSize; j++) {
            let innerDiv = document.createElement("div");
            innerDiv.className = "inner";
            innerDiv.id = i.toString()+ "-" + j.toString();
            innerDiv.style.height = (Math.floor(960/gridSize)).toString()+"px";
            innerDiv.style.width = (Math.floor(960/gridSize)).toString()+"px";

            outerDiv.appendChild(innerDiv);
        }
    }
}

drawGrid(gridSize);

let isMouseDown = false;
container.addEventListener("mousedown", () => isMouseDown = true );
container.addEventListener("mouseup", () => isMouseDown = false);

/*
paints whichever cell that triggers mouseover
*/
container.addEventListener('mouseover', (event) => {
    const target = event.target;
    console.log(`is mouse down: ${isMouseDown}`);
    if (target.className === "inner" && isMouseDown === true) {   // hmmm??? TODO: 
        target.style.backgroundColor = "black";
    }

});

const newGridBtn = document.querySelector("#btn-new-grid");

newGridBtn.addEventListener('click', () => {
    const size = parseInt(prompt("Enter a new grid size, from 1 to 64 (inclusive) for a new grid"));
    
    gridSize = size;
    drawGrid(gridSize);
})

const clearGridBtn = document.querySelector("#btn-clear-grid");

const cells = document.querySelectorAll(".inner");
clearGridBtn.addEventListener('click', () => {
    drawGrid(gridSize);
});