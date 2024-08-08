const container = document.querySelector("#grid-container");

for (let i = 0; i < 16; i++) {
    let outerDiv = document.createElement("div");
    container.appendChild(outerDiv);
    outerDiv.className = "outer";
    outerDiv.id = `outer-${i}`;
    for (let j = 0; j < 16; j++) {
        let innerDiv = document.createElement("div");
        innerDiv.className = "inner";
        innerDiv.id = `inner-${i}-${j}`;
        outerDiv.appendChild(innerDiv);
    }
}

