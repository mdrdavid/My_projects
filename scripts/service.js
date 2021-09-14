function validateForm(){
    if(document.LoginForm.email.value == "") {
      alert("Email must be provided");
      document.LoginForm.email.focus();
      return false;
    } else if(document.LoginForm.password.value == "") {
      alert("Password must be provided");
      document.LoginForm.password.focus();
      return false;
    } 
    else{
        return true;
    }
    }



    /*function validate(){
  var mail = document.getElementById("text").value;
// + indicates one or more occurance of a character
//.(period) if used inside square braces escape with backslash(\.) 
// ? indicates zero or one occurance
  var regex = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.)([a-z]+)(.[a-z])?$/ 
  // $/ ends the expression

  if(regex.text(mail)){
    alert("Your Email ID is valid")
    return true;
  }
  else{
    alert("Incorrect Email ID")
    return false;
  }
    }
