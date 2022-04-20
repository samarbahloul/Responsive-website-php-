<?php
$sname = "sql206.epizy.com";
$uname = "epiz_30148739";
$password = "HTLzPb0HiBxSX";

$db_name = "epiz_30148739_my_db";

$conn = mysqli_connect($sname, $uname, $password, $db_name);

if (!$conn) {
    echo "Connection Failed!";
    exit();
}
