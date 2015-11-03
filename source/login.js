var loginData = require('../data/login.json');

function validate(){
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  if ( email == loginData.email && password == loginData.password){
    alert ("Login successfully");
    return false;
  }
  else{
    alert("You entered something incorrectly!");
    return false;
  }
}