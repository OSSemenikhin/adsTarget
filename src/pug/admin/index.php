<pre>


<?php
// ini_set('error_reporting', E_ALL);
// ini_set('display_errors', 1);
// ini_set('display_startup_errors', 1);

// session_start();
// // var_dump($_POST);
// // var_dump($_SESSION);

// // $_SESSION['login'] = false;
$login = false;
if (isset($_SESSION['login'])) $login = $_SESSION['login'];

if (isset($_POST['logout'])) {
  session_destroy();
  unset($_SESSION);
  setcookie('PHPSESSID', '', 1);
  $login = false;
} else if (isset($_POST['login']) && isset($_POST['password'])) {
  include $_SERVER['DOCUMENT_ROOT'] . '/admin/P982374.php';
  include $_SERVER['DOCUMENT_ROOT'] . '/admin/U09328.php';
  // include __DIR__ . '/P982374.php';
  // include __DIR__ . '/U09328.php';

  $loginIndex = array_search($_POST['login'], $users);
  if ($loginIndex !== false && $loginIndex >= 0) {
    if ($passwords[$loginIndex] === $_POST['password']) {
      $login = true;
      $_SESSION['login'] = true;
      setcookie('login', $_POST['login'], time() + 60 * 60 * 24 * 30, "/");
    } else {
      $loginError = true;
    }
  } else {
    $loginError = true;
  }
}
// var_dump($_SESSION);
// if (isset($_SESSION["login"])) var_dump($_SESSION["login"]);
// var_dump($_COOKIE);



$filenameCalculate = '../d41d8cd98f00b204e9800998ecf8427e.txt';
$dataCalculate = file_get_contents($filenameCalculate);
$calculateArr = unserialize($dataCalculate);
// var_dump($calculateArr);


$filenameServises = '../289dff07669d7a23de0ef88d2f7129e7.txt';
$dataServises = file_get_contents($filenameServises);
$servicesArr = unserialize($dataServises);
// var_dump($servicesArr);


$filenameCallMe = '../0dcb3b5471a8f8d3b5149429896cb409.txt';
$dataCallMe = file_get_contents($filenameCallMe);
$callMeArr = unserialize($dataCallMe);
// var_dump($servicesArr);
?>

</pre>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ADMIN</title>
  <style>
    .hiden {
      display: none;
    }

    .container {
      width: 97%;
      margin: auto;
      display: flex;
      flex-direction: column;
      /* justify-content: center; */
      align-items: center;
    }

    .table {
      width: 100%;
    }

    td {
      padding: 5px;
      border: 1px solid black;
      border-spacing: 0px;
      border-collapse: collapse;
    }

    .form__input,
    .form__button {
      padding: 5px;
    }
  </style>
</head>

<body>
  <div class=wrapper>
    <div class="container">
      <form class=<?= $login ? "form-login hidden" : "form-login" ?> action="#" method="post">
        <label class="form__label">
          <input class="form__input form__input--login" type="text" name="login" value="">
        </label>
        <label class="form__label">
          <input class="form__input form__input--pass" type="password" name="password" value="">
        </label>
        <input class="form__button" type="submit" value="??????????">
      </form>
      <form class=<?= $login ? "form-login" : "form-login hidden" ?> action="#" method="post">
        <input class="form__button" type="submit" name="logout" value="??????????">
      </form>
      <div class=<?= $login ? "table" : "table hidden" ?>>

        <?php if (!empty($calculateArr)) : ?>
          <h1>???????????????????? ??????????????????</h1>
          <table class="table">
            <tr>
              <td><strong>???????? ??????????????????</strong> </td>
              <td><strong>??????</strong> </td>
              <td><strong>??????????????</strong> </td>
              <td><strong>?????? ????????????????????</strong> </td>
            </tr>
            <?php foreach ($calculateArr as $key => $value) : ?>
              <tr>
                <td><?= $key ?></td>
                <?php foreach ($calculateArr[$key] as $value) : ?>
                  <td>
                    <?= $value ?>
                  </td>
                <?php endforeach ?>
              </tr>
            <?php endforeach ?>
          </table>
        <?php endif ?>

        <?php if (!empty($servicesArr)) : ?>
          <h1>????????????</h1>
          <table class="table">
            <tr>
              <td><strong>???????? ??????????????????</strong></td>
              <td><strong>?????? ????????????</strong></td>
              <td><strong>????????????????</strong></td>
              <td><strong>??????</strong></td>
              <td><strong>??????????????</strong></td>
              <td><strong>???????????????????? ???????? ?????? ??????????</strong></td>
            </tr>
            <?php foreach ($servicesArr as $key => $value) : ?>
              <tr>
                <td><?= $key ?></td>
                <?php foreach ($servicesArr[$key] as $value) : ?>
                  <td>
                    <?= $value ?>
                  </td>
                <?php endforeach ?>
              </tr>
            <?php endforeach ?>
          </table>
        <?php endif ?>

        <?php if (!empty($callMeArr)) : ?>
          <h1>?????????????????? ??????</h1>
          <table class="table">
            <tr>
              <td><strong>???????? ??????????????????</strong></td>
              <td><strong>??????????????</strong></td>
            </tr>
            <?php foreach ($callMeArr as $key => $value) : ?>
              <tr>
                <td><?= $key ?></td>
                <?php foreach ($callMeArr[$key] as $value) : ?>
                  <td>
                    <?= $value ?>
                  </td>
                <?php endforeach ?>
              </tr>
            <?php endforeach ?>
          </table>
        <?php endif ?>
      </div>
    </div>
  </div>
</body>

</html>
