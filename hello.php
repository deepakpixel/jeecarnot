<?php
require_once "./config/db.php";
if(isset($_REQUEST['email'])){
$email=$_REQUEST['email'];
$num=mysqli_query($conn,"SELECT * FROM mailinglist WHERE email='$email'" );
$number=mysqli_num_rows($num);
// var_dump($number);

    if($number==0)
    {


    $sql="INSERT INTO mailinglist (email) VALUES('$email')";
    if ($conn->query($sql) === TRUE)
    {
        echo "success";
    }
    else{
        echo "error";
        // echo("Error description: " . $conn->error);
    }
    }
    else
    {
        echo "success";
        exit();
    }
}
else
echo "error";

?>