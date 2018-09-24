<?php

$name = $_FILES['kala']['name'];
$target_dir ="uploads/";
if(move_uploaded_file($_FILES['kala']['tmp_name'],$target_dir.$name)){
  require 'organise.php';
  sleep(1);
  echo  "file sent successfully";
}












?>
