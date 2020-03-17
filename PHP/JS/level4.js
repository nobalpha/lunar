// Değişkenler
var up = false,
    right = false,
    down = false,
    left = false,
    X = 200;
Y = 50;
vX = 0;
vY = 0;
hs = 71;
ws = 73;
fuel = 200;
hp = 300;
mv = 1;
space = "Images/level3ship.png";
spaceup = "Images/up.png";
spaceright = "Images/right.png";
spaceleft = "Images/left.png";
spacedown = "Images/down.png";
boostq = 40;
nh = 0;
speedlimit = 3;



//İniş alanı
item0 = {
    x: 500,
    y: 700,
    w: 20,
    h: 110,
    status: "lan",
    id: "lan"
};

//ENGELLER

//Sağ üst kutumsu şey :)
item1 = {
    x: 1150,
    y: 10,
    w: 120,
    h: 5,
    status: "obs",
    id: "obs_1"
};
item2 = {
    x: 1150,
    y: 150,
    w: 120,
    h: 5,
    status: "obs",
    id: "obs_2"
};
item3 = {
    x: 1270,
    y: 10,
    w: 5,
    h: 145,
    status: "obs",
    id: "obs_3"
};


//Sol üstteki ilk engel
item4 = {
    x: 0,
    y: 230,
    w: 500,
    h: 10,
    status: "obs",
    id: "obs_4"
};
//Sağ üstteki horizontal engel
item5 = {
    x: 705,
    y: 230,
    w: 750,
    h: 10,
    status: "obs",
    id: "obs_5"
};
//C engelin ilk düzlüğü
item6 = {
    x: 100,
    y: 350,
    w: 520,
    h: 10,
    status: "obs",
    id: "obs_6"
};
//C engelin omurgası
item7 = {
    x: 100,
    y: 350,
    w: 10,
    h: 460,
    status: "obs",
    id: "obs_7"
};
//C engelin ilk düzlüğünün kapatıcısı
item8 = {
    x: 220,
    y: 470,
    w: 400,
    h: 10,
    status: "obs",
    id: "obs_8"
};
//C engelin içerdeki omurgası
item9 = {
    x: 220,
    y: 470,
    w: 10,
    h: 225,
    status: "obs",
    id: "obs_9"
};
//C engelin alt düzlüğünün kapatıcısı
item10 = {
    x: 220,
    y: 690,
    w: 300,
    h: 10,
    status: "obs",
    id: "obs_10"
};
//C engelin alt düzlüğü
item11 = {
    x: 100,
    y: 810,
    w: 420,
    h: 10,
    status: "obs",
    id: "obs_11"
};




//C engelinin kapatıcısı
item12 = {
    x: 520,
    y: 690,
    w: 10,
    h: 130,
    status: "obs",
    id: "obs_12"
};



item13 = {
    x: 530,
    y: 690,
    w: 840,
    h: 10,
    status: "obs",
    id: "obs_14"
};


item14 = {
    x: 0,
    y: 690,
    w: 100,
    h: 10,
    status: "obs",
    id: "obs_13"
};



//İlk anahtar gerektiren engel
item15 = {
    x: 500,
    y: 230,
    w: 205,
    h: 10,
    status: "lock",
    id: "lock_1",
};
//İniş alanından önceki anahtar gerektiren engel
item16 = {
    x: 480,
    y: 700,
    w: 20,
    h: 110,
    status: "lock",
    id: "lock_2",
};




item17 = {
    x: 620,
    y: 350,
    w: 10,
    h: 130,
    status: "control",
    id: "controls_1",
    control: "small"
}





items = [item0, item1, item2, item3, item4, item5, item6, item7, item8, item9, item10, item11, item12, item13, item14, item15, item16, item17];

bonus0 = {
    x: 60,
    y: 120,
    w: 30,
    h: 40,
    status: "petit",
    id: "petit_1",
    action: "petit",
    job: "size"
}
bonus1 = {
    x: 500,
    y: 100,
    w: 50,
    h: 50,
    status: "bfuel",
    id: "bfuel_1"
}
bonus2 = {
    x: 1180,
    y: 60,
    w: 48,
    h: 48,
    status: "key",
    id: "key_1"
}
bonus3 = {
    x: 800,
    y: 300,
    w: 100,
    h: 100,
    status: "hp",
    id: "hp_1"
}
bonus4 = {
    x: 700,
    y: 400,
    w: 28,
    h: 28,
    status: "key",
    id: "key_2"
}

bonuses = [bonus0 , bonus1 , bonus2 , bonus3 , bonus4];

petit = 0;
bfuel = 1;
key1 = 2;
lock = 15;
health = 3;
key2  = 4;
lock2 = 16 ;

const boom = new Audio();
const win = new Audio();

$(window).load(setTimeout(function () {
    $("#opening").fadeOut();
}, 3000));

