<h1> kjdljksdf</h1>
<?php
var_dump($_POST);
  use PHPMailer\PHPMailer\PHPMailer;
  use PHPMailer\PHPMailer\Exception;

  require 'PHPMailer/src/PHPMailer.php';
  require 'PHPMailer/src/Exception.php';
  require 'PHPMailer/src/SMTP';
  // use PHPMailer\PHPMailer\SMTP;
  // require 'vendor/autoload.php';

  $mail =new PHPMailer(true);
  $mail -> CharSet = 'UTF-8';
  $mail -> setLanguage('ru', 'phpmailer/language/');
  $mail -> IsHTML(true);

  // From who
  $mail -> setFrom('from@example.com', 'ME');

  // To address
  $mail -> addAddress('SemenikhinOleg777@yandex.ru');

  // Subject
  $mail -> Subject = 'Рассчитать';

  // Hand
  // $hand = ''

  // Body
  $body = '<h2>Рассчитать</h2>';

  if(trim(!empty($_POST['name']))) {
    $body .= '<p><strong>Имя</strong> '. $_POST['name'].'</p>';
  }
  if(trim(!empty($_POST['phone']))) {
    $body .= '<p><strong>Телефон</strong> '. $_POST['phone'].'</p>';
  }
  if(trim(!empty($_POST['target']))) {
    $body .= '<p><strong>Ресурс</strong> '. $_POST['target'].'</p>';
  }

  $mail -> Body = $body;
  // $mail->send();

  // Sending
  if (!$mail -> send()) {
    $message = 'Ошибка';
  } else {
    $message = 'Данные отправлены!';
  }

  $response = ['message' => $message];
  header('Content-type: application/json');
  echo json_encode($response);
?>

