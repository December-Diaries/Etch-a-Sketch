const container = document.querySelector("#container");

for (let i=0; i<16;i++){
    console.log(`${i}`);
    const div = document.createElement("div");
    container.appendChild(div);
    for(let j=0;j<15;j++){
        const div2 = document.createElement("div");
        div2.setAttribute("class","inline");
        container.appendChild(div2);
        console.log(`${j}`);
    }
}