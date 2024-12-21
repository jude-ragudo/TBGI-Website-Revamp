// JavaScript source code


const subButton = document.getElementById("subButton");
const cancelButton = document.querySelector(".cancelButton");
const submitButton = document.querySelector(".submitButton");
const inputFields = document.querySelectorAll('input[type = "password"], input[type = "text"]');


document.addEventListener("DOMContentLoaded", function () {

    var myInput = document.getElementById("newpassword");
    var myInput2 = document.getElementById("confirmpassword");
    var myInput3 = document.getElementById("oldpassword");

    var letter = document.getElementById("letter");
    var capital = document.getElementById("capital");
    var number = document.getElementById("number");
    var lengthIndicator = document.getElementById("length");

    var field = document.getElementById("field");

    var isUserTyping = false;  // Flag to track user typing in the "New Password" field

    // When the user clicks on the password field, show the message box
    myInput.onfocus = function () {
        document.getElementById("message").style.display = "block";
    }
    myInput2.onfocus = function () {
        document.getElementById("message").style.display = "block";
    }

    // Show the messages when the page is loaded
    document.getElementById("message").style.display = "block";
    //document.getElementById("message-2").style.display = "block";

    // When the user clicks outside of the password field, hide the message box
    /*myInput.onblur = function () {
        document.getElementById("message").style.display = "none";
    }*/

    /*myInput2.onblur = function () {
        document.getElementById("message").style.display = "block";
    };*/

    // When the user starts to type something inside the password field


    var lowerCaseLetters = /[a-z]/g;
        if (myInput.value.match(lowerCaseLetters)) {
            letter.classList.remove("invalid");
            letter.classList.add("valid");
        } else {
            letter.classList.remove("valid");
            letter.classList.add("invalid");
        }

        // Validate capital letters
        var upperCaseLetters = /[A-Z]/g;
        if (myInput.value.match(upperCaseLetters)) {
            capital.classList.remove("invalid");
            capital.classList.add("valid");
        } else {
            capital.classList.remove("valid");
            capital.classList.add("invalid");
        }

        // Validate numbers
        var numbers = /[0-9]/g;
        if (myInput.value.match(numbers)) {
            number.classList.remove("invalid");
            number.classList.add("valid");
        } else {
            number.classList.remove("valid");
            number.classList.add("invalid");
        }

        // Validate length
        if (myInput.value.length >= 8) {
            lengthIndicator.classList.remove("invalid");
            lengthIndicator.classList.add("valid");
        } else {
            lengthIndicator.classList.remove("valid");
            lengthIndicator.classList.add("invalid");
        }

 
        /// Check if both passwords match and neither is empty
        if (myInput.value !== myInput2.value && myInput.value !== '' && myInput2.value !== '') {
            field.classList.add("invalidPassword");
            field.classList.remove("valid");
            document.getElementById("message-2").style.display = "block";
        } else {
            field.classList.add("valid");
            field.classList.remove("invalidPassword");
            document.getElementById("message-2").style.display = "none";
        }
    myInput.onkeyup = function () {

        // Set the flag to true when the user types in the "New Password" field
        isUserTyping = true;

        var x = document.getElementById("passwordForm");
        var password = myInput.value;
        var passwordVerify = myInput2.value;
        var passwordOld = myInput3.value;

        // Validate lowercase letters
        var lowerCaseLetters = /[a-z]/g;
        if (myInput.value.match(lowerCaseLetters)) {
            letter.classList.remove("invalid");
            letter.classList.add("valid");
        } else {
            letter.classList.remove("valid");
            letter.classList.add("invalid");
        }

        // Validate capital letters
        var upperCaseLetters = /[A-Z]/g;
        if (myInput.value.match(upperCaseLetters)) {
            capital.classList.remove("invalid");
            capital.classList.add("valid");
        } else {
            capital.classList.remove("valid");
            capital.classList.add("invalid");
        }

        // Validate numbers
        var numbers = /[0-9]/g;
        if (myInput.value.match(numbers)) {
            number.classList.remove("invalid");
            number.classList.add("valid");
        } else {
            number.classList.remove("valid");
            number.classList.add("invalid");
        }

        // Validate length
        if (myInput.value.length >= 8) {
            lengthIndicator.classList.remove("invalid");
            lengthIndicator.classList.add("valid");
        } else {
            lengthIndicator.classList.remove("valid"); // Fix: Remove "valid" class
            lengthIndicator.classList.add("invalid"); // Fix: Add "invalid" class
        }

 
        /// Check if both passwords match and neither is empty
        if (myInput.value !== myInput2.value && myInput.value !== '' && myInput2.value !== '') {
            field.classList.add("invalidPassword");
            field.classList.remove("valid");
            document.getElementById("message-2").style.display = "block";
        } else {
            field.classList.add("valid");
            field.classList.remove("invalidPassword");
            document.getElementById("message-2").style.display = "none";
        }


        // Check if both passwords are valid and all fields are not empty
        if (isPasswordValid(myInput.value) && isPasswordValid(myInput2.value) && !areAllFieldsEmpty()) {
            // Enable the submit button 
            //enableButton();
        } else {
            // Disable the submit button
            //disableButton();
        }


        // Check if old password is the same as new password
        /*if (myInput.value === myInput3.value) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'New Password cannot be the same as your current password',
            });
            //disableButton();
        }*/
        
    };

    myInput2.onkeyup = function () {

        // Update the "New Password" field to match the "Confirm Password" field

        // Reset the flag to prevent automatic update
        isUserTyping = false;

        // Check if both passwords match
        if (myInput.value !== myInput2.value && myInput.value !== '' && myInput2.value !== '') {
            field.classList.add("invalidPassword");
            field.classList.remove("valid");
            document.getElementById("message-2").style.display = "block";
        } else {
            field.classList.add("valid");
            field.classList.remove("invalidPassword");
            document.getElementById("message-2").style.display = "none";
        }
        // Check if all fields are filled and passwords are valid
        if (isPasswordValid(myInput.value) && isPasswordValid(myInput2.value) && !areAllFieldsEmpty() && myInput.value === myInput2.value) {
            // Enable the submit button
            //enableButton();
        } else {
            // Disable the submit button
            //disableButton();
        }
    };

    // When the user starts to type something inside the "Old Password" field
    myInput3.onkeyup = function () {
        // Reset the flag to prevent automatic update
        isUserTyping = false;

        // Check if old password is the same as new password
        /*if (myInput3.value === myInput.value) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'New Password cannot be the same as your current password',
            });
            //disableButton();
        } */
    };

    //Check if Fields are Empty
    function areAllFieldsEmpty() {
        return myInput.value === '' && myInput2.value === '' && myInput3.value === '';
    }

    function isPasswordValid(password) {

        var lowerCaseLetters = /[a-z]/g;
        var upperCaseLetters = /[A-Z]/g;
        var numbers = /[0-9]/g;

        return (
            password.length >= 8 &&
            password.match(lowerCaseLetters) &&
            password.match(upperCaseLetters) &&
            password.match(numbers) 
        );
    }



   
    // Functions for show/hide password

    //Old Password

    const oldPinInput = document.querySelector("#oldpassword")
    const oldEye = document.querySelector("#oldPasswordEye")

    oldEye.addEventListener("click", function () {
        if (oldPinInput.getAttribute('type') === 'password') {
            oldPinInput.setAttribute('type', 'text');
            oldEye.classList.remove('fa-eye');
            oldEye.classList.add('fa-eye-slash');
        }
        else {
            oldPinInput.setAttribute('type', 'password');
            oldEye.classList.remove('fa-eye-slash');
            oldEye.classList.add('fa-eye');
        }
    });


    //New Password
    const newPinInput = document.querySelector("#newpassword")
    const newEye = document.querySelector("#newPasswordEye")


    newEye.addEventListener("click", function () {

        if (newPinInput.getAttribute('type') === 'password') {
            newPinInput.setAttribute('type', 'text');
            newEye.classList.remove('fa-eye');
            newEye.classList.add('fa-eye-slash');
        }
        else {
            newPinInput.setAttribute('type', 'password');
            newEye.classList.remove('fa-eye-slash');
            newEye.classList.add('fa-eye');
        }
    });

    const confirmPinInput = document.querySelector("#confirmpassword")
    const confirmEye = document.querySelector("#confirmPasswordEye")

    confirmEye.addEventListener("click", function () {
        if (confirmPinInput.getAttribute('type') === 'password') {
            confirmPinInput.setAttribute('type', 'text');
            confirmEye.classList.remove('fa-eye');
            confirmEye.classList.add('fa-eye-slash');
        }
        else {
            confirmPinInput.setAttribute('type', 'password');
            confirmEye.classList.remove('fa-eye-slash');
            confirmEye.classList.add('fa-eye');
        }
    }); 


});

/*const cancelButton = document.querySelector(".cancelButton");*/

/*cancelButton.addEventListener("click", function () {
    var form = document.getElementById("passwordForm");

    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'

    }).then((result) => {
        if (result.isConfirmed) {
            form.reset();
            Swal.fire(
                'Delete',
                'Your file has been deleted.',
                'success'
            )
        }
    });
});*/


//Disable Button
function disableButton() {
    //document.getElementById("subButton").disabled = true;
    subButton.disabled = true;
    subButton.style.opacity = "0.6";

}

//Enable Button
function enableButton() {
    subButton.disabled = false;
    subButton.style.opacity = "0.9";
}

/*window.onload = (event) => {
    disableButton();
};*/

submitButton.addEventListener("click", function (event) {
    event.preventDefault();

    var myInput = document.getElementById("newpassword");
    var myInput2 = document.getElementById("confirmpassword");
    var myInput3 = document.getElementById("oldpassword");

    // Check if all fields are filled
    if (myInput.value.trim() === "" || myInput2.value.trim() === "" || myInput3.value.trim() === "") {
        //disableButton();
        Swal.fire({
            icon: 'error',
            title: 'Failed',
            text: 'Please fill in all fields!',
        });
        return;
    }

    // Check if old password is the same as new password
    if (myInput.value === myInput3.value) {
        Swal.fire({
            icon: 'error',
            title: 'Failed',
            text: 'New Password cannot be the same as your current password',
        });
        return;
    }

    // Check if both passwords match
    if (myInput.value !== myInput2.value) {
        field.classList.add("invalidPassword");
        field.classList.remove("valid");
        document.getElementById("message-2").style.display = "block";
    } else {
        field.classList.add("valid");
        field.classList.remove("invalidPassword");
        document.getElementById("message-2").style.display = "none";
    }

    // Check the validity of the passwords
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;
    var minLength = 8;

    if (
        myInput.value.length >= minLength &&
        myInput.value.match(lowerCaseLetters) &&
        myInput.value.match(upperCaseLetters) &&
        myInput.value.match(numbers) &&
        myInput.value === myInput2.value
    ) {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, submit it'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Success',
                    'Your password has been changed',
                    'success'
                );

                //disableButton();

                // Reset the input fields
                myInput.value = "";
                myInput2.value = "";
                myInput3.value = "";

                // Reset the messages and hide them
                resetParam();

                // Hide the messages
                document.getElementById("message").style.display = "block";
                document.getElementById("message-2").style.display = "none";

                // Disable the submit button
                //disableButton();
            }
        });
    } else if (
        myInput.value.length >= minLength &&
        myInput.value.match(lowerCaseLetters) &&
        myInput.value.match(upperCaseLetters) &&
        myInput.value.match(numbers)
    ) {
        Swal.fire({
            icon: 'error',
            title: 'Failed',
            text: 'Passwords does not match. ',
        });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Failed',
            text: 'Please follow the specified parameters.',
        });
    }
});

function resetParam() {

    var lengthIndicator = document.getElementById("length");

    letter.classList.remove("valid");
    letter.classList.add("invalid");

    capital.classList.remove("valid");
    capital.classList.add("invalid");

    number.classList.remove("valid");
    number.classList.add("invalid");

    field.classList.remove("valid");
    field.classList.add("invalid");

    lengthIndicator.classList.remove("valid");
    lengthIndicator.classList.add("invalid");

    document.getElementById("message-2").style.display = "none";
}

//Border Red 
inputFields.forEach(function (inputField) {
    inputField.addEventListener('blur', function () {

        var verticalLine = inputField.parentElement.querySelector(".pinVerticalLine");


        if (inputField.value.trim() === '') {
            inputField.classList.add('empty-input');
            verticalLine.style.backgroundColor = 'red';
        } else {
            inputField.classList.remove('empty-input');
            verticalLine.style.backgroundColor = '#0e56b5';

        }
    });

    inputField.addEventListener('input', function () {
        if (inputField.value.trim() === '') {
            inputField.classList.add('empty-input');


        } else {
            inputField.classList.remove('empty-input');
        }
    });
});




