<?php

session_start();

echo $session['otp'];
echo $_POST['fillOtp'];

if(isset($_POST['submit'])){
    if($session['otp']===$_POST['fillOtp']){
    	echo "<h1 style='text-align=center;'>Congratulation you are sucessfully registered</h1>";
    }else{
    	echo "<h1 style='text-align=center;'>Sorry you are entered wrong one time password</h1>";
    }
}

session_destroy();
?>