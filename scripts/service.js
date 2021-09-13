function validateForm() {
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
