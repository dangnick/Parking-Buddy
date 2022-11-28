const fs = require("fs");

function changeToRed(num){
    document.getElementById(num).style.setProperty("background-color", "red");
}  

function changeToGreen(num){
    document.getElementById(num).style.setProperty("background-color", "green");
}

function run(){
    
    for(let i = 0; i < 100; i++){
            let num = Math.floor(Math.random()*20);
            let num2 = Math.floor(Math.random()*20);
        setTimeout(function(){
            changeToRed(num);

            setTimeout(function(){
                changeToGreen(num2);
            }, Math.floor(Math.random() * ((500000 - 100000) + 100000)));

        }, Math.floor(Math.random() * ((500000 - 100000) + 100000)) );
    }
}
