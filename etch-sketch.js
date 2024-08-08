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

container.addEventListener('mouseover', (event) => {
    const target = event.target;
    // const targetID = `#${target.id}`;
    // const elem =
    console.log(target);
    if (target.className === "inner") {   // hmmm??? TODO: 
        target.style.backgroundColor = "black";
    }

});
