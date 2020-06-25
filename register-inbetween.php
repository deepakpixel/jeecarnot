<?php
include_once "./config/db.php";
// param = "?name=" + name + "&email=" + email + "&phone=" + phone + "&phone2=" + phone2 + "&parent=" + parent + "&parentphone=" + parentphone + "&class=" + class2 + "&percentile=" + percentile + "&target=" + target + "&mode=" + mode + "&target2=" + target2 + "&info=" + info + "&language=" + language + "&material=" + material + "&suggestion=" + suggestion;
// let url = "register-mentee.php?" + param;
$name=$_REQUEST['name'];
$email=$_REQUEST['email'];
$phone=$_REQUEST['phone'];
$phone2=$_REQUEST['phone2'];
$parent=$_REQUEST['parent'];
$parentphone=$_REQUEST['parentphone'];
$class2=$_REQUEST['class2'];
$percentile=$_REQUEST['percentile'];
$target=$_REQUEST['target'];
$mode=$_REQUEST['mode'];
$target2=$_REQUEST['target2'];
$info=$_REQUEST['info'];
$language=$_REQUEST['language'];
$material=$_REQUEST['material'];
$suggestion=$_REQUEST['suggestion'];
date_default_timezone_set('Asia/Kolkata');
$t=strtotime('now');
$regtime=date("d/m/Y h:ia l",$t);
$sql = "INSERT INTO incompletereg (name,email,phone,phone2,parentname,parentphone,class,percentile,target,mode,target2,info,language,material,suggestion,regtime) 
                                VALUES('$name', '$email','$phone', '$phone2','$parent', '$parentphone','$class2', '$percentile','$target', '$mode','$target2', '$info', '$language','$material', '$suggestion','$regtime')";
if ($conn->query($sql) === TRUE)
echo '{"data":"success","time":"'.$regtime.'"}';
else
echo '{"data":"error","time":"'.$regtime.'"}';

?>