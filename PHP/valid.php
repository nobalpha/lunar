<?php 
define("DB_HOST", "localhost");
define("DB_USER", "root");
define("DB_PASSWORD", "RoniKoluk2004");
define("DB_DATABASE", "gamer_info");

$conn = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_DATABASE);
//$sql = 'SELECT highscore FROM gamers WHERE nickname="loris";';
$sql_e = "SELECT * FROM gamers WHERE email='$email' AND nickname='$nick'";
$result = mysqli_query($conn,$sql_e);
session_start();
//$_SESSION['challenge'] += 1;
while($row = mysqli_fetch_array($result)) {
    $_SESSION['highscore'] = $row['highscore'];
    $hs = $row['highscore'];
}
if ($hs === NULL) {
    $hs = 1;
    $_SESSION['highscore'] = 1;
}
if ($_POST['start']) {
    $_SESSION['level'] = $hs;
    ?>
    <script>window.location.href= "level1.php";</script>
    <?php
}
else if ($_POST['lvl'] && $_SESSION['level'] < 4) {
    $_SESSION['level'] += 1;
    $hs = (int)$hs;
    $hs = $_SESSION['level'];
    $_SESSION['highscore'] = $hs;    
?>
<script>window.location.href= "level1.php";</script>
<?php 
}


else if ($_POST['chl'] && $_SESSION['challenge'] < 5) {
?>
<script>window.location.href= "challenge1.php"</script>
<?php 
}/*
else if ($_POST['lvl1']) {

}
else if ($_POST['lvl2']) {
    
}
else if ($_POST['lvl3']) {
    
}
else if ($_POST['lvl4']) {
    
}
*/
else { 
?>
<script>window.location.href= "comingsoon.php"</script>
<?php 
}
?>