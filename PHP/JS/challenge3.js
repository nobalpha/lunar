// Değişkenler
var up = false,
    right = false,
    down = false,
    left = false,
    X = 1000;
Y = 30;
vX = 0;
vY = 0;
hs = 71;
ws = 73;
nh = 0;
fuel = 100;
hp = 70;
mv = 100;
boostq = 20;
cs=1;
spaceup = "Images/up.png"
spacedown = "Images/down.png"
spaceleft = "Images/left.png"
spaceright = "Images/right.png"
space = "Images/level3ship.png"
speedlimit = 1.5;

item0 = {
    x: 200,
    y: 200,
    w: 600,
    h: 10,
    status: "obs",
    id: "obs_1"
};
item1 = {
    x: 200,
    y: 200,
    w: 10,
    h: 250,
    status: "obs",
    id: "obs_2"
};
item2 = {
    x: 310,
    y: 320,
    w: 10,
    h: 130,
    status: "obs",
    id: "obs_3"
};
item3 = {
    x: 310,
    y: 320,
    w: 490,
    h: 10,
    status: "obs",
    id: "obs_4"
};
item4 = {
    id: "mo_1",
    x: 800,
    y: 15,
    vX: 0,
    vY: 5,
    xMax: 500,
    xMin: 20,
    yMax: 360,
    yMin: 10,
    w: 10,
    h: 140,
    status: "porteQuiSeDeplace",
    coefficients: cs,
    r: 0,
    g: 255,
    b: 0

}
item5 = {
    x: 200,
    y: 320,
    w: 110,
    h: 10,
    status: "control",
    id: "controls_1",
    control: "small"

}
item6 = {
    x: 150,
    y: 500,
    w: 10,
    h: 150,
    status: "obs",
    id: "obs_4"
};

item7 = {
    x: 150,
    y: 650,
    w: 210,
    h: 10,
    status: "obs",
    id: "obs_5"
};


item8 = {
    x: 350,
    y: 500,
    w: 10,
    h: 150,
    status: "obs",
    id: "obs_6"
};

item9 = {
    id: "mo_2",
    x: 0,
    y: 470,
    vX: 5,
    vY: 0,
    xMax: 420,
    xMin: 0,
    yMax: 360,
    yMin: 10,
    w: 140,
    h: 10,
    status: "porteQuiSeDeplace",
    coefficients: cs,
    r:0 ,
    g:255 ,
    b:0    
}
item10 = {
    x: 150,
    y: 640,
    w: 200,
    h: 10,
    status: "lan",
    id: "lan_1"
}

items = [item0, item1, item2, item3, item4, item5, item6, item7, item8, item9, item10];

bonus0 = {
    x: 900,
    y: 200,
    w: 44,
    h: 76,
    status: "ts",
    id: "ts_1",
}
bonus1 = {
    x: 400,
    y: 240,
    w: 50,
    h: 50,
    status: "petit",
    id: "petit_1",
    action: "petit",
    job: "size"
}


bonuses = [bonus0 , bonus1];

timelapse = 0;
petit = 1;

const boom = new Audio();
const win = new Audio();
//Opening fadein ve fade out komutları "Çalışmıyor"

$(window).load(setTimeout(function () {
    $("#opening").fadeOut();
}, 3000));