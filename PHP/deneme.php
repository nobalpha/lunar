<?php 
$db = new SQLite3("../gamer_list");
$query = $db->query("SELECT * FROM gamers");

if ($row = $query->fetchArray()) {
    if($row['id'] == 1){
        echo "{$row['id']} {$row['fname']}";
    } else {
        echo "fuck off";
    }
} else {
    echo "hey";
}

?>