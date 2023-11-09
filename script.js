let a = 0;
let back = document.querySelector("body");

function change(){
    let rand = "#" + Math.floor(Math.random() * 16777215).toString(16);
    back.style.backgroundColor = rand;
}