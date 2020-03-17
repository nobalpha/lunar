//Pause tuşu fonksiyonu
function paused() {
    $("#continue").css("visibility" , "hidden");
    $("#playagain").css("visibility" , "hidden");
    $("#youwin").css("visibility" , "hidden");
    $("#gameover").css("visibility" , "hidden");
    $("#game").css("filter", "blur(8px)");


    $("#restart").css("visibility", "visible");
    $("#resume").css("visibility", "visible");
    $("#mainmenu").css("visibility", "visible");

    pause = !pause;
    window.cancelAnimationFrame(myAnim);
}
//.

//Fuel bitince çalışacak fonksiyon
function fuelover() {
$("#fuelimg").css("visibility", "hidden");
$("#fuel").css("visibility", "hidden");
$("#fuelover").css("visibility", "visible");
fuelstatus = false;
up = false;
left = false;
right = false;
down= false;
$("#spaceship").css("background-image" , "url('../"+ space +"')")
$("#spaceship").css("height", hs+"px");
}
//.

function resumed() {
$("#game").css("filter", "none");
$("#restart").css("visibility", "hidden");
$("#resume").css("visibility", "hidden");
$("#mainmenu").css("visibility", "hidden");

pause = !pause;

gameLoop();
}

//Tekrar oynamak için gereken fonksiyon
function reset() {
document.location.reload(true);

}
//.

function boosted() {


 if (boostq < 1) {
   boostq = 0;
     boost = false;
     $("#boost").remove();
 }
if(up) {
    vY-=0.2;
    $("#spaceship").css("background-image", "url('"+ spaceup+ "')");
    boostq-=0.2;
    fuel-=2;
}
if(down) {
    vY+=0.2;
    $("#spaceship").css("background-image", "url('"+ spacedown+ "')");
    boostq-=0.2;
    fuel-=2;
}
if(right) {
    vX+=0.2;
    $("#spaceship").css("background-image", "url('"+ spaceright+ "')");
    boostq-=0.2;
    fuel-=2;
}
if(left) {
    vX-=0.2;
    $("#spaceship").css("background-image", "url('"+ spaceleft+ "')");
    boostq-=0.2;
    fuel-=2;
}
}
//Oyun kazanma fonksiyonu
function success() {
    console.log("yo win");
    $("#properties").remove();
    $("#game").css("filter",
        "blur(8px)"
    );
    win.src = "Sounds/win.mp3";
    win.play();
    $("#youwin").css("visibility", "visible");
    $("#playagain").css("visibility", "visible");
    $("#continue").css("visibility", "visible");
    $("#spaceship").remove();
    $("#fuelover").remove();
    console.log("You win");
    //$("html").append("<?php $_SESSION['level'] += 1; ?>");
    level++;
    //location.reload();
    //window.cancelAnimationFrame(myAnim);
}
//.
//Oyun kaybetme fonksiyonu
function gameover() {
    $("#properties").remove();
    $("#game").css("filter",
        "blur(8px)"
    );
    window.cancelAnimationFrame(myAnim);
    boom.src = "Sounds/boom.mp3";
    boom.play();
    $("#spaceship").css("background-image",
        "url('https://vignette.wikia.nocookie.net/roblox/images/9/98/New_Explosion.png/revision/latest?cb=20091213220818')"
    );
    $("#gameover").css("visibility", "visible");
    $("#restart").css("visibility", "visible");
    $("#spaceship").remove();
    $("#fuelover").remove();
}
//.
