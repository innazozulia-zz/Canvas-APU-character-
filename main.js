const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

//Animation  - character
const image = document.getElementById('source');

const player = {
    w: 50,
    h: 70,
    x: 20,
    y: 200,
    speed: 4,
    dx: 0,
    dy:0
}

function drawPlayer(){
ctx.drawImage(image, player.x, player.y, player.w, player.h);

}
function clear(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function newPosition(){
    player.x += player.dx;
    player.y += player.dy;

    detectWalls();
}

function detectWalls(){
    //left wall
    if(player.x < 0){
        player.x = 0;
    } 
    //right wall
    if(player.x + player.w > canvas.width){
        player.x = canvas.width - player.w;
    }
    //top wall
    if(player.y < 0){
        player.y = 0;
    }
    //down wall
    if(player.y + player.h > canvas.height){
        player.y = canvas.height  - player.h;
    }
}

function update(){
    clear();

    drawPlayer();
    newPosition();

    requestAnimationFrame(update);
}

function moveUp(){
    player.dy = -player.speed;
}
function moveDown(){
    player.dy = player.speed;
}
function moveLeft(){
    player.dx = -player.speed;
}
function moveRight(){
    player.dx = player.speed;
}



function keyDown(e){
    if(e.key === 'ArrowRight' || e.key === 'Right'){
        moveRight();
    } else if (e.key === "ArrowLeft" || e.key === "Left"){
        moveLeft();
    } else if (e.key == "ArrowDown" || e.key === 'Down'){
        moveDown();
    } else if (e.key === "ArrowUp" || e.key === "Up"){
        moveUp();
    }
}

function keyUp(e){
if(e.key === "ArrowRight" ||
 e.key === "Right" ||
 e.key === "ArrowLeft" ||
 e.key === "Left" ||
 e.key === "ArrowUp" ||
 e.key === "Up" ||
 e.key === "Down" ||
 e.key === "ArrowDown"){
    player.dx = 0;
    player.dy = 0;
}
}

update();

document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);
