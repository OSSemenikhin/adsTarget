<?php
  $message = 'Произошла ошибка, пожалуйста сообщите нам об этом adstarget@adstarget.ru';
  if (!empty($_POST)) {
    $filename = '0dcb3b5471a8f8d3b5149429896cb409.txt';
    $getData = file_get_contents($filename);
    $newData = unserialize($getData);
    $newData[date("d.m.Y H:i:s", time()+3600*3)] = $_POST;
    var_dump($newData);
    $data = serialize($newData);
    file_put_contents($filename, $data);
    $message = 'Заявка принята. Мы свяжемся с вами в ближайшее время!';
  }
  $response = ['message' => $message];
  header('Content-Type: application/json');
  echo json_encode($response);
