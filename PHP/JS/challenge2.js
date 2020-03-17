// DeÄŸiÅŸkenler
var up = false,
    right = false,
    down = false,
    left = false,
    X = 200;
Y = 50;
vX = 0;
vY = 0;
hs = 106;
ws = 79;
fuel = 100;
hp = 60;
mv = 100;
space = "Images/level2ship.png";
spaceup = spacedown = spaceleft = spaceright = "Images/level2shipflame.png";
cs = 1;
boostq = 10;
nh = 44;
speedlimit = 3;
biglimitw = 89;
biglimith = 129;
smalllimitw = 31;
smalllimith = 71;

lock =10;

item0 = {
    x: 10,
    y: 300,
    w: 150,
    h: 10,
    status: "obs",
    id: "obs_1"
};

item1 = {
    x: 360,
    y: 300,
    w: 150,
    h: 10,
    status: "obs",
    id: "obs_2"
};


item2 = {
    x: 1060,
    y: 200,
    w: 350,
    h: 10,
    status: "obs",
    id: "obs_3"
};
item3 = {
    x: 10,
    y: 300,
    w: 10,
    h: 250,
    status: "obs",
    id: "obs_4"
};


item4 = {
    x: 510,
    y: 300,
    w: 10,
    h: 250,
    status: "obs",
    id: "obs_5"
};
item5 = {
    x: 1060,
    y: 200,
    w: 10,
    h: 190,
    status: "obs",
    id: "obs_6"
};
item6 = {
    x: 1410,
    y: 200,
    w: 10,
    h: 500,
    status: "obs",
    id: "obs_7"
};
item7 = {
    x: 1400,
    y: 400,
    w: 10,
    h: 150,
    status: "lan",
    id: "lan_1"
};
item8 = {
    id: "mo_1",
    x: 10,
    y: 310,
    vX: 20,
    vY: 0,
    xMax: 500,
    xMin: 20,
    yMax: 260,
    yMin: 150,
    w: 10,
    h: 240,
    status: "porteQuiSeDeplace",  
    coefficients: cs,  
     r: 0,
     g: 255,
     b: 0
};
item9 = {
    id: "mo_2",
    x: 1070,
    y: 700,
    vX: 0,
    vY: 10,
    xMax: 500,
    xMin: 20,
    yMax: 700,
    yMin: 200,
    w: 340,
    h: 10,
    status: "porteQuiSeDeplace",
    coefficients: cs,
    r: 0,
    g: 255,
    b: 0

};

item10 = {
    x: 1060,
    y: 390,
    w: 10,
    h: 170,
    status: "lock",
    id: "lock_1",
    effect: "horizontalpush"
};

item11 = {
    x: 1060,
    y: 560,
    w: 10,
    h: 140,
    status: "obs",
    id: "obs_10"
};
item12 = {
    x: 10,
    y: 550,
    w: 510,
    h: 10,
    status: "obs",
    id: "obs_11"
};
item13 = {
    x: 1060,
    y: 700,
    w: 360,
    h: 10,
    status: "obs",
    id: "obs_12"
};
item14 = {
    x: 0,
    y: 750,
    w: 1880,
    h: 10,
    status: "obs",
    id: "obs_13"
};


items = [item0, item1, item2, item3, item4, item5, item6, item7, item8, item9, item10, item11, item12, item13, item14];

bonus0 = {
    x: 600,
    y: 200,
    w: 44,
    h: 76,
    status: "ts",
    id: "ts_1"
}
bonus1 = {
    x: 220,
    y: 400,
    w: 48,
    h: 48,
    status: "key",
    id: "key_1"
}
bonus2 = {
    x: 800,
    y: 340,
    w: 50,
    h: 50,
    status: "bfuel",
    id: "bfuel_1"
}

bonuses = [bonus0 , bonus1 , bonus2];

timelapse = 0;
key = 1;
bfuel = 2;

const boom = new Audio();
const win = new Audio();

//Opening fade out komutu

$(window).load(setTimeout(function () {
    $("#opening").fadeOut();
}, 3000));
