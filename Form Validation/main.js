function validateform(){
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let password = document.getElementById("password").value.trim();
    let emailpattern = /^[^]+@[^]+\.[a-z]{2,3}$/;
    let phonepattern = /^(01[3-9]\d{8})$/;
    let passwordpattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    let isValid = true;

    // clear old message
    document,getElementById("nameError").innerHTML="";
    document,getElementById("emailError").innerHTML="";
    document,getElementById("phoneError").innerHTML="";
    document,getElementById("passwordError").innerHTML="";

    // name validation
    if (name===""){
        document,getElementById("nameError").innerHTML="Name is Required";
        isValid = false;
    }

    // email validation
    if (!email.match(emailpattern)){
        document,getElementById("emailError").innerHTML="Email is Required";
        isValid = false;
    }

    // phone validation
    if (!phone.match(phonepattern)){
        document,getElementById("phoneError").innerHTML="Phone is Required";
        isValid = false;
    }
    // password validation
    if (!password.match(passwordpattern)){
        document,getElementById("passwordError").innerHTML="Password must be 8 or 8+ character with letter and number";
        isValid = false;
    }


}