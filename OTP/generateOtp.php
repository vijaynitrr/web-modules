<?php

session_start();


$number = "91".$_POST["mobile-number"]; 

$string = '0123456789';
$string_shuffled = str_shuffle($string);
$otpMessage = substr($string_shuffled, 1, 7);

$_SESSION["otp"] = $otpMessage;

$otpMessage = "Your one time password is ".$otpMessage;

include('way2sms-api.php');

if (isset($_POST["submit"])) {

    $res = sendWay2SMS('8234074577', '8817265259', $number, $otpMessage);
    if (is_array($res))
        echo $res[0]['result'] ? 'true' : 'false';
    else
        echo $res;
}
?>

<html>
<head>
<meta charset="utf-8">
<link rel="stylesheet" type="text/css" href="confirm.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script> 
<script src="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.12.2.min.js"></script>
<link rel="stylesheet" href="jquery-ui.css">
<script type="text/javascript" src="jquery-ui.js"></script>
<script type="text/javascript" src="material.js"></script>
<title>Otp confirmation</title>
</head>
<body>
<hgroup>
<h1>Confirmation</h1>
</hgroup>
<form action="testConfirmation.php" method="post">
<div class="group">
<input type="password" name="check" id="names"  ><span class="highlight"></span><span class="bar"></span>
<label>One time password</label>
</div>
<input type="submit" name="submit" class="button buttonBlue" value="Submit"/>
</form>
<footer>
<p>You Gotta Love <a href="http://vijay-practice.esy.es/" target="_blank">Google</a></p>
</footer>
</body>
</html>

<?php
?>