<?php

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods:POST');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type, Access-Control-Allow-Methods, Authorization, X-Requested-With');


$data = json_decode(file_get_contents("php://input"), true);  //read raw data

$name = $data['sname'];
$email = $data['semail'];
$phoneNo = $data['sphoneNo'];

include "config.php";

$query = "INSERT INTO student(name,email,phoneNo)
          VALUES('{$name}','{$email}','{$phoneNo}')";

$query_run = mysqli_query($conn, $query);

if ($query_run) {

    echo json_encode(array('message' => 'Record inserted', 'status' => true));
} else {

    echo json_encode(array('message' => 'Record not inserted', 'status' => false));
}
