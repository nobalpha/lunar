// Değişkenler
var up = false,
    right = false,
    down = false,
    left = false,
    X = 300;
Y = 30;
vX = 0;
vY = 0;
hs = 71;
ws = 73;
nh = 0;
fuel = 100;
hp = 70;
mv = 100;
cs = 1;
boostq = 20;
spaceup = "../Images/up.png"
spacedown = "../Images/down.png"
spaceleft = "../Images/left.png"
spaceright = "../Images/right.png"
space = "../Images/level3ship.png"
speedlimit = 1.5;

item0 = {
    x: 1000,
    y: 395,
    w: 5,
    h: 250,
    status: "obs",
    id: "obs_1"
};
item1 = {
    x: 1200,
    y: 205,
    w: 5,
    h: 440,
    status: "obs",
    id: "obs_2"
};
item2 = {
    x: 1000,
    y: 645,
    w: 205,
    h: 10,
    status: "lan",
    id: "lan"
};
item3 = {
    x: 650,
    y: 205,
    w: 550,
    h: 5,
    status: "obs",
    id: "obs_3"
};
item4 = {
    x: 650,
    y: 395,
    w: 350,
    h: 5,
    status: "obs",
    id: "obs_4"
};
item5 = {
    x: 0,
    y: 650,
    w: 990,
    h: 5,
    status: "obs",
    id: "obs_5"
};
item6 = {
    x: 1210,
    y: 650,
    w: 160,
    h: 5,
    status: "obs",
    id: "obs_6"
};
item7 = {
    id: "mo_1",
    x: 650,
    y: 210,
    vX: 1,
    vY: 0,
    xMax: 1190,
    xMin: 650,
    yMax: 260,
    yMin: 150,
    w: 10,
    h: 190,
    status: "porteQuiSeDeplace",
    coefficients: cs,
    r: 0,
    g: 255,
    b: 0,
   
}




items = [item0, item1, item2, item3, item4, item5, item6, item7];

bonus0 = {
 x: 200,
     y: 200,
     w: 50,
     h: 50,
     status: "bfuel",
     id: "bfuel_1"
}

bonuses = [bonus0];

bfuel = 0;

const boom = new Audio();
const win = new Audio();
//Opening fadein ve fade out komutları "Çalışmıyor"

$(window).load(setTimeout(function () {
    $("#opening").fadeOut();
}, 3000));