const container = document.querySelector("#grid-container");

function drawGrid(num) {
    for (let i = 0; i < num; i++) {
        let outerDiv = document.createElement("div");
        container.appendChild(outerDiv);
        outerDiv.className = "outer";
        outerDiv.id = `outer-${i}`;
        for (let j = 0; j < num; j++) {
            let innerDiv = document.createElement("div");
            innerDiv.className = "inner";
            innerDiv.id = j;
            innerDiv.style.height = (Math.floor(960/num)).toString()+"px";
            innerDiv.style.width = (Math.floor(960/num)).toString()+"px";

            outerDiv.appendChild(innerDiv);
        }
    }
}

drawGrid(32);

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

