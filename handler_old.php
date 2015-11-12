<?php


if ($_POST) { // если передан массив POST
	$name = htmlspecialchars($_POST["name"]); // пишем данные в переменные и экранируем спецсимволы
	$email = htmlspecialchars($_POST["email"]);
	$subject = htmlspecialchars($_POST["phone"]) . ' ' . $name;
	$message = htmlspecialchars($_POST["message"]);
	$file = htmlspecialchars($_POST["sec"]);
	//$file = explode("* ", $file);
	$json = array(); // подготовим массив ответа
	if (!$email) { // если хоть одно поле оказалось пустым
		$json['error'] = 'Вы заполнили не все поля! Обмануть решили? =)'; // пишем ошибку в массив
		echo json_encode($json); // выводим массив ответа 
		die(); // умираем
	}
	if(!preg_match("|^[-0-9a-z_\.]+@[-0-9a-z_^\.]+\.[a-z]{2,6}$|i", $email)) { // проверим email на валидность
		$json['error'] = 'Не верный формат email!'; // пишем ошибку в массив
		echo json_encode($json); // выводим массив ответа
		die(); // умираем
	}

	  $filename = $file; //Имя файла для прикрепления
	  $to = "korbytovka@mail.ru"; //Кому
	  $from = $email; //От кого
	  //$subject = "Test"; //Тема
	  //$message = "Текстовое сообщение"; //Текст письма
	  $boundary = "---"; //Разделитель
	  /* Заголовки */
	  $headers = "From: $from\nReply-To: $from\n";
	  $headers .= "Content-Type: multipart/mixed; boundary=\"$boundary\"";
	  $body = "--$boundary\n";
	  /* Присоединяем текстовое сообщение */
	  $body .= "Content-type: text/html;\n";
	  $body .= "Content-Transfer-Encoding: quoted-printablenn";
	  $body .= "Content-Disposition: attachment; filename==?utf-8?B?".base64_encode($filename)."?=\n\n";
	  $body .= $message."\n";
	  $body .= "--$boundary\n";
	  $file = fopen($filename, "r"); //Открываем файл
	  $text = fread($file, filesize($filename)); //Считываем весь файл
	  fclose($file); //Закрываем файл
	  /* Добавляем тип содержимого, кодируем текст файла и добавляем в тело письма */
	  $body .= "Content-Type: application/octet-stream; name==?utf-8?B?".base64_encode($filename)."?=\n";
	  $body .= "Content-Transfer-Encoding: base64\n";
	  $body .= "Content-Disposition: attachment; filename==?utf-8?B?".base64_encode($filename)."?=\n\n";
	  $body .= chunk_split(base64_encode($text))."\n";
	  $body .= "--".$boundary ."--\n";
	  mail($to, $subject, $body, $headers); //Отправляем письмо

	$json['error'] = 0; // ошибок не было

	echo json_encode($json); // выводим массив ответа

	unlink($filename);
} else { // если массив POST не был передан
	echo 'GET LOST!'; // высылаем
}
?>