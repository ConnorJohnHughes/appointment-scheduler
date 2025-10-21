
document.getElementById('contact-form').onsubmit= () => {
    clearErrors();


        let isValid = true;


        let Fname = document.getElementById('fName').value.trim();
        let Lname = document.getElementById('lName').value.trim();
        let Email = document.getElementById('Email').value.trim();
      

        if (!fName){
            // alert("No name ")
              document.getElementById('err-fName').style.display = "block";
              isValid = false;
        };

        if (!lName){
            // alert("No name ")
              document.getElementById('err-lName').style.display = "block";
              isValid = false;
        };


    }

    function clearErrors()  {
    let errors = document.getElementsByClassName("error");
    for (let i = 0; i < errors.length; i++){
        errors[i].style.display = "none"
    }
}