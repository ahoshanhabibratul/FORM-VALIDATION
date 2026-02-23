function validateForm(){
let name = document.getElementById("name").value.trim();
let email = document.getElementById("email").value.trim();
let phone = document.getElementById("phone").value.trim();
let password = document.getElementById("password").value.trim();
let emailPattern = /^[^]+@[^]+\.[a-z]{2,3}$/;
let phonePattern = /^(01[3-9]\d{8})$/;
let passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
let isValid = true;

//clear old message
document.getElementById("nameError").innerHTML="";
document.getElementById("emailError").innerHTML="";
document.getElementById("phoneError").innerHTML="";
document.getElementById("passwordError").innerHTML="";

// name validation
if(name===""){
  document.getElementById("nameError").innerHTML="Name is required"; 
  isValid = false; 
}
// email valid
if(!email.match(emailPattern)){
  document.getElementById("emailError").innerHTML="email is required"; 
  isValid = false; 
}
// phone valid only bd
if(!phone.match(phonePattern)){
  document.getElementById("phoneError").innerHTML="Phone is required"; 
  isValid = false; 
}
// password validation
if(!password.match(passwordPattern)){
  document.getElementById("passwordError").innerHTML="password must be 6+ character with letter and number must include "; 
  isValid = false; 
}
return isValid;
}