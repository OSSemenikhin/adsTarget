<?php
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

$body = '<h1>Услуга</h1>';
if (isset($_POST["type"])) {
  $body .= '<p><strong>Что продвигать:</strong> '.$_POST["type"].'</p>';
}
$body .= '<p><strong>Что продвигать:</strong> '.$_POST["description"].'</p>';
$body .= '<p><strong>Имя:</strong> '.$_POST["name"].'</p>';
$body .= '<p><strong>Телефон:</strong> '.$_POST["phone"].'</p>';
$body .= '<p><strong>Что продвигать:</strong> '.$_POST["socials"].'</p>';

try {
  //Server settings
  // $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
  $mail->isSMTP();                                            //Send using SMTP
  $mail->Host       = 'smtp.mail.ru';                      //Set the SMTP server to send through
  $mail->SMTPAuth   = true;                                    //Enable SMTP authentication
  $mail->Username   = 'oleg.spicin.22@bk.ru';                     //SMTP username
  $mail->Password   = 'uSScsHabsMp1M9cxMPMW';                               //SMTP password
  $mail->SMTPSecure = 'ssl';            //Enable implicit TLS encryption
  $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

  //Recipients
  $mail->setFrom('oleg.spicin.22@bk.ru');
  $mail->addAddress('badmanbadlock@gmail.com');     //Add a recipient


  //Content
  $mail->isHTML(true);                                  //Set email format to HTML
  $mail->Subject = 'Услуга';
  $mail->Body    = $body;
  $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

  $mail->send();
  echo 'Ваша заявка принята, мы свяжимся с Вами в ближайшее время!';
} catch (Exception $e) {
  echo "Произошла ошибка, пожалуйста сообщите нам <a href='mailto:semenikhinoleg777@yandex.ru'>adsTargetCompany<a>";
  // echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
