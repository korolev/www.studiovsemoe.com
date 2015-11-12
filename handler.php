<?php

$json = array(); // подготовим массив ответа


if ($_POST) { // если передан массив POST
	$name = htmlspecialchars($_POST["name"]); // пишем данные в переменные и экранируем спецсимволы
	$email = htmlspecialchars($_POST["email"]);
	$subject = htmlspecialchars($_POST["phone"]) . ' ' . $name;
	$message = htmlspecialchars($_POST["message"]);
	$file = htmlspecialchars($_POST["sec"]);
	//$file = explode("* ", $file);

$myFile = "fls/sl.csv";
$fh = fopen($myFile, 'a') or die("can't open file");
fwrite($fh, $name.";".$email.";".$subject.";".$message.";".$file."\n");
fclose($fh);

	$json['error'] = 0; // ошибок не было
	
} else { // если массив POST не был передан
	$json['error'] = 0; // ошибок не было
}

	echo json_encode($json); // выводим массив ответа

?>
