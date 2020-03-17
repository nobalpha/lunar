<?php
session_start();    
$challenge = $_SESSION["challenge"]; 
echo $challenge;
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <script src="JS/jquery.js"></script>
    <script src="JS/actions.js"></script>
    <script src="JS/controls.js"></script>

    <link rel="stylesheet" href="../CSS/challenge1.css">
    <link rel="stylesheet" href="../CSS/main.css">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Lunar</title>


</head>

<body>
    <!---- Oyun alanı -->
    <div id="canvas">
        <div id="opening">C Function</div>

        <div id="game">

            <!--<div id="bfueldiv"><img id="bfuel_1" src="Images/bfuel.png"></div>

            <div id="petit_1" class="potion"><img id="petit_1" src="Images/petit.png"></div>
            <div class="keydiv"><img id="key_1" src="Images/key.png"></div>
            <div class="keydiv"><img id="key_2" src="Images/key.png"></div>
            <div id="lan"></div>-->

            <!---- Parametreler -->
            <div id="properties">
                <!---- Gösterilen yakıt seviyesi -->

                <img id="fuelimg" src="../Images/fuel.png">
                <div id="fuel"></div>
                <div id="fuelover">
                    <p>Fuel Over !</p>
                </div>
                <img src="../Images/shield.png" id="hpimg" class= "hpimage">
                <div id="hp"></div>
                <p id="vs">Speed</p>
                <div id="speed"></div>
                <p id="boostbar">Speed Boost</p>
                <div id="boost"></div>
            </div>
            <!---- Uzay aracı -->
            <div id="spaceship">
            </div>
        </div>
        <div id="pause" onclick="paused();">
            <img src="../Images/pause.png">
        </div>
        <div id="resume" onclick="resumed();">Resume</div>
        <div id="restart" onclick="reset();">Restart</div>
        <!---- Kaybetme mesajı -->
        <p id="gameover">Game Over!</p>
        <!---- Kazanma mesajı -->
        <p id="youwin">You Win!</p>
        <!---- Tekrar oynama düğmesi -->
        <p id="playagain" onclick="reset()">Play Again</p>
        <form action="valid.php" method="post">
        <input type="submit" name="chl" value="Continue" id="continue">
        </form>
        <!---- Arkada sürekli oynayacak olan müzik -->
        <object id="music" data="../Sounds/level3.mp3" type="audio/mpeg" width="0" height="0">
            <param name="filename" value="../Sounds/level3.mp3">
            <param name="autostart" value="1">
            <param name="playcount" value="true">
        </object>
    </div>
    <script src="JS/dessin.js"></script>
    <script src="JS/challenge<?php echo $_SESSION["challenge"]; ?>.js"></script>
    <script src="JS/gameloop.js"></script>
</body>

</html>
