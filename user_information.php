<?php
include "./db_conn.php";
$name = $_POST['name'];
$lname = $_POST['lname'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$radio = $_POST['radio'];
$object = $_POST['object'];
$etat_tache = $_POST['etat_tache'];
$description = $_POST['description'];
$query = "INSERT INTO contact (name,lname,email,phone,radio,object,etat_tache,description) VALUES ('$name','$lname','$email','$phone','$radio','$object','$etat_tache','$description') ";
mysqli_query($conn, $query);
echo "Message sent";
