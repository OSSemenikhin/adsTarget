<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;


require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';

$body = '<h1> Рассчитать стоимость </h1>';
$body .= '<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
$body .= '<p><strong>Телефон:</strong> '.$_POST['phone'].'</p>';
$body .= '<p><strong>Что продвигать:</strong> '.$_POST['target'].'</p>';

try {

  $mail->isSMTP();                                            
  $mail->Host       = 'smtp.yandex.ru';                      
  $mail->SMTPAuth   = true;                                 
  $mail->Username   = '123@yandex.ru';                     
  $mail->Password   = '123';                              
  $mail->SMTPSecure = 'SSL';            
  $mail->Port       = 465;                                    

  
  $mail->setFrom('123@yandex.ru');
  $mail->addAddress('123@yandex.ru');     



  $mail->isHTML(true);                                  
  $mail->Subject = 'Рассчитать стоимость';
  $mail->Body    = '$body';
  $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

  $mail->send();
  echo 'Message has been sent';
} catch (Exception $e) {
  echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
