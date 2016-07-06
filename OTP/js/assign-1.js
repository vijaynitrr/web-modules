function getEventTarget(e) 
{
    e = e || window.event;
    return e.target || e.srcElement; 
};
var prevtarget;
window.onload = function(){
	var clear = document.getElementById("act");
	document.getElementById("inp_Dis").value = '91';
	document.getElementById('nbar').onclick = function(event)
	{
		var target = getEventTarget(event);
		clear.style.borderColor = "#a7a7a7";
		clear.style.borderWidth = "0px 0px 3px 0px";
		if(target!=prevtarget)
		{
			if(prevtarget)
			{
				prevtarget.style.borderWidth="0px 0px 3px 0px";
				prevtarget.style.borderColor="#a7a7a7";
			}
			target.style.borderWidth="0px 0px 5px 0px";
			target.style.borderColor="white";
			target.style.Color="white";
		}
		prevtarget = target;
	};
	var showcase = document.getElementById('span_pass');
	var spantext = document.getElementById("inp_3");
 	showcase.onclick = function(event)
	{
		if(this.innerHTML==="show")
		{
			spantext.type = "text";
			this.innerHTML = "hide";
		}
		else
		{
			spantext.type = "password";
			this.innerHTML = "show";
		}
	};
};

function checkEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validateForm()
{
	var a = validateEmail();
	var b = validatePass();
	var c = validateNumber();
	var d = 1;
	if(!document.getElementById('check').checked)
	{
		d=0;
		alert("Please agree to the terms and conditions to continue");
	}
	if(a&&b&&c&&d)
	{
		return true;
	}
	return false;
}

function validateNumber()
{
	var err_num = document.getElementById("inp_4");
	var err_numcode = document.getElementById("inp_Dis");
	if(err_num.value=="")
	{
		document.getElementById("err-mobile").style.display = "block";
		err_num.style.border = "1px solid red";
		err_numcode.style.border = "1px solid red";
		document.getElementById("err-mobile").innerHTML = "please specify your mobile number";
		return false;
	}
	else
	{
		if( err_num.value.length==10 && err_num.value.match(/^[0-9]+$/)!= null )
		{
			err_num.style.border = "1px solid #A8A8A8";
			err_numcode.style.border = "1px solid #A8A8A8";
			document.getElementById("err-mobile").style.display = "none";
			return true;
		}
		else
		{
			document.getElementById("err-mobile").style.display = "block";
			err_num.style.border = "1px solid red";
			err_numcode.style.border = "1px solid red";
			document.getElementById("err-mobile").innerHTML = "Please specify a valid mobile number" ; 
			return false; 
		}
	}	
}

function validateEmail()
{
	var err_mail = document.getElementById("inp_2");
	if(err_mail.value=="")
	{
		document.getElementById("err-mail").style.display = "block";
		err_mail.style.border = "1px solid red";
		document.getElementById("err-mail").innerHTML = "Please specify your email Id";
		return false;
	}
	else
	{
		if(checkEmail(err_mail.value))
		{
			err_mail.style.border = "1px solid #A8A8A8";
			document.getElementById("err-mail").style.display = "none";
			return true;
		}
		else
		{
			document.getElementById("err-mail").style.display = "block";
			err_mail.style.border = "1px solid red";
			document.getElementById("err-mail").innerHTML = err_mail.value + " is Not a Valid Email Id. Please Enter a Valid Email Id" ; 
			return false; 
		}
	}
}

function validatePass()
{
	var err_pass = document.getElementById("inp_3");
	if(err_pass.value=="")
	{
		document.getElementById("err-pass").style.display = "block";
		err_pass.style.border = "1px solid red";
		document.getElementById("err-pass").innerHTML = "Please specify your password";
		return false;
	}
	else
	{
		if( err_pass.value.length>=6 && err_pass.value.length<=40 )
		{
			err_pass.style.border = "1px solid #A8A8A8";
			document.getElementById("err-pass").style.display = "none";
			return true;
		}
		else
		{
			document.getElementById("err-pass").style.display = "block";
			err_pass.style.border = "1px solid red";
			document.getElementById("err-pass").innerHTML = "Password chosen must be minimum 6 characters long" ; 
			return false; 
		}
	}					
}
