const container = document.querySelector("#container");


for (let i=0; i<16*16;i++){
    console.log(`${i}`);
    const div1 = document.createElement("div");
    
    div1.addEventListener("mouseenter",()=>{
        div1.style.backgroundColor = "green";       
    });
    
    container.appendChild(div1);

    


}



