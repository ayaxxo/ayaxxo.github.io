function validateForm() {
    var x = document.forms["myForm"]["email"].value;
    var y = document.forms["myForm"]["password"].value;
 
    if (x == "" || y=="") {
      alert("Email and Password must be filled out");
      return false;
    }
  }