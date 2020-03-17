<!--
    Yapılacakalar
    #############
    XSS kormuası
    Injection koruması
    timeout fonksiyonunu external js dosyasından import etme
    eğer login olduysa -yani cookie dolu ise- direkt start.php redirection
    



 -->


<?php
session_start();
?>
<html>
    <body>
        <p></p>
    </body>
</html>
<script src="JS/jquery.js"></script>


<script>
function timeout(sec, text, loc) {
    setTimeout(function() {
    if(sec != 0) {$("p").html(text + sec); timeout(sec - 1, text, loc);} 
    else { window.location.href=loc; }
}, 1000);
}
</script>


<?php
$email = $_POST['email'];
$pass = $_POST['password'];
echo nl2br("[OK] Değişkenler tanımlandı. \n");

function checkClient($email, $pswd) {
    // Create connection
    $conn = new SQLite3("../gamer_list");
    echo nl2br("[OK] Database ile iletişim başladı.\n");

    $sql_e = "SELECT * FROM gamers WHERE email='$email'";
    echo nl2br("[OK] Query tanımlandı.\n");

    $result = $conn->query($sql_e);
    echo nl2br("[OK] Query sorgulandı. \n");


    if ($row = $result->fetchArray()) {

        if($row['passwd'] === sha1($pswd)) {
            echo nl2br("[OK] Kullanıcı girişi başarılı. \n");

            echo "Welcome" . $row['nick'];
            $_SESSION["nick"] = $row["nick"];
            $_SESSION["email"] = $row["email"];
            echo nl2br("[OK] Değişkenler tanımlandı. \n");

        ?>
            <script>timeout(3, "Access granted. Redirecting to the start page in ","../PHP/start.php");</script>
        <?php
        }
        else {
            echo nl2br("[Error] Kullanıcı girişi başarısız! \n");
            ?>
            <script>timeout(3, "Access denied. Email or password is incorrect. Redirecting to the login page in ","../HTML/index.html");</script>
            <?php
        }
    }
    else {
        echo nl2br("[Error] Kullanıcı mevcut değil! \n");
        ?>
        <script>timeout(3, "No user found. Redirecting to the register page in " ,"../HTML/register.html");</script>
        <?php
    }
}//.checkclient


checkClient($email,$pass);
?>
