const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function main(){
    
}

function resize(){
    canvas.width = window.innerWidth();
    canvas.height = window.innerHeight();
}

function addEventListeners(){
 //test extra
}

function setup(){

    addEventListeners();
    resize();
}

window.addEventListener("load", setup());