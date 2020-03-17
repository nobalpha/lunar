// Değişkenler
var up = false,
    right = false,
    down = false,
    left = false,
    X = 300;
Y = 30;
vX = 0;
vY = 0;
hs = 106;
ws = 79;
nh = 44;
fuel = 100;
mv = 100;
hp = 100;
boostq = 10;
space = "../../Images/level2ship.png";
spaceup = spacedown = spaceleft = spaceright = "../../Images/level2shipflame.png";
speedlimit = 2.5;






item0 = {
    x: 1000,
    y: 600,
    w: 205,
    h: 5,
    status: "lan",
    id: "lan"
};
item1= {
    x: 0,
    y: 350,
    w: 1000,
    h: 5,
    status: "obs",
    id: "obs_3"
};
item2 = {
    x: 1205,
    y: 350,
    w: 163,
    h: 5,
    status: "obs",
    id: "obs_4"
};

item3 = {
    x: 1200,
    y: 350,
    w: 5,
    h: 250,
    status: "obs",
    id: "obs_2"
};
item4 = {
    x: 1000,
    y: 350,
    w: 5,
    h: 250,
    status: "obs",
    id: "obs_1"
};
item5 = {
    x: 1000,
    y: 350,
    w: 205,
    h: 5,
    status: "lock",
    id: "lock_1" ,
    effect: "verticaljumpup"
};





items = [item0, item1, item2, item3, item4, item5];

bonus0 = {
    x: 300,
    y: 250,
    w: 28,
    h: 28,
    status: "key",
    id: "key_1"
}
bonus1 = {
    x: 500,
    y: 200,
    w: 50,
    h: 50,
    status: "bfuel",
    id: "bfuel_1"
}
bonuses = [bonus0 , bonus1];

key = 0;
bfuel = 1;
lock = 5; 
const boom = new Audio();
const win = new Audio();

$(window).load(setTimeout(function () {
    $("#opening").fadeOut();
}, 3000));
