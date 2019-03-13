<?php 

require_once('PHPMailerAutoload.php');
if(isset($_POST['phone'])){
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$phone = $_POST['phone'];
$message = $_POST['message'];


//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.timeweb.ru';  						// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'service@autocolor196.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'kazinag1'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('service@autocolor196.ru'); // от кого будет уходить письмо?
$mail->addAddress('autocolor196@gmail.com');     // Кому будет уходить письмо 
  

$mail->isHTML(true);                               

$mail->Subject = 'Заявка с сайта';


$mail->Body    = 'Кто-то оставил заявку, его телефон ' .$phone. '<br>Описание проблемы клиента: ' .$message;
$mail->AltBody = '';



for($ct=0;$ct<count($_FILES['photo']['tmp_name']);$ct++)
{
    $mail->AddAttachment($_FILES['photo']['tmp_name'][$ct],$_FILES['photo']['name'][$ct]); 
} 

if(!$mail->send()) {
    echo '<span class="danger">Ошибка,попробуйте еще раз</span>';
} else {

   echo '<span class="success">Заявка успешна отправлена</span>';
}
}
else{
    echo '<span class="danger">Произошла ошибка</span>';
}
?>