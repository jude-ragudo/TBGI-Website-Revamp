//FOR THE SHOW/HIDE PASSWORD FUNCTION
const pw = document.querySelector("#password");
const eye = document.querySelector("#eye");
const eyeSlash = document.querySelector("#eye-slash");

eye.addEventListener("click", togglePasswordVisibility);
eyeSlash.addEventListener("click", togglePasswordVisibility);

function togglePasswordVisibility() {
    const isPasswordVisible = pw.getAttribute("type") === "text";
    pw.setAttribute("type", isPasswordVisible ? "password" : "text");
    eye.style.display = isPasswordVisible ? "inline-block" : "none";
    eyeSlash.style.display = isPasswordVisible ? "none" : "inline-block";
}

//FOR THE ERROR MESSAGE ON LOGIN BUTTON PRESS
function validateForm() {
    var username = document.forms["loginForm"]["username"].value;
    var password = document.forms["loginForm"]["password"].value;

    if (username === "" && password === "") {
        Swal.fire({
            icon: 'error',
            title: 'Failed',
            text: 'Please input a username and password',
            confirmButtonColor: '#3F6B85',
            customClass: {
                container: 'custom-sweetalert'
            }
        });
        return false;
    } else if (username === "") {
        Swal.fire({
            icon: 'error',
            title: 'Failed',
            text: 'Please input a username',
            confirmButtonColor: '#3F6B85',
            customClass: {
                container: 'custom-sweetalert'
            }
        });
        return false;
    } else if (password === "") {
        Swal.fire({
            icon: 'error',
            title: 'Failed',
            text: 'Please input a password',
            confirmButtonColor: '#3F6B85',
            customClass: {
                container: 'custom-sweetalert'
            }
        });
        return false;
    }
}