<?php
var_dump($_POST);
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
// require 'vendor/autoload.php';
require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';

$body = '<h1> Рассчитать стоимость </h1>';
$body .= '<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
$body .= '<p><strong>Телефон:</strong> '.$_POST['phone'].'</p>';
$body .= '<p><strong>Что продвигать:</strong> '.$_POST['target'].'</p>';

try {
  //Server settings
  // $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
  $mail->isSMTP();                                            //Send using SMTP
  $mail->Host       = 'smtp.yandex.ru';                      //Set the SMTP server to send through
  $mail->SMTPAuth   = true;                                    //Enable SMTP authentication
  $mail->Username   = 'semenikhinoleg777@yandex.ru';                     //SMTP username
  $mail->Password   = 'xtlbrsaqaijcelcu';                               //SMTP password
  $mail->SMTPSecure = 'SSL';            //Enable implicit TLS encryption
  $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

  //Recipients
  $mail->setFrom('semenikhinoleg777@yandex.ru');
  $mail->addAddress('semenikhinoleg777@yandex.ru');     //Add a recipient


  //Content
  $mail->isHTML(true);                                  //Set email format to HTML
  $mail->Subject = 'Рассчитать стоимость';
  $mail->Body    = '$body';
  $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

  $mail->send();
  echo 'Message has been sent';
} catch (Exception $e) {
  echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
