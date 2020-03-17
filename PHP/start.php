<?php
session_start();
$_SESSION["challenge"] = 1;
if (!isset($_SESSION["nickname"])) {
    ?>
    <script>
    window.location = "../HTML/index.html";
    </script>
    <?php
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <script src="JS/jquery.js"></script>
    <link rel="stylesheet" href="../CSS/main.css">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Lunar</title>
</head>
<body>
    <!---- Oyun alanı -->
    <div id="canvas">
       <p><?= $_SESSION["nickname"]; ?></p>
        <!---- Başlama düğmesi --> 
        <form action="valid.php" method="post">
        <input type="submit" name="start" value="Story" id="story">
        </form> 
        <p id="challange" onclick="window.location.href='../PHP/challenge1.php'">
            <!----Başlama düğmesi animasyonu -->
            <svg id="y" viewBox="0 0 960 500">
                <symbol id="s-text2">
                    <text text-anchor="middle" x="40%" y="25%">Challanges</text>
                </symbol>
                <g class="g-ants2">
                    <use xlink:href="#s-text2" class="text-copy2"></use>
                    <use xlink:href="#s-text2" class="text-copy2"></use>
                    <use xlink:href="#s-text2" class="text-copy2"></use>
                    <use xlink:href="#s-text2" class="text-copy2"></use>
                    <use xlink:href="#s-text2" class="text-copy2"></use>
                </g>
            </svg>
        </p>
         <p id="help" onclick="window.location.href='../PHP/help.php'">
             <!----Başlama düğmesi animasyonu -->
             <svg id="y" viewBox="0 0 960 500">
                 <symbol id="s-text3">
                     <text text-anchor="middle" x="23%" y="25%">Help</text>
                 </symbol>
                 <g class="g-ants3">
                     <use xlink:href="#s-text3" class="text-copy3"></use>
                     <use xlink:href="#s-text3" class="text-copy3"></use>
                     <use xlink:href="#s-text3" class="text-copy3"></use>
                     <use xlink:href="#s-text3" class="text-copy3"></use>
                     <use xlink:href="#s-text3" class="text-copy3"></use>
                 </g>
             </svg>
         </p>
        <!---- Arkada sürekli oynayacak olan müzik -->
        <object id="music" data="../Sounds/mainmenu.mp3" type="audio/mp3" width="0" height="0">
            <param name="filename" value="../Sounds/mainmenu.mp3">
            <param name="autostart" value="1">
            <param name="playcount" value="true">
        </object>
    </div>
</body>

</html>