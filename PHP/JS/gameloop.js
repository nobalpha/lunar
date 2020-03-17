//DeÄŸiÅŸkenler
var size = items.length;
var pause = false;
var fuelstatus = true;
var boost = false;
let level = 1;
let cookie = document.cookie = "level=" + level;
console.log(cookie); 


//Oyunun genel kurallarÄ±nÄ±n yer aldÄ±ÄŸÄ± fonskiyon
function gameLoop() {
    for(i in items)
{
if(items[i].status=="porteQuiSeDeplace"){
items[i].x=items[i].x+(items[i].vX * cs);
items[i].y=items[i].y+(items[i].vY * cs);
if(items[i].x>items[i].xMax){items[i].vX*=-1;}
if(items[i].x<items[i].xMin){items[i].vX*=-1;}
if(items[i].y>items[i].yMax){items[i].vY*=-1;}
if(items[i].y<items[i].yMin){items[i].vY*=-1;}
$("#"+items[i].id).css("left", items[i].x + "px");
$("#"+items[i].id).css("top", items[i].y + "px");
}

/*if(items[i].status == "push") {
items[i].x=items[i].x+items[i].vX;
items[i].y=items[i].y+items[i].vY;

    if(items[i].effect == "horizontal") {
        if(items[i].x>items[i].xMax){items[i].x = xMax;}
        if(items[i].x>items[i].xMax){items[i].x = xMin;}
        $("#"+items[i].id).css("left", items[i].x + "px");

    }
    if(items[i].effect == "vertical") {
        if(items[i].y>items[i].yMax){items[i].vY = yMax;}
        if(items[i].y<items[i].yMin){items[i].vY = yMin;}
        $("#"+items[i].id).css("top", items[i].y + "px");

    }


}*/
}
      var spaceship = document.getElementById('spaceship');



    //YÃ¶n tuÅŸlarÄ±
    Y = Y + vY;
    X = X + vX;
    //W tuÅŸu ve Ã¼st bÃ¶lÃ¼m sÄ±nÄ±rlandÄ±rmasÄ±
    if (up) {

        fuel -= 1;

        vY -= (300/(mv + fuel))*(0.2);

    }



    //D tuÅŸu ve saÄŸ bÃ¶lÃ¼m sÄ±nÄ±rlandÄ±rmasÄ±
    if (right) {
        fuel -= 1;
        vX += (300/(mv + fuel))*(0.2);

    }
    //S tuÅŸu ve alt bÃ¶lÃ¼m sÄ±nÄ±rlandÄ±rmasÄ±
    if (down) {
        fuel -= 1;
        vY += (300/(mv + fuel))*(0.2);
    }



    //A tuÅŸu ve sol bÃ¶lÃ¼m sÄ±nÄ±rlandÄ±rmasÄ±
    if (left) {

        fuel -= 1;
        vX -= (300/(mv + fuel))*(0.2);


    }

    if(boost) {
        boosted();
    }
    //YerÃ§ekimi komutu

    vX = vX*0.995 ;
    vY= vY*0.995+ 0.01;


    //YakÄ±t bitince Ã§alÄ±ÅŸacak olan kondisyon
    if (fuel <= 0) {
        fuelover();
    }
    //SaÄŸ kenar border
    if (X > window.innerWidth) {
        X = 0;
    }
    //Sol kenar border
    if(X < 0) {
        X= window.innerWidth;
    }

    if(hp == 0 ) {
        gameover();
    }
    //Itemleri Ã§izmek iÃ§in olan dessin fonksiyonu loopu
    for (i in items) {

        if (colusion(items[i])) {
            //Landing area condition "red"
            if (items[i].status == "lan") {
                //Speed condition
                if (vY > speedlimit) {
                    gameover();
                } else {
                    console.log("success");
                    success();
                    break;
                }
            }
            //Locked area condition "blue"
            else if (items[i].status == "lock") {
                hp-=10;
                vX=-vX;
                vY=-vY;
                X=X+vX;
                Y=Y+vY;


            }
            
            else if (items[i].status == "control") {
              if (items[i].control == "big") {

                if(taille == "big") {
                  console.log("go");
                }
                else {
                  hp-=10;
                  vX=-vX;
                  vY=-vY;
                  X=X+vX;
                  Y=Y+vY;
                }
              }

              if (items[i].control == "small") {
                if(taille == "small") {
                    console.log("go");
                  }
                  else {
                    hp-=10;
                    vX=-vX;
                    vY=-vY;
                    X=X+vX;
                    Y=Y+vY;
                  }
              }
            }
            else if(items[i].status == "obs") {
              if(Math.abs(vX*vX+vY*vY)>3*3){gameover();}else{hp-=10;}
                vX=-vX;
                vY=-vY;
                X=X+vX;
                Y=Y+vY;
            }
            
            else  {
                gameover();
            }
        }
    }



    for(a in bonuses) {
        if(colusion(bonuses[a])) {
            //Key area condition
            if (bonuses[a].status == "key") {

                if (bonuses[a].id == "key_1") {
                    $("#key_1").remove();
                    $("#lock_1").remove();

                    delete items[lock];


                } 
                else if (bonuses[a].id == "key_2") {
                    $("#key_2").remove();
                    $("#lock_2").remove();

                    delete items[lock2];


                }
            }
            //Fuel area condition
            else if (bonuses[a].status == "bfuel") {
                if (bonuses[a].id == "bfuel_1") {
                    $("#fuelimg").css("visibility", "visible");
                    $("#fuel").css("visibility", "visible");
                    fuel += 100;
                    fuelstatus = true;
                    $("#bfuel_1").hide();
                    $("#fuelover").css("visibility", "hidden");
                    delete bonuses[bfuel];
                }

                /*else if (bonuses[a].id == "bfuel_2") {
                    $("#fuelimg").css("visibility", "visible");
                    $("#fuel").css("visibility", "visible");
                    fuel += 100;
                    fuelstatus = true;
                    $("#bfuel_2").hide();
                    $("#fuelover").css("visibility", "hidden");
                    delete bonuses[1];
                }*/
            }


            //Obstacle area condition
            /*else if (bonuses[a].status == "push") {
                if (bonuses[a].effect == "horizontal") {
                    console.log("OK");
                    if(X < bonuses[a].x && (Y <= bonuses[a].y || Y >= bonuses[a].y))  {
                        X = bonuses[a].x - 70;
                        bonuses[a].x += 6;
                        vX-=0.1;
                        if (boost) {
                            bonuses[a].x += 8;
                            vX -= 0.5;
                        }
                    }
                    else if (X > bonuses[a].x && (Y <= bonuses[a].y || Y >= bonuses[a].y)) {
                        X = (bonuses[a].x + bonuses[a].w);
                         bonuses[a].x -= 6;
                         vX+=0.1;
                        if (boost) {
                            bonuses[a].x -= 8;
                            vX += 0.5;
                        }
                    }

                }

                if (bonuses[a].effect == "vertical") {
                    console.log("OK");
                    if(Y < bonuses[a].y && (X <= bonuses[a].x || X >= bonuses[a].x))  {
                        Y = bonuses[a].y - 70;
                        bonuses[a].y += 6;
                        vY=0.1;
                        if (boost) {
                            bonuses[a].y += 8;
                            vY -= 0.5;
                        }
                    }
                    else if (Y > bonuses[a].y && (X <= bonuses[a].x || X >= bonuses[a].x)) {
                        Y = (bonuses[a].y + bonuses[a].h);
                         bonuses[a].y -= 6;
                         vY+=0.1;
                        if (boost) {
                            bonuses[a].y -= 8;
                            vY += 0.5;
                        }
                    }

                }


            }*/
            else if (bonuses[a].status == "hp") {

                hp += 200;

                delete bonuses[health];
                $("#hp_1").hide();

            } else if (bonuses[a].job == "size") {
                if (bonuses[a].action == "petit") {
                    ws = ws - 30;
                    hs = hs - 30;
                    mv = 50;
                    taille = "small";
                    $("#spaceship").css("width", ws + "px");
                    $("#spaceship").css("height", hs + "px");
                    $("#petit_1").remove();
                    delete bonuses[petit];
                } else {
                    ws = ws + 30;
                    hs = hs + 30;
                    mv = 150;
                    taille = "big";
                    $("#spaceship").css("width", ws + "px");
                    $("#spaceship").css("height", hs + "px");
                    $("#grand_1").hide();
                    delete bonuses[grand];
                }
            } else if (bonuses[a].status == "ts") {
                setTimeout(function () {
                    cs = 0.1
                }, 2000);
                delete bonuses[timelapse];
                $("#ts_1").remove();
            } else if (bonuses[a].status == "sender") {
                if (bonuses[a].id == "s_1") {
                    X = bonuses[reciever].x;
                    Y = bonuses[reciever].y;
                    vX = 0;
                    vY = 0;
                }
            }
            //else if (bonuses[a].status == "reciever") {

            //}
        }
    }
    //. for(i in items)



    //AracÄ±n hareketini (daha doÄŸrusu konum deÄŸiÅŸikliÄŸinden kaynaklanacak olan hareketini) refresh ile tazeleyecek olan komutlar
    spaceship.style.left = X + 'px';
    spaceship.style.top = Y + 'px';
    //Pause tuÅŸu iÃ§in variable

    myAnim = window.requestAnimationFrame(gameLoop);










    //YakÄ±t seviyesini gÃ¶sterecek komut
    $("#fuel").html(fuel);
    $("#hp").html(parseInt(hp) + "%");
    $("#speed").html(parseInt(Math.sqrt(vX*vX+vY*vY)) + "m/s");

    $("#boost").html(Math.round(boostq * 10) / 10);

}
//. gameloop



for(i in items)
{dessin_item(items[i]);}

for(a in bonuses) {
    dessin_item(bonuses[a]);
    
}
//Pause tuÅŸu iÃ§in variable
myAnim = window.requestAnimationFrame(gameLoop);

//Reset tuÅŸu fonksiyonu
function clear() {
    $("#canvas").html("");


}
//.



//pause komutu yazılacak
/* for( a= 10 ; a>= 1 ; a-- ) {
    setTimeout(function() {
        items[i].vX = 1;
        $("#ts_1").html(a);
    } , 1000);
} 
items[i].vX = normal;
*/



/* for(mont , x = 1 ; mont > 0 ; x++ , mont--) {
    if(items["mon" + x].direction == "horizontal") {
        items["mon" + x].vX = 1;
    }
    else {
        items["mon" + x].vY = 1; 
    }
} */