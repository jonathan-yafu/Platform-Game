

// SELECT CANVAS
const cvs = document.getElementById("mycanvas");
const ctx = cvs.getContext("2d");


// GAME AND CONSTS
let frames = 0;
 

//LOAD SPIRITE IMAGE
const sprite = new Image();
sprite.src ="https://raw.githubusercontent.com/CodeExplainedRepo/FlappyBird-JavaScript/master/images/bg.png";


//BACKGROUND
const bg = {
    sX : 50,
    sY : 50,
    w : 275,
    h : 226,
    x : 0,
    y :cvs.height - 226,

    draw : function(){
        ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x, this.y);
    }
}

// DRAW
function draw(){

    ctx.fillStyle = "#70c5ce";
    ctx.fillRect(0, 0, cvs.width,cvs.height)
    
        ctx.drawImage(sprite, bg.sX, bg.sY);
    


}


//UPDATE
function update(){

}

//LOOP
function loop(){
    update();
    draw();
    frames++;
    requestAnimationFrame(loop);
}
loop();