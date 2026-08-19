const container = document.querySelector("#container");

const btn = document.querySelector("button");

createGrid(16);

btn.addEventListener("click",()=>{
    let input = prompt("Enter number of squares per side (max 100)");
    if (input ==null) return;
    let newGridSize =Number(input);
    if (newGridSize>100||newGridSize<1||!Number.isInteger(newGridSize)){
        alert("Wrong input! Give again");
        return;
    }

    createGrid(newGridSize);

});


function createGrid(gridSize){
    container.replaceChildren();
    container.style.setProperty('--grid-size',gridSize);
    for (let i=0; i<gridSize*gridSize;i++){
        
        const div1 = document.createElement("div");
        div1.dataset.alpha = "0";
        div1.addEventListener("mouseenter",()=>{
            
            
            const currentOpacity =parseFloat(div1.dataset.alpha)||0;
            let nextAlpha=Math.min(1,currentOpacity+0.1);
            div1.dataset.alpha=nextAlpha;
            div1.style.backgroundColor = `rgba(0, 128, 0, ${nextAlpha})`;

        });
        
        container.appendChild(div1);
    }
}









