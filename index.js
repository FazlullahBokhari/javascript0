function validation(){
  var user = document.getElementById('user').value;
  var pass = document.getElementById('pass').value;
  var conpass = document.getElementById('conpass').value;
  var mob = document.getElementById('mob').value;
  var email = document.getElementById('email').value;

  if(user == ""){
    document.getElementById('username').innerHTML = " ** Please fill the username";
    return false;
  }
  if(user.length <= 2){
    document.getElementById('username').innerHTML = "** Name should be greater tha 2 words";
    return false;
  }
  if(user.length > 30){
    document.getElementById('username').innerHTML = "** Name should not be greater tha 30 words";
    return false;
  }
  if(!isNaN(user)){
    document.getElementById('username').innerHTML = "** Only characters are allowed !";
    return false;
  }
  if(pass == ""){
    document.getElementById('spass').innerHTML = "** Please fill the password";
    return false;
  }
  if(pass.length <= 5){
    document.getElementById('spass').innerHTML = "** Password should be greater tha 5 digits";
    return false;
  }
  if(pass.length > 12){
    document.getElementById('spass').innerHTML = "** Password should not be greater tha 12 digits";
    return false;
  }
  if(conpass == ""){
    document.getElementById('sconpass').innerHTML = "** Please confirm the password";
    return false;
  }
  if(pass!=conpass){
    document.getElementById('sconpass').innerHTML = "** Password are not matching!"
    return false;
  }
  if(mob == ""){
    document.getElementById('smob').innerHTML = "** Please fill the Mobile No.";
    return false;
  }
  if(isNaN(mob)){
    document.getElementById('smob').innerHTML = "**Only numbers are allowed";
    return false;
  }
  if(mob.length!=10){
    document.getElementById('smob').innerHTML = "** Mobile Number Should be 10 digits";
    return false;
  }
  if(email == ""){
    document.getElementById('semail').innerHTML = "** Please fill the Email";
    return false;
  }
  if(email.indexOf('@') <= 0){
    document.getElementById('semail').innerHTML = "** Position of @ is not valid!";
    return false;
  }
  if((email.charAt(email.length-4)!='.') && (email.charAt(email.length-3)!='.')){
    document.getElementById('semail').innerHTML = "** Position of . is not valid";
    return false;
  }
};
