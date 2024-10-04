let span = document.querySelector("span");
let btn1 = document.getElementById("btn1");
let num = 0;
let color = "";
let size = 32;
btn1.addEventListener("click", () => {
    num++;
    span.innerHTML = `<span style="color:${color}; font-size:${size}px;">${num}</span>`;
})

document.getElementById("btn2").addEventListener("click", () => {
    num--;
    span.innerHTML = `<span style="color:${color}; font-size:${size}px;">${num}</span>`;
})
document.getElementById("btn3").addEventListener("click", () => {
    num += 5;
    span.innerHTML = `<span style="color:${color}; font-size:${size}px;">${num}</span>`;
})
document.getElementById("btn4").addEventListener("click", () => {
    num -= 5;
    span.innerHTML = `<span  style="color:${color}; font-size:${size}px;">${num}</span>`;
})
document.getElementById("btn5").addEventListener("click", () => {
    span.innerHTML = `<span style="color:${getRandomColor()}; font-size:${size}px;">${num}</span>`;
})
document.getElementById("btn6").addEventListener("click", () => {
    size++;
    span.innerHTML = `<span  style="color:${color}; font-size:${size}px;">${num}</span>`;
    
})
document.getElementById("btn7").addEventListener("click", () => {
    size--;
    span.innerHTML = `<span  style="color:${color}; font-size:${size}px;">${num}</span>`;
})


function getRandomColor() {
    let r1 = Math.floor(Math.random() * 255);
    let r2 = Math.floor(Math.random() * 255);
    let r3 = Math.floor(Math.random() * 255);
    color = (`rgb(${r1},${r2},${r3})`)
    return color;

}