
document.getElementById('contact-form').onsubmit= () => {
    clearErrors();


        let isValid = true;


        let fName = document.getElementById('fName').value.trim();
        let lName = document.getElementById('lName').value.trim();
      

        if (!fName){
              document.getElementById('err-fName').style.display = "block";
                isValid = false;
        };

        if (!lName){
              document.getElementById('err-lName').style.display = "block";
                isValid = false;

        };

        return isValid;


    }

    function clearErrors()  {
        let errors = document.getElementsByClassName("error");
            for (let i = 0; i < errors.length; i++){
                errors[i].style.display = "none";
            }
}