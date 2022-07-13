<?php

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods:PUT');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type, Access-Control-Allow-Methods, Authorization, X-Requested-With');


$data = json_decode(file_get_contents("php://input"), true);  //read raw data

$id = $data['sid'];
$name = $data['sname'];
$email = $data['semail'];
$phoneNo = $data['sphoneNo'];

include "config.php";

$query = "UPDATE student SET name ='{$name}' ,email = '{$email}' ,phoneNo = '{$phoneNo}' WHERE id = {$id}";

$query_run = mysqli_query($conn, $query);

if ($query_run) {

    echo json_encode(array('message' => 'Record updated', 'status' => true));
} else {

    echo json_encode(array('message' => 'Record not updated', 'status' => false));
}
