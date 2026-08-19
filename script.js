const container = document.querySelector("#container");

const btn = document.querySelector("button");


btn.addEventListener("click",()=>{
    let newGridSize = prompt("Enter number of squares per side (max 100)");

});

for (let i=0; i<16*16;i++){
    console.log(`${i}`);
    const div1 = document.createElement("div");
    
    div1.addEventListener("mouseenter",()=>{
        div1.style.backgroundColor = "green";

    },{once: true});
    
    container.appendChild(div1);
}








