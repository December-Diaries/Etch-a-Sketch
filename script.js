const container = document.querySelector("#container");

for (let i=0; i<16*16;i++){
    console.log(`${i}`);
    const div1 = document.createElement("div");
    container.appendChild(div1);

}