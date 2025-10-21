
document.getElementById('contact-form').onsubmit= () => {
    clearErrors();


        let isValid = true;


        let Fname = document.getElementById('fName').value.trim();
        let Lname = document.getElementById('lName').value.trim();
        let Email = document.getElementById('Email').value.trim();
      

        if (!Fname){
            // alert("No name ")
              document.getElementById('err-fName').style.display = "block";
              isValid = false;
        };

        if (!Lname){
            // alert("No name ")
              document.getElementById('err-lName').style.display = "block";
              isValid = false;
        };

    }