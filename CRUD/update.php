<?php

include("connection.php");

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Insert</title>
</head>

<body>

    <div class="container">
        <div class="content">

            <form action="" method="POST">
                <div class="user-details">

                    <div class="input-box">
                        <span class="details">Name</span>
                        <input type="text" name="name" value="<?php echo $_GET['name']; ?>" required autocomplete=" true">
                    </div>

                    <div class="input-box">
                        <span class="details">Subject</span>
                        <input type="text" name="subject" value="<?php echo $_GET['subject']; ?>" required>
                    </div>

                    <div class="input-box">
                        <span class="details">Semester</span>
                        <input type="text" name="semester" value="<?php echo $_GET['semester']; ?>" required>
                    </div>

                    <div class="input-box">
                        <span class="details">Grade</span>
                        <input type="text" name="grade" value="<?php echo $_GET['grade']; ?>" required>
                    </div>

                    <div class="input-box">
                        <span class="details">Date Of Birth</span>
                        <input type="date" name="dob" value="<?php echo $_GET['dob']; ?>" required>
                    </div>

                    <div class="input-box">
                        <span class="details">Status</span>
                        <input type="text" name="status" value="<?php echo $_GET['status']; ?>" required>
                    </div>
                </div>

                <div class="button">
                    <input type="submit" name="submit" value="Update">
                </div>
                <div class="button">
                    <button><a href="list.php">
                            << </a></button>
                </div>
            </form>

            <?php

            if (isset($_POST['submit'])) {

                $name = $_GET['name'];
                $subject = $_GET['subject'];
                $semester = $_GET['semester'];
                $grade = $_GET['grade'];
                $dob = date('Y-m-d', strtotime($_GET['dob']));
                $status = $_GET['status'];


                $query = "UPDATE users SET name ='$name', subject ='$subject', semester ='$semester', grade='$grade',dob ='$dob' ,status='$status' 
                WHERE id = '$id'";

                $query_run = mysqli_query($conn, $query);

                if ($query_run) {

                    echo '<script>alert("Data Updated Successfully")</script>';
                }
            }

            ?>

        </div>
</body>

</html>