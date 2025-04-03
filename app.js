let userSeq= [];
let gameSeq= [];

let started = false;
let level = 0;

let boxs = ['red','yellow','green','blue'];

let h3 = document.querySelector('h3')

document.addEventListener("keypress",function()
{   
    if(started == false)
    {
        console.log("game started");
        started = true;

        levelUp();
    }
})

function levelUp()
{
    userSeq = [];
    level++;
    h3.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random()*4);
    let randColor = boxs[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(randColor);
    // console.log(randBtn);
    // console.log(randIdx);
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randBtn);
}

function btnFlash(box)
{
    box.classList.add("flash");
    setTimeout(function(){
        box.classList.remove("flash")
    },200)
}

function checkAns(idx){

    if(gameSeq[idx] == userSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h3.innerHTML = `Game over,your score was <b> ${level}</b> <br> Press any key to start`;
        document.querySelector("body").style.backgroundColor= "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor= "white";
        },150);
        reset();
    }
}

function boxPress(){
    let box = this;
    btnFlash(box);

    userColor = box.getAttribute("id");
    userSeq.push(userColor);
    console.log(userSeq);

    checkAns(userSeq.length-1);
}

let allBoxs = document.querySelectorAll('.box');

for (box of allBoxs){
    box.addEventListener("click",boxPress);
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;

}