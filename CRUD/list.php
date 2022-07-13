<?php

include("connection.php");
error_reporting(0);
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>


  <?php

  $query = "SELECT* FROM users";
  $data = mysqli_query($conn, $query);
  $total = mysqli_num_rows($data);

  if ($total != 0) {

  ?>

    <table class="styled-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Gender</th>
          <th>Subject</th>
          <th>Semester</th>
          <th>Grade</th>
          <th>Date OF Birth</th>
          <th>Status</th>
          <th style="text-align: center;" colspan="3"></th>

        </tr>

      </thead>
      <tbody>
      </tbody>


    <?php

    while ($result = mysqli_fetch_assoc($data)) {


      echo "<tr>

          <td>" . $result['id'] . "</td>
          <td>" . $result['name'] . "</td>
          <td>" . $result['gender'] . "</td>
          <td>" . $result['subject'] . "</td>
          <td>" . $result['semester'] . "</td>
          <td>" . $result['grade'] . "</td>
          <td>" . $result['dob'] . "</td>
          <td>" . $result['status'] . "</td>


          <td><a class='aa' href='update.php?id=$result[id]&name=$result[name]&gender=$result[gender]&subject=$result[subject]&semester=$result[semester]&grade=$result[grade]&dob=$result[dob]&status=$result[status]'>Edit</a></td>
          <td><a class='bb' href='report.php?id=$result[id] &status=$result[status] ' onclick = 'return check1()'>Report</a></td>
          <td><a class='ed' href='delete.php?id=$result[id]' onclick = 'return check()'>Delete</a></td>

          </tr>";
    }
  }

    ?>

    <script>
      function check() {

        return confirm('Are you sure you want to delete this record?');
      }

      function check1() {

        return confirm('Are you sure you want to report this record?');
      }
    </script>

</body>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;

  }


  .styled-table {

    border-collapse: collapse;
    font-size: 0.9em;
    min-width: 400px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  }


  .styled-table thead tr {
    background-color: #2f455c;
    color: #ffffff;
    text-align: left;
  }


  .styled-table th,
  .styled-table td {
    padding: 12px 15px;
  }

  .styled-table tbody tr {
    border-bottom: 1px solid #dddddd;
  }

  .styled-table tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
  }

  .styled-table tbody tr:last-of-type {
    border-bottom: 2px solid #2f455c;
  }



  a {

    text-decoration: none;
    text-align: center;
    background-color: #3d6098;
    color: white;
    padding: 7px 15px;
    border-radius: 2px;
    transition: 0.3s;
    opacity: 0.8;
  }

  a:hover {

    letter-spacing: 2px;
    opacity: 1;

  }

  .ed {

    background-color: #f52323;
  }

  .aa {

    background-color: #3d6098;


  }

  .bb {

    background-color: #009879;

  }
</style>

</html>