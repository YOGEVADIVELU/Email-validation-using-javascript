function EmailValidate(inputText) {
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.value.match(mailformat)) {
      alert("You entered is valid email address ");
      document.formname.textname.focus();
      return true;
    } else {
      alert("You entered invaild email address");
      document.formname.textname.focus();
      return false;
    }
  }
  