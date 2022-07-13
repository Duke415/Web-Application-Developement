<?php

include("connection.php");
error_reporting(0);

$id = $_GET['id'];

$query = "DELETE FROM users WHERE id = '$id'";

$data = mysqli_query($conn, $query);

if ($data) {

    echo "<script>alert('Record Deleted')</script>";

?>

    <META HTTP-EQUIV="Refresh" CONTENT="0; URL=http://localhost/wadQuiz/list.php">

<?php
}


?>