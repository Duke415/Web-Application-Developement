<?php

include("connection.php");
error_reporting(0);

$id = $_GET['id'];
$status = $_GET['status'];

$query = "UPDATE users SET status ='$status' WHERE id='$id'";

$data = mysqli_query($conn, $query);

if ($data) {

    echo "<script>alert('User Reported')</script>";

?>

    <META HTTP-EQUIV="Refresh" CONTENT="0; URL=http://localhost/wadQuiz/list.php">

<?php
}


?>