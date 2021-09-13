function validateForm() {
    if(document.contactForm.f_name.value == "") {
      alert("First Name must be provided");
      document.contactForm.f_name.focus();
      return false;
    } else if(document.contactForm.email.value == "") {
      alert("Email must be provided");
      document.contactForm.email.focus();
      return false;
    } else if(document.contactForm.phone_number.value == ""){
        alert("Phone number must be provided");
      document.contactForm.email.focus();
      return false;
    }
    else{
        return true;
    }
    }
