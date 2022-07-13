<?php


$servername = "localhost";
$username = "root";
$password = "";
$database = "wad-q3";

$conn = mysqli_connect($servername, $username, $password, $database);

if ($conn) {
} else {

    die("Connection failed beacuse " . mysqli_connect_error());
}
