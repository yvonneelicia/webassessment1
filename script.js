
    function validateContact(){
      var name = document.getElementById("name").value;
      var phone = document.getElementById("phone").value;
      var email = document.getElementById("email").value;
      var message = document.getElementById("message").value;
      var errormsg = document.getElementById("errormsg");
      
      errormsg.style.padding = "10px";
      let
      
      var text;
      if(name.length == 0){
        text = "Please enter valid name";
        errormsg.innerHTML = text;
        return false;
      }
      if(isNaN(phone) || phone.length != 10){
        text = "Please enter valid phone number (10 digits)";
        errormsg.innerHTML = text;
        return false;
      }
      if(email.indexOf("@") == -1 || email.length < 6){
        text = "Please enter valid email";
        errormsg.innerHTML = text;
        return false;
      }
      if(message.length <= 50){
        text = "Please type a message with at least 50 characters";
        errormsg.innerHTML = text;
        return false;
      }
      alert("Submitted Successfully!");
      return true;
    }


