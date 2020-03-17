// Değişkenler
var up = false,
    right = false,
    down = false,
    left = false,
    X = 800;
Y = 50;
vX = 0;
vY = 0;
hs = 100;
ws = 60;
nh = 18;
fuel = 100;
mv = 100;
hp = 100;
boostq = 50;
speedlimit = 5;
space = "../Images/level1ship.png";
spaceup = spacedown = spaceleft = spaceright = "../Images/level1shipflame.png";
item0 = {
    x: 0,
    y: 250,
    w: 290,
    h: 15,
    status: "obs",
    id: "obs_1"
};
item1 = {
    x: 500,
    y: 380,
    w: 870,
    h: 15,
    status: "obs",
    id: "obs_2"
};
item2 = {
    x: 395,
    y: 586,
    w: 110,
    h: 10,
    status: "lan",
    id: "lan"
};
item3 = {
    x: 0,
    y: 591,
    w: 360,
    h: 5,
    status: "obs",
    id: "obs_3"
};
item4 = {
    x: 540,
    y: 591,
    w: 840,
    h: 5,
    status: "obs",
    id: "obs_4"
};
items = [item0, item1, item2, item3, item4];
bonuses = [];
const boom = new Audio();
const win = new Audio();

//Opening fade out komutu

$(window).load(setTimeout(function () {
    $("#opening").fadeOut();
}, 3000));
