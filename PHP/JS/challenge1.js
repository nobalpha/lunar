

var up = false,
right = false,
down = false,
left = false,
X = 200;
Y = 50;
vX = 0;
vY = 0;
hs = 100;
ws = 60;
fuel = 300;
hp = 500;
mv = 100;
cs= 1;
taille = "normal";
space = "Images/level1ship.png";
spaceup = spacedown = spaceleft = spaceright = "Images/level1shipflame.png";

boostq = 10;
nh = 19;
speedlimit = 3;
biglimitw = 89;
biglimith = 129;
smalllimitw = 31;
smalllimith = 71;





item0 = {
x: 10,
y: 200,
w: 10,
h: 170,
status: "obs",
id: "obs_1"
};
item1 = {
x: 10,
y: 370,
w: 500,
h: 10,
status: "obs",
id: "obs_2"
};
item2 = {
x: 510,
y: 370,
w: 10,
h: 160,
status: "obs",
id: "obs_13"
}
item3 = {
x: 510,
y: 530,
w: 210,
h: 10,
status: "obs",
id: "obs_14"
}
item4 = {
x: 710,
y: 370,
w: 10,
h: 160,
status: "obs",
id: "obs_15"
}
item5 = {
x: 710,
y: 370,
w: 800,
h: 10,
status: "obs",
id: "obs_16"
}
item6 = {
x: 350,
y: 200,
w: 810,
h: 10,
status: "obs",
id: "obs_3"
};
item7 = {
x: 1150,
y: 40,
w: 10,
h: 160,
status: "obs",
id: "obs_17"
};
item8 = {
x: 1150,
y: 40,
w: 210,
h: 10,
status: "obs",
id: "obs_18"
};
item9 = {
x: 1360,
y: 40,
w: 10,
h: 160,
status: "obs",
id: "obs_19"
};
item10 = {
x: 1360,
y: 200,
w: 450,
h: 10,
status: "obs",
id: "obs_20"
};
item11 = {
x: 1810,
y: 200,
w: 10,
h: 180,
status: "obs",
id: "obs_21"
};
item12 = {
x: 1650,
y: 370,
w: 170,
h: 10,
status: "obs",
id: "obs_22"
};
item13 = {
x: 1650,
y: 370,
w: 10,
h: 180,
status: "obs",
id: "obs_4"
};
item14 = {
x: 1500,
y: 370,
w: 10,
h: 180,
status: "obs",
id: "obs_5"
};
item15 = {
x: 1650,
y: 550,
w: 150,
h: 10,
status: "obs",
id: "obs_6"
};
item16 = {
x: 400,
y: 550,
w: 1110,
h: 10,
status: "obs",
id: "obs_7"
};

item17 = {
x: 410,
y: 550,
w: 10,
h: 200,
status: "lan",
id: "lan_1"
};

item18 = {
x: 400,
y: 750,
w: 1110,
h: 10,
status: "obs",
id: "obs_10"
};
item19 = {
x: 1500,
y: 550,
w: 10,
h: 210,
status: "control",
id: "controlb_1",
control: "big"
};
item20 = {
x: 1500,
y: 750,
w: 10,
h: 100,
status: "obs",
id: "obs_11"
};
item21 = {
x: 1500,
y: 850,
w: 310,
h: 10,
status: "obs",
id: "obs_12"
};
item22 = {
x: 400,
y: 550,
w: 10,
h: 200,
status: "obs",
id: "obs_8"
};
item23 = {
x: 1800,
y: 550,
w: 10,
h: 300,
status: "obs",
id: "obs_9"
};
item24 = {
id: "mo_1",
x: 10,
y: 200,
vX: 1,
vY: 0,
xMax: 1650,
xMin: 10,
yMax: 260,
yMin: 150,
w: 10,
h: 170,
status: "porteQuiSeDeplace",
coefficients: cs,
r: 0,
g: 255,
b: 0
}
item25 = {
id: "mo_2",
x: 1500,
y: 840,
vX: 0,
vY: 1,
xMax: 1800,
xMin: 1600,
yMax: 840,
yMin: 210,
w: 150,
h: 10,
status: "porteQuiSeDeplace",
coefficients: cs,
r: 0,
g: 255,
b: 0

}












bonus0 = {
x: 1720,
y: 720,
w: 32,
h: 120,
status: "reciever",
id: "r_1"
}
bonus1 = {
x: 1720,
y: 600,
w: 50,
h: 50,
status: "grand",
id: "grand_1",
action: "grand",
job: "size"
}
bonus2 = {
x: 1700,
y: 230,
w: 32,
h: 120,
status: "sender",
id: "s_1"
}
bonus3 = {
x: 1230,
y: 100,
w: 70,
h: 70,
status: "bfuel",
id: "bfuel_1"
}
bonus4 = {
x: 1200,
y: 270,
w: 50,
h: 50,
status: "petit",
id: "petit_1",
action: "petit",
job: "size"
}
bonus5 = {
x: 600,
y: 420,
w: 44,
h: 76,
status: "ts",
id: "ts_1"
}


items = [item0, item1, item2, item3, item4, item5, item6, item7, item8, item9, item10, item11, item12, item13, item14, item15, item16, item17, item18, item19, item20, item21, item22, item23, item24, item25];
bonuses = [bonus0 , bonus1 , bonus2 , bonus3 , bonus4 , bonus5];

timelapse = 5;
petit = 4;
bfuel = 3;
sender = 2;
grand = 1;
reciever = 0;

const boom = new Audio();
const win = new Audio();

//Opening fade out komutu

$(window).load(setTimeout(function () {
$("#opening").fadeOut();
}, 3000));
