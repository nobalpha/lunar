
// Tuşa basınca çalışacak fonksiyon
document.addEventListener('keydown', press);

function press(e) {
    if (fuelstatus && (e.keyCode === 38 /* yukarı */ || e.keyCode === 87 /* w */ || e.keyCode === 90 /* z */ )) {
        up = true;
        $("#spaceship").css("background-image", "url('" + spaceup +"')");
        $("#spaceship").css("height",  nh+hs+"px");
        


    }
    if (fuelstatus && (e.keyCode === 39 /* sağ */ || e.keyCode === 68 /* d */ )) {
        right = true;
        $("#spaceship").css("background-image", "url('" + spaceright +"')");
        $("#spaceship").css("height", nh+hs+"px");
       

    }
    if (fuelstatus && (e.keyCode === 40 /* aşağı */ || e.keyCode === 83 /* s */ )) {
        down = true;
        $("#spaceship").css("background-image", "url('" + spacedown +"')");
        $("#spaceship").css("height", nh+hs+"px");

        

    }
    if (fuelstatus && (e.keyCode === 37 /* sol */ || e.keyCode === 65 /* a */ || e.keyCode === 81 /* q */ )) {
        left = true;
        $("#spaceship").css("background-image", "url('" + spaceleft +"')");
        $("#spaceship").css("height", nh+hs+"px");
        

    }
    if (fuelstatus && e.keyCode === 16) {


       boost = true;
    }
}
//.




//Tuştan parmak çekilince çalışacak olan fonksiyon
document.addEventListener('keyup', release);

function release(e) {

    if (fuelstatus &&(e.keyCode === 38 /* yukarı */ || e.keyCode === 87 /* w */ || e.keyCode === 90 /* z */ )) {
        up = false;
        $("#spaceship").css("background-image", "url('" + space +"')");
        $("#spaceship").css("height", hs+"px");
    }
    if (fuelstatus && (e.keyCode === 39 /* sağ */ || e.keyCode === 68 /* d */ )) {
        right = false;
        $("#spaceship").css("background-image", "url('" + space +"')");
        $("#spaceship").css("height",  hs+"px");
    }
    if (fuelstatus && (e.keyCode === 40 /* aşağı */ || e.keyCode === 83 /* s */ )) {
        down = false;
        $("#spaceship").css("background-image", "url('" + space +"')");
        $("#spaceship").css("height",  hs+"px");
    }
    if (fuelstatus && (e.keyCode === 37 /* sol */ || e.keyCode === 65 /* a */ || e.keyCode === 81 /* q */ )) {
        left = false;
        $("#spaceship").css("background-image", "url('" + space +"')");
        $("#spaceship").css("height",  hs+"px");
    }
    if (fuelstatus && e.keyCode === 16) {

        $("#spaceship").css("background-image", "url('"+ space+ "')");
       boost = false;
    }

}
//.
