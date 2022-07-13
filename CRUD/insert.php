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
                        <input type="text" name="name" placeholder="Enter your name" required autocomplete="true">
                    </div>

                    <div class="input-box">
                        <span class="details">Subject</span>
                        <input type="text" name="subject" placeholder="Enter subject" required>
                    </div>

                    <div class="input-box">
                        <span class="details">Semester</span>
                        <input type="text" name="semester" placeholder="Enter Semester" required>
                    </div>

                    <div class="input-box">
                        <span class="details">Grade</span>
                        <input type="text" name="grade" placeholder="EnterYour Grade" required>
                    </div>

                    <div class="input-box">
                        <span class="details">Date Of Birth</span>
                        <input type="date" name="dob" required>
                    </div>

                    <div class="input-box">
                        <span class="details">Status</span>
                        <input type="text" name="status" required>
                    </div>
                </div>

                <div class="gender-details">
                    <input type="radio" name="gender" value="Male" id="dot-1">
                    <input type="radio" name="gender" value="Female" id="dot-2">
                    <input type="radio" name="gender" value="Prefer not to say" id="dot-3">
                    <span class="gender-title">Gender</span>
                    <div class="category">
                        <label for="dot-1">
                            <span class="dot one"></span>
                            <span class="gender">Male</span>
                        </label>
                        <label for="dot-2">
                            <span class="dot two"></span>
                            <span class="gender">Female</span>
                        </label>
                        <label for="dot-3">
                            <span class="dot three"></span>
                            <span class="gender">Prefer not to say</span>
                        </label>
                    </div>
                </div>

                <div class="button">
                    <input type="submit" name="submit" value="Submit">
                </div>
            </form>

            <?php

            if (isset($_POST['submit'])) {

                $name = $_POST['name'];
                $subject = $_POST['subject'];
                $semester = $_POST['semester'];
                $grade = $_POST['grade'];
                $dob = date('Y-m-d', strtotime($_POST['dob']));
                $status = $_POST['status'];
                $gender = $_POST['gender'];


                $query =  "INSERT INTO users(`name`,`gender`,`subject`,`semester`,`grade`,`dob`,`status`) 
                VALUES('$name','$gender','$subject','$semester','$grade','$dob ','$status')";

                $query_run = mysqli_query($conn, $query);

                if ($query_run) {

                    echo '<script>alert("Data Inserted Successfully")</script>';
                }
            }

            ?>

        </div>
</body>

</html>