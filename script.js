const container = document.querySelector("#container");

const btn = document.querySelector("button");

createGrid(16);

btn.addEventListener("click",()=>{
    let newGridSize = Number(prompt("Enter number of squares per side (max 100)"));
    if (newGridSize>100||newGridSize<1||!Number.isInteger(newGridSize)){
        alert("Wrong input! Give again");
        return;
    }
    container.replaceChildren();
    container.style.setProperty('--grid-size',newGridSize);
    createGrid(newGridSize);

});


function createGrid(gridSize){
    for (let i=0; i<gridSize*gridSize;i++){
        
        const div1 = document.createElement("div");
        
        div1.addEventListener("mouseenter",()=>{
            div1.style.backgroundColor = "green";

        },{once: true});
        
        container.appendChild(div1);
    }
}









