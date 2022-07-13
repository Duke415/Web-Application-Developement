<?php

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

// $data = json_decode(file_get_contents("php://input"), true);  //read raw data
// $studentName = $data['searchByName'];

$studentName = isset($_GET['searchByName']) ? $_GET['searchByName'] : die();

include "config.php";

$query = "SELECT* FROM student WHERE name LIKE '%{$studentName}%'";
$query_run = mysqli_query($conn, $query) or die("SQL Query failed");

if (mysqli_num_rows($query_run) > 0) {

    $output = mysqli_fetch_all($query_run, MYSQLI_ASSOC);
    echo json_encode($output);
} else {

    echo json_encode(array('message' => 'No record found', 'status' => false));
}
