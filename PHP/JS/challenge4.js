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
fuel = 300;
hp = 70;
mv = 100;
boostq = 20;
cs=1;
spaceup = "Images/up.png"
spacedown = "Images/down.png"
spaceleft = "Images/left.png"
spaceright = "Images/right.png"
space = "Images/level3ship.png"
speedlimit = 4;
hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';


$('#mo_1').css("background-color", hue);
$('#mo_2').css("background-color", hue);
$('#mo_3').css("background-color", hue);
$('#mo_4').css("background-color", hue);


item0 = {

    x: 600,
    y: 300,
    w: 70,
    h: 70,
    status: "lan",
    id: "lan_1"


}
item1 = {
    id: "mo_1",
    x: 500,
    y: 250,
    vX: Math.floor(Math.random() * 10) + 1,
    vY: Math.floor(Math.random() * 10) + 1,
    xMax: Math.floor(Math.random() * 800) + 600,
    xMin: Math.floor(Math.random() * 500) + 100,
    yMax: Math.floor(Math.random() * 400) + 200,
    yMin: Math.floor(Math.random() * 100),
    w: Math.floor(Math.random() * 100) + 30,
    h: Math.floor(Math.random() * 100) + 30,
    status: "porteQuiSeDeplace",
    r: (Math.floor(Math.random() * 256)),
    g: (Math.floor(Math.random() * 256)),
    b: (Math.floor(Math.random() * 256)),
    coefficients: cs

}

item2 = {
    id: "mo_2",
    x: 700,
    y: 250,
    vX: Math.floor(Math.random() * 10) + 1,
    vY: Math.floor(Math.random() * 10) + 1,
    xMax: Math.floor(Math.random() * 800) + 600,
    xMin: Math.floor(Math.random() * 500) + 100,
    yMax: Math.floor(Math.random() * 400) + 200,
    yMin: Math.floor(Math.random() * 100),
    w: Math.floor(Math.random() * 100) + 30,
    h: Math.floor(Math.random() * 100) + 30,
    status: "porteQuiSeDeplace",
    r: (Math.floor(Math.random() * 256)),
    g: (Math.floor(Math.random() * 256)),
    b: (Math.floor(Math.random() * 256)),
    coefficients: cs,

}
item3 = {
    id: "mo_3",
    x: 500,
    y: 400,
    vX: Math.floor(Math.random() * 10) + 1,
    vY: Math.floor(Math.random() * 10) + 1,
    xMax: Math.floor(Math.random() * 800) + 600,
    xMin: Math.floor(Math.random() * 500) + 100,
    yMax: Math.floor(Math.random() * 400) + 200,
    yMin: Math.floor(Math.random() * 100),
    w: Math.floor(Math.random() * 100) + 30,
    h: Math.floor(Math.random() * 100) + 30,
    status: "porteQuiSeDeplace",
    r: (Math.floor(Math.random() * 256)),
    g: (Math.floor(Math.random() * 256)),
    b: (Math.floor(Math.random() * 256)),
    coefficients: cs,

}
item4 = {
    id: "mo_4",
    x: 700,
    y: 400,
    vX: Math.floor(Math.random() * 10) + 1,
    vY: Math.floor(Math.random() * 10) + 1,
    xMax: Math.floor(Math.random() * 800) + 600,
    xMin: Math.floor(Math.random() * 500) + 100,
    yMax: Math.floor(Math.random() * 400) + 200,
    yMin: Math.floor(Math.random() * 100),
    w: Math.floor(Math.random() * 100) + 30,
    h: Math.floor(Math.random() * 100) + 30,
    status: "porteQuiSeDeplace",
    r: (Math.floor(Math.random() * 256)),
    g: (Math.floor(Math.random() * 256)),
    b: (Math.floor(Math.random() * 256)),
    coefficients: cs,

}
item5 = {
    id: "mo_5",
    x: 500,
    y: 250,
    vX: Math.floor(Math.random() * 10) + 1,
    vY: Math.floor(Math.random() * 10) + 1,
    xMax: Math.floor(Math.random() * 800) + 600,
    xMin: Math.floor(Math.random() * 500) + 100,
    yMax: Math.floor(Math.random() * 400) + 200,
    yMin: Math.floor(Math.random() * 100),
    w: Math.floor(Math.random() * 100) + 30,
    h: Math.floor(Math.random() * 100) + 30,
    status: "porteQuiSeDeplace",
    r: (Math.floor(Math.random() * 256)),
    g: (Math.floor(Math.random() * 256)),
    b: (Math.floor(Math.random() * 256)),
    coefficients: cs,

}
item6 = {
    id: "mo_6",
    x: 700,
    y: 250,
    vX: Math.floor(Math.random() * 10) + 1,
    vY: Math.floor(Math.random() * 10) + 1,
    xMax: Math.floor(Math.random() * 800) + 600,
    xMin: Math.floor(Math.random() * 500) + 100,
    yMax: Math.floor(Math.random() * 400) + 200,
    yMin: Math.floor(Math.random() * 100),
    w: Math.floor(Math.random() * 100) + 30,
    h: Math.floor(Math.random() * 100) + 30,
    status: "porteQuiSeDeplace",
    r: (Math.floor(Math.random() * 256)),
    g: (Math.floor(Math.random() * 256)),
    b: (Math.floor(Math.random() * 256)),
    coefficients: cs,

}
item7 = {
    id: "mo_7",
    x: 500,
    y: 400,
    vX: Math.floor(Math.random() * 10) + 1,
    vY: Math.floor(Math.random() * 10) + 1,
    xMax: Math.floor(Math.random() * 800) + 600,
    xMin: Math.floor(Math.random() * 500) + 100,
    yMax: Math.floor(Math.random() * 400) + 200,
    yMin: Math.floor(Math.random() * 100),
    w: Math.floor(Math.random() * 100) + 30,
    h: Math.floor(Math.random() * 100) + 30,
    status: "porteQuiSeDeplace",
    r: (Math.floor(Math.random() * 256)),
    g: (Math.floor(Math.random() * 256)),
    b: (Math.floor(Math.random() * 256)),
    coefficients: cs,

}
item8 = {
    id: "mo_8",
    x: 700,
    y: 400,
    vX: Math.floor(Math.random() * 10) + 1,
    vY: Math.floor(Math.random() * 10) + 1,
    xMax: Math.floor(Math.random() * 800) + 600,
    xMin: Math.floor(Math.random() * 500) + 100,
    yMax: Math.floor(Math.random() * 400) + 200,
    yMin: Math.floor(Math.random() * 100),
    w: Math.floor(Math.random() * 100) + 30,
    h: Math.floor(Math.random() * 100) + 30,
    status: "porteQuiSeDeplace",
    r: (Math.floor(Math.random() * 256)),
    g: (Math.floor(Math.random() * 256)),
    b: (Math.floor(Math.random() * 256)),
    coefficients: cs,

}

item9 = {
    x: 0,
    y: 686,
    w: 1375,
    h: 5,
    status: "obs",
    id: "obs_1"
}
item10 = {
    x: 1370,
    y: 0,
    w: 5,
    h: 690,
    status: "obs",
    id: "obs_2"
}



items = [item0, item1 , item2 , item3 , item4 , item5 , item6 , item7 , item8 , item9 , item10 ];

bonus0 = {
    x: 600,
    y: 200,
    w: 44,
    h: 76,
    status: "ts",
    id: "ts_1",
}
bonuses = [bonus0];

timelapse = 0;

const boom = new Audio();
const win = new Audio();
//Opening fadein ve fade out komutları "Çalışmıyor"

$(window).load(setTimeout(function () {
    $("#opening").fadeOut();
}, 3000));