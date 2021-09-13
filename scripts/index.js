
function validateForm() {
  if(document.myForm.fname.value == "") {
    alert("First Name must be provided");
    document.myForm.fname.focus();
    return false;
  } else if(document.myForm.lname.value == "") {
    alert("Last Name must be provided");
    document.myForm.lname.focus();
    return false;
  } else if(document.myForm.email.value == "") {
    alert("Email must be provided");
    document.myForm.email.focus();
    return false;
  }else if(document.myForm.password.value == ""){
    alert("Password must be provided");
    document.myForm.password.focus();
    return false;
  } else if(document.myForm.cpassword.value == ""){
    alert("Please confirm Password");
    document.myForm.cpassword.focus();
    return false;
  }else{
      return true;
  }
}
