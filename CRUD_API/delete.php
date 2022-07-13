<?php

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods:DELETE');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type, Access-Control-Allow-Methods, Authorization, X-Requested-With');


$data = json_decode(file_get_contents("php://input"), true);  //read raw data
$studentID = $data['sid'];

include "config.php";

$query = "DELETE FROM student WHERE id = {$studentID}";
$query_run = mysqli_query($conn, $query) or die("SQL Query failed");

if ($query_run) {

    echo json_encode(array('message' => 'Record deleted', 'status' => true));
} else {

    echo json_encode(array('message' => 'Record not deleted', 'status' => false));
}
