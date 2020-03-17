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
$firstname = $_POST['fname'];
$lastname = $_POST['lname'];
$pass = sha1($_POST['password']);
$email = $_POST['email'];
$nickname = $_POST['nick'];
echo nl2br("[OK] Değişkenler tanımlandı. \n");

function addClient($first, $last, $email, $pswd, $nick) {
    // Create connection
    $conn = new SQLite3("../gamer_list");
    echo nl2br("[OK] Database ile iletişim başladı.\n");

    $check_query = "SELECT * FROM gamers WHERE email='$email'";
    echo nl2br("[OK] Query tanımlandı.\n");

    $result = $conn->query($check_query);
    echo nl2br("[OK] Query sorgulandı. \n");

    $insertion_query = "INSERT INTO gamers (fname, lname, email, passwd, nick) VALUES ('$first', '$last', '$email', '$pswd', '$nick');";
    echo nl2br("[OK] Insertion Query tanımlandı. \n");

    if ($row = $result->fetchArray()) {
        echo nl2br("[Check] Kullanıcı zaten tanımlı! \n");
        ?>
        <script>
        timeout(3,"User already in exists. Redirecting to the login page in ", "../HTML/index.html");
        </script>
        <?php
    }
    else {
        echo nl2br("[Check] Yeni kullanıcı tanımlandı. \n");

        if ($conn->exec($insertion_query)) {

            echo nl2br("[OK] Kullanıcı girişi yapıldı. \n");

            ?> 
            <script>
            timeout(3,"New record created successfully. Redirecting to the main page in ", "../PHP/start.php");
            </script>
            <?php

        } else {
            echo nl2br("[Error] Kullanıcı girişi başarısız! \n");
            echo "[Log]: " . $insertion_query . "<br>" . $conn->lastErrorMsg;

        }
        $conn->close();
    }
}

addClient($firstname,$lastname,$email,$pass,$nickname);

?>
