
const btn1 = document.querySelector(".child .btn1");
const btn2 = document.querySelector(".child .btn2");
const currentNode = document.querySelector(".child h4");
const nextNode = document.querySelector(".child p");

let red;
let green;
let blue;
let alpha;

const generateColor = function(){
    red = Math.floor(Math.random()*255);
    green = Math.floor(Math.random()*255);
    blue = Math.floor(Math.random()*255);
    alpha = Math.random().toFixed(2);
    return `rgba(${red},${green},${blue},${alpha})`
}

// Initialize current and next color
let nextColor = generateColor();
let currentColor = 'rgba(255,255,255,1)';

function changeColor(){
    document.body.style.background = nextColor;
    currentColor=nextColor;
    currentNode.textContent = "Current Color: "+currentColor;
    nextColor = generateColor();
    nextNode.textContent = "Next Color: "+nextColor;
}

btn1.addEventListener("click",()=>{
    changeColor();
})

btn2.addEventListener("click",()=>{
    console.log(btn2.textContent);
    let setIntervalID;  
    if(btn2.textContent=="Auto Change"){
        btn2.textContent = "Stop";
        setTimeoutID = setInterval(() => {
            changeColor()
        },2000);
    }
    else if(btn2.textContent==="Stop"){
        clearTimeout(setTimeoutID);
        btn2.textContent = "Auto Change";
    }
})