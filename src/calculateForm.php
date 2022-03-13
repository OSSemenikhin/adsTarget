<?php
  $message = 'Произошла ошибка, пожалуйста сообщите нам об этом <a href="mailto:adstarget@adstarget.ru">adstarget@adstarget.ru</a>';
  if (!empty($_POST)) {
    $filename = 'd41d8cd98f00b204e9800998ecf8427e.txt';
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
