<?php
$servername = "localhost";
$dbname = "gamer_list";
$username = "root";
$pass = "2Eba0vXb0yhx4";
$conn = new mysqli($servername, $username, $pass, $dbname);
session_start();    
$level = $_SESSION["level"];
$hs = $_SESSION['highscore']; 
$sql = 'UPDATE gamers SET highscore="' . $hs . '" '.'WHERE nickname="' . $_SESSION['nickname'] . '" AND ' . 'email="' . $_SESSION['email'] . '";';
if ($conn->query($sql) === TRUE) {
    echo "Record updated successfully";
}
else {
    echo $sql;
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <script src="JS/jquery.js"></script>
    <script src="JS/actions.js"></script>
    <script src="JS/controls.js"></script>
    <link rel="stylesheet" href="../CSS/level<?php echo $level; ?>.css">
    <link rel="stylesheet" href="../CSS/main.css">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Lunar</title>
</head>
<body>
    <!---- Oyun alanı -->
    <div id="canvas">
        <div id="opening">Mission Gagarin</div>
        <div id="game">
            <!---- Parametreler -->
            <div id="properties">
                <!---- Gösterilen yakıt seviyesi -->
                <img id="fuelimg" src="../Images/fuel.png">
                <div id="fuel"></div>
                <div id="fuelover">
                    <p>Fuel Over !</p>
                </div>
                <img src="../Images/shield.png" id="hpimg" class="hpimage">
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
        <!--  Pause div'i  -->
        <div id="pause" onclick="paused();">
            <img src="../Images/pause.png">
        </div>
        <div id="resume" onclick="resumed();">Resume</div>
        <!--  Reset atma div'i  -->
        <div id="restart" onclick="reset();">Restart</div>
        <div id="mainmenu" onclick="window.location.href='start.php'">Main Menu</div>
        <!---- Kaybetme mesajı -->
        <p id="gameover">Game Over!</p>
        <!---- Kazanma mesajı -->
        <p id="youwin">You Win!</p>
        <!---- Tekrar oynama düğmesi -->
        <p id="playagain" onclick="reset()">Play Again</p>
        <!--  Devam etme div'i  -->
        <form action="valid.php" method="post">
        <input type="submit" name="lvl" value="Continue" id="continue">
        </form>      
        <!---- Arkada sürekli oynayacak olan müzik -->
        <object id="music" data="../Sounds/level<?php echo $level; ?>.mp3" type="audio/mpeg" width="0" height="0">
            <param name="filename" value="../Sounds/level<?php echo $level;?>.mp3">
            <param name="autostart" value="1">
            <param name="playcount" value="true">
        </object>
    </div>
    <script src="JS/dessin.js"></script>
    <script src="JS/level<?php echo $level;?>.js"></script>
    <script src="JS/gameloop.js"></script>
</body>
</html>
