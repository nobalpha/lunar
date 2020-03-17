// Değişkenler
var up = false,
    right = false,
    down = false,
    left = false,
    X = 200;
Y = 50;
vX = 0;
vY = 0;
hs =  71;
ws =  73;
fuel = 120;
res = 100;
mv = 100;
space = "Images/level2ship.png";
spaceup = "Images/up.png";
spaceright = "Images/right.png";
spaceleft = "Images/left.png";
spacedown = "Images/down.png";
boostq = 40;
nh = 0;
speedlimit = 3;


item0 = {x:500 , y:100 , w:50 , h:50 , status: "bfuel" , id:"bfuel_1"};

//İniş alanı
item1 = {x:500 , y:700 , w:20 , h:110 , status: "lan" , id:"lan"};

//ENGELLER

//Sağ üst kutumsu şey :)
item7 = {x:1150 , y:10 , w:120 , h:5 , status: "obs" , id:"obs_1"};
item13 = {x:1150 , y:150 , w:120 , h:5 , status: "obs" , id:"obs_2"};
item5 = {x:1270 , y:10, w:5 , h:145 , status: "obs" , id:"obs_3"};


//Sol üstteki ilk engel
item6 = {x:0 , y:230, w:500 , h:10 , status: "obs" , id:"obs_4"};
//Sağ üstteki horizontal engel
item9 = {x:705 , y:230 , w:750 , h:10 , status: "obs" , id:"obs_5"};
//C engelin ilk düzlüğü
item11 = {x:100 , y:350, w:520 , h:10 , status: "obs" , id:"obs_6"};
//C engelin omurgası
item12 = {x:100 , y:350, w:10 , h:460 , status: "obs" , id:"obs_7"};
//C engelin ilk düzlüğünün kapatıcısı
item14 = {x:220 , y:470 , w:400 , h:10 , status: "obs" , id:"obs_8"};
//C engelin içerdeki omurgası
item15 = {x:220 , y:470 , w:10 , h:225 , status: "obs" , id:"obs_9"};
//C engelin alt düzlüğünün kapatıcısı
item16 = {x:220 , y:690 , w:300 , h:10 , status: "obs" , id:"obs_10"};
//C engelin alt düzlüğü
item17 = {x:100 , y:810 , w:420 , h:10 , status: "obs" , id:"obs_11"};




//C engelinin kapatıcısı
item8 = {x:520 , y:690 , w:10 , h:130 , status: "obs" , id:"obs_12"};

item19 =  {x:300 , y:400 , w:28 , h:28 , status: "key" , id:"key_2"};


//Kutunun içindeki anahtar
item18 = {x:1180 , y:60 , w:48 , h:48 , status: "key" , id:"key_1"};



item10 = {x:530 , y:690 , w:840 , h:10 , status: "obs" , id:"obs_14"};


item4 = {x:0 , y:690 , w:100 , h:10 , status: "obs" , id:"obs_13"};



//İlk anahtar gerektiren engel
item2 = {x:500 , y:230 , w:205 , h:10 , status: "lock" , id:"lock_1" , effect: "verticaljumpup"};
//İniş alanından önceki anahtar gerektiren engel
item3 = {x:480 , y:700 , w:20 , h:110 , status: "lock" , id:"lock_2" , effect: "horizontalpushleft"};

//Küçülme iksiri
item21 = {x:30 , y:90 , w:50 , h:50 , status: "petit" , id:"petit_1"};

item20 = {
    x: 800,
    y: 300,
    w: 100,
    h: 100,
    status: "petit",
    id: "petit_1" ,
    action: "petit" ,
    job: "size"
};

//Dans eden obs
//item8={id:"mo_1",x:100, y:200, vX:1,vY:2,xMax:200,xMin:70,yMax:260,yMin:150,w:10,h:200,status:"porteQuiSeDeplace" , effect: "horizontal"}




items = [item0 , item1 , item2 , item3 ,item4 , item5, item6 , item7 , item8, item9, item10 , item11 , item12 , item13 , item14 , item15 , item16 , item17 , item18 , item19 , item20 , item21];

const boom = new Audio();
const win = new Audio();

$(window).load(setTimeout(function () {
    $("#opening").fadeOut();
}, 3000));
