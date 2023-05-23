const textchange = document.querySelector("#change");
const values = ["Student","Web Developer","Guitarist"];
let counter = 1;
setInterval(()=>{
    textchange.textContent = values[counter];
    counter = (counter+1) % values.length;
},1600);
