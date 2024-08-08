const container = document.querySelector("#grid-container");

for (let i = 0; i < 16; i++) {
    let outerDiv = document.createElement("div");
    container.appendChild(outerDiv);
    outerDiv.className = "outer";
    outerDiv.id = `outer-${i}`;
    for (let j = 0; j < 16; j++) {
        let innerDiv = document.createElement("div");
        innerDiv.className = "inner";
        innerDiv.id = j;
        outerDiv.appendChild(innerDiv);
    }
}

/*
add listener for mouseover or mousedown at the container level
then use the target property to color each of the inner divs 
*/

/*
this block is to ensure that cells of the etch-a-sketch grid is
only filled when mouse is down.
*/
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

