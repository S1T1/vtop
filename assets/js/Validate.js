var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.

var submitButton = document.getElementById("submit-btn");

submitButton.addEventListener("click", validate);

function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "Formget@g" && password == "1"){
//alert ("Login successfully");
location.href ="172.25.164.25:8000/index.html";// Redirecting to other page.
return false;
}
else{
attempt --;// Decrementing by one.
alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}