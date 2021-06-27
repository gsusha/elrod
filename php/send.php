<?php
	if(isset($_POST["name"]) && $_POST["name"] == "") {
		
		// Файлы phpmailer
		require "class.phpmailer.php";
		require "class.smtp.php";
		
		// Настройки
		$mail = new PHPMailer;
		$mail->isSMTP(); 
		$mail->Host = "smtp.jino.ru"; 
		$mail->SMTPAuth = true; 
		$mail->Username = "order@romapopov777.myjino.ru"; 		// Логин почты
		$mail->Password = passadmin; 							// Пароль
		$mail->SMTPSecure = "ssl"; 
		$mail->Port = 465;
		$mail->setFrom("order@romapopov777.myjino.ru"); 		// Ваш Email
		$mail->addAddress("iphoneref.sale.store@gmail.com"); 	// Email получателя
		//$mail->addAddress("ruzairov@gmail.com"); 				// Еще один email
		
		
		
		// Переменные
		$name = $_POST["buyer"];
		$tel = $_POST["tel"];
		$message = $_POST["message"];
		
		// Письмо
		$mail->isHTML(true); 
		$mail->Subject = "ElrodOpt"; 							// Заголовок письма
		$mail->Body = "<h3>Имя: $name <br>Телефон: $tel <br>Текст сообщения: $message</h3>";	// Текст письма
		
		// Результат
		if(!$mail->send()){
			echo "Сообщение не отправлено.<br>Ошибка: " . $mail->ErrorInfo;
		} else {
			echo 	"<style>
						* {
						padding: 3vh 1vw;
						text-align: center;
						font-family: sans-serif;
						}
						body {
							background: #fff3e0;
							color: #880e4f;
						}
						h1 {
							font-size: 2.5em;
						}
						h4 {
							font-size: 1.1em;
						}
					</style>
					<body> 
						<h1>Сообщение отправлено.</h1>
						<h4>Мы свяжемся с вами в ближайшее время...</h4>
					</body>"	;
		}
		
	} else {
		echo "Сообщение не отправлено.<br>Ошибка: Подозрение на спам-бота. Бип буп...";
	}
?>

<script language="JavaScript" type="text/javascript">
	function changeurl(){eval(self.location="../");}
	window.setTimeout("changeurl();",3000);
</script>