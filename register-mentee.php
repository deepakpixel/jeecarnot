<?php
// print_r($_REQUEST);
include_once "./config/db.php";
ini_set('upload_max_filesize', '20M');
ini_set('post_max_size', '20M');
ini_set('max_input_time', 300);
ini_set('max_execution_time', 300);
// param = "?name=" + name + "&email=" + email + "&phone=" + phone + "&phone2=" + phone2 + "&parent=" + parent + "&parentphone=" + parentphone + "&class=" + class2 + "&percentile=" + percentile + "&target=" + target + "&mode=" + mode + "&target2=" + target2 + "&info=" + info + "&language=" + language + "&material=" + material + "&suggestion=" + suggestion;
// let url = "register-mentee.php?" + param;
// var_dump($_REQUEST);
// var_dump($_FILES);
$name=$_REQUEST['name'];
$name = mysqli_real_escape_string($conn, $name);

$email=$_REQUEST['email'];
$email = mysqli_real_escape_string($conn, $email);

$phone=$_REQUEST['phone'];
$phone2=$_REQUEST['phone2'];
$parent=$_REQUEST['parent'];
$parent = mysqli_real_escape_string($conn, $parent);

$parentphone=$_REQUEST['parentphone'];
$class2=$_REQUEST['class'];
$percentile=$_REQUEST['percentile'];
$target=$_REQUEST['target'];
$mode=$_REQUEST['mode'];

$target2=$_REQUEST['target2'];
$target2 = mysqli_real_escape_string($conn, $target2);

$info=$_REQUEST['info'];
if($info=="other")
$info=$_REQUEST['info2'];
$info = mysqli_real_escape_string($conn, $info);

$language=$_REQUEST['language'];
$material=$_REQUEST['material'];
$suggestion=$_REQUEST['suggestion'];
$suggestion = mysqli_real_escape_string($conn, $suggestion);

$paymentref=$_REQUEST['refno'];
$paymentref = mysqli_real_escape_string($conn, $paymentref);

$promocode=$_REQUEST['promocode'];
$promocode = mysqli_real_escape_string($conn, $promocode);

// $paymentproof=$_FILES['proof'];


$upload = 'err'; 
$targetFilePath = "";
$resetPath=0;
if(!empty($_FILES['proof'])){ 
    
    // File upload configuration 
    $targetDir = "uploads/"; 
    // $allowTypes = array('pdf', 'doc', 'docx', 'jpg', 'png', 'jpeg', 'gif'); 
     
    $fileName = basename($_FILES['proof']['name']); 
    $targetFilePath = "";

    if(($_FILES['proof']['size'])<5000000)
    {
        $targetFilePath = $targetDir.$_REQUEST['name'].'-'.$_REQUEST['phone'].'ref-'.$paymentref.'-'.$fileName;

        if (file_exists($targetFilePath))
       {
           echo "duplicate";
           exit();
       }
        else
        if(move_uploaded_file($_FILES['proof']['tmp_name'], $targetFilePath)){ 
            $upload = 'ok'; 
            $resetPath=1;

        } 
    }
    else
    {
        echo "largefile";
        exit();
    }
    // }
}

if($resetPath==0){
    $targetFilePath = "";
}









date_default_timezone_set('Asia/Kolkata');
$t=strtotime('now');
$regtime=date("d/m/Y h:ia l",$t);
$sql = "INSERT INTO registrations (name,email,phone,phone2,parentname,parentphone,class,percentile,target,mode,target2,info,language,material,suggestion,regtime,paymentref,paymentproof,promocode) 
                                VALUES('$name', '$email','$phone', '$phone2','$parent', '$parentphone','$class2', '$percentile','$target', '$mode','$target2', '$info', '$language','$material', '$suggestion','$regtime','$paymentref','$targetFilePath','$promocode')";
if ($conn->query($sql) === TRUE)
{
    $name=ucwords($name);
    $body=file_get_contents("./assets/mails/welcomemail.html");
    $body=str_replace("{%name%}",$name,$body);
    // $body=str_replace("{%username%}",$username,$body);
    // $body=str_replace("{%password%}",$password,$body);
    $subject = 'Thanks for registering with us';
    $headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
    $headers .= 'From: Jee Carnot <welcome@jeecarnot.com>'."\r\n";
    $headers.='Reply-To: hello@jeecarnot.com'."\r\n";
    $headers.='X-Mailer: PHP/' . phpversion();
    


        if(mail($email, $subject, $body, $headers))
        {
            echo '{"data":"success","time":"'.$regtime.'"}';

        }
        else{
            echo '{"data":"success","time":"'.$regtime.' ERR:Unable to send email"}';
    
        }
}
else
echo '{"data":"error","time":"'.$regtime.'"}';
// echo $sql;

?>