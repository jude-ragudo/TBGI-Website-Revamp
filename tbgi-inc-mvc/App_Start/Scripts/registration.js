const inputFields = document.querySelectorAll('input[type = "text"], input[type = "date"], input[type = "password"], select');

var selectLists = document.querySelectorAll('input[type = "date"], select');

const circles = document.querySelectorAll(".circle"),
    progressBar = document.querySelector(".indicator");
let currentStep = 1;

var numberInput = document.getElementById("mnum");

var sourceDiv = document.getElementById('rightside');
var targetDiv = document.getElementById('leftside');

var passString = "Clear";

const pass = document.querySelector("#pword");
const passEye = document.querySelector("#passEye");
const repass = document.querySelector("#reppword");
const repassEye = document.querySelector("#repassEye");

updateTargetHeight();
window.addEventListener('resize', updateTargetHeight);
document.forms["regForm"]["mnum"].value = "09";

/* id selector to obtain div heights */
function updateTargetHeight() {
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    var sourceHeight = sourceDiv.clientHeight + 170;

    if (windowWidth >= 1024) {
        if (windowHeight < sourceHeight) {
            targetDiv.style.height = sourceHeight + 'px';
        } else {
            targetDiv.style.height = windowHeight + 'px';
        }
    } else if (windowWidth >= 768) {
        targetDiv.style.height = 100 + '%';
    } else if (windowWidth >= 425) {
        targetDiv.style.height = 204 + 'px';
    } else if (windowWidth >= 375) {
        targetDiv.style.height = 180 + 'px';
    } else if (windowWidth >= 320) {
        targetDiv.style.height = 154 + 'px';
    }
}

/* function to return correct email format */
function isValidEmail(email) {
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    return emailPattern.test(email);
}

/* function to meet password character requirements */
function validatePassword() {
    var passwordInput = document.getElementById("pword");
    var password = passwordInput.value;

    var numberRegex = /\d/;
    var lowercaseRegex = /[a-z]/;
    var uppercaseRegex = /[A-Z]/;
    var lengthRegex = /^.{8,}$/;

    if (!numberRegex.test(password)) {
        passString = "Password must contain at least one number.";
        return 1;
    }

    if (!lowercaseRegex.test(password)) {
        passString = "Password must contain at least one lowercase letter.";
        return 1;
    }

    if (!uppercaseRegex.test(password)) {
        passString = "Password must contain at least one uppercase letter.";
        return 1;
    }

    if (!lengthRegex.test(password)) {
        passString = "Password must be at least 8 characters long.";
        return 1;
    }

    passString = "Clear"
    return 0;
}

/* validation for birthdate */
function validateBday() {
    var birthdayInput = document.getElementById("bday").value;
    var today = new Date();
    var birthday = new Date(birthdayInput);
    var age = today.getFullYear() - birthday.getFullYear();

    if (age >= 18 && age < 120) {
        return true;
    } else {
        return false;
    }
}

/* validation for number length */
function validateNum(x) {
    if (x.length < 11) {
        return 0;
    } else {
        return 1;
    }
}

/* various input form validations */
function validateForm(x) {
    var uname = document.forms["regForm"]["uname"].value;
    var email = document.forms["regForm"]["email"].value;
    var password = document.forms["regForm"]["pword"].value;
    var reppassword = document.forms["regForm"]["reppword"].value;
    var fname = document.forms["regForm"]["fname"].value;
    var lname = document.forms["regForm"]["lname"].value;
    var mnum = document.forms["regForm"]["mnum"].value;
    var bday = document.forms["regForm"]["bday"].value;
    var gender = document.forms["regForm"]["gender"].value;
    var address = document.forms["regForm"]["address"].value;
    var naturesel = document.forms["regForm"]["naturesel"].value;
    var sourcesel = document.forms["regForm"]["sourcesel"].value;
    var passError = validatePassword();
    var bdayPass = validateBday();
    let conditionMet = false;
    var emailValid = isValidEmail(email);
    var mnumValid = validateNum(mnum);


    if (x == 1) {
        if (!bdayPass) {
            swal_error('Please enter a valid birthdate (must also be at least 18 y/o)');
            return false;
        }

        if (fname === '' || lname === '' || bday === '' || gender === '') {
            swal_error('Please ensure all required information is filled out');
            return false;
        } else {
            return x;
        }
    } else if (x == 2) {
        if (!mnumValid) {
            swal_error('Please enter a valid mobile number');
            return false;
        }

        if (mnum === '' || address === '' || naturesel === '' || sourcesel === '') {
            swal_error('Please ensure all required information is filled out');
            return false;
        } else {
            return x;
        }
    } else {
        if (email === "") {
            swal_error('Please enter your email');
            conditionMet = true;
            return false;
        } if (uname === "") {
            swal_error('Please enter your username');
            conditionMet = true;
            return false;
        } if (password === "") {
            swal_error('Please enter your password');
            conditionMet = true;
            return false;
        } if (reppassword === "") {
            swal_error('Please re-enter your password');
            conditionMet = true;
            return false;
        } if (password != reppassword) {
            swal_error('Passwords do not Match');
            conditionMet = true;
            return false;
        } if (!emailValid) {
            swal_error('Incorrect email pattern');
            conditionMet = true;
            return false;
        } if (passError) {
            swal_error(passString);
            conditionMet = true;
            return false;
        } if (!conditionMet) {
            return x;
        }
    }
}

/* function to pass string to SWAL error */
function swal_error(x) {
    Swal.fire({
        icon: 'error',
        title: 'Error',
        text: x,
        confirmButtonColor: '#3F6B85',
        customClass: {
            container: 'custom-sweetalert'
        }
    });
}

/* function for checking empty fields per section */
function slideEmptyField(x) {
    const section1 = document.querySelector("#section1");
    const section2 = document.querySelector("#section2");

    const sec1inp = section1.querySelectorAll('input');
    const sec2inp = section2.querySelectorAll('input');

    const sec1sel = section1.querySelectorAll('select');
    const sec2sel = section2.querySelectorAll('select');
    
    if (x == 1) {
        sec1inp.forEach((input) => {
            if (input.value.trim() === '') {
                input.classList.add('empty-input');
            } else {
                input.classList.remove('empty-input');
            }
        });

        sec1sel.forEach((select) => {
            if (select.value.trim() === '') {
                select.classList.add('empty-input');
            } else {
                select.classList.remove('empty-input');
            }
        });
    } else if (x == 2) {
        sec2inp.forEach((input) => {
            if (input.value.trim() === '') {
                input.classList.add('empty-input');
            } else {
                input.classList.remove('empty-input');
            }
        });

        sec2sel.forEach((select) => {
            if (select.value.trim() === '') {
                select.classList.add('empty-input');
            } else {
                select.classList.remove('empty-input');
            }
        });
    }
}

/* function to final check inputs for submission */
function submitForm() {
    const section3 = document.querySelector("#section3");
    const sec3inp = section3.querySelectorAll('input');
    const sec3sel = section3.querySelectorAll('select');
    var line1 = document.getElementById("line1");
    var line2 = document.getElementById("line2");

    sec3inp.forEach((input) => {
        if (input.value.trim() === '') {
            input.classList.add('empty-input');
            if (sec3inp[0]) {
                line1.style.backgroundColor = 'red';
            }
            if (sec3inp[1]) {
                line2.style.backgroundColor = 'red';
            }
        } else {
            input.classList.remove('empty-input');
            if (sec3inp[0]) {
                line1.style.backgroundColor = '#0E56B5';
            }
            if (sec3inp[1]) {
                line2.style.backgroundColor = '#0E56B5';
            }
        }
    });

    sec3sel.forEach((select) => {
        if (select.value.trim() === '') {
            select.classList.add('empty-input');
        } else {
            select.classList.remove('empty-input');
        }
    });

    const validation = validateForm(currentStep);

    if (validation == 3) {
        Swal.fire({
            title: 'Are you sure?',
            text: 'Once submitted, you cannot undo this action.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            confirmButtonColor: '#3085d6',
            cancelButtonText: 'Cancel',
            cancelButtonColor: '#D33',
            customClass: {
                container: 'custom-sweetalert'
            }
        }).then((result) => {
            if (result.isConfirmed) {
                let timerInterval
                Swal.fire({
                    title: 'Successful Registration',
                    html: 'Returning to Login Page in <strong></strong> second/s.',
                    timer: 3000,
                    timerProgressBar: true,
                    customClass: {
                        container: 'custom-sweetalert'
                    },
                    didOpen: () => {
                        Swal.showLoading()
                        timerInterval = setInterval(() => {
                            Swal.getHtmlContainer().querySelector('strong')
                                .textContent = (Swal.getTimerLeft() / 1000)
                                    .toFixed(0)
                        }, 100)
                    },
                    willClose: () => {
                        clearInterval(timerInterval)
                    }
                }).then((result) => {
                    if (result.dismiss === Swal.DismissReason.timer) {
                        const form = document.getElementById('regForm');
                        form.submit();
                    }
                })
            }
        });
    }
}

/* onclick function for next button */
function nextButton() {
    slideEmptyField(currentStep);
    const validation = validateForm(currentStep);

    if (validation) {
        ++currentStep;

        circles.forEach((circle, index) => {
            circle.classList[`${index < currentStep ? "add" : "remove"}`]("active");
        });

        progressBar.style.width = `${((currentStep - 1) / (circles.length - 1)) * 100}%`;

        checkCircles();
    }
}

/* onclick function for previous button */
function prevButton() {
    --currentStep;
    
    circles.forEach((circle, index) => {
        circle.classList[`${index < currentStep ? "add" : "remove"}`]("active");
    });

    progressBar.style.width = `${((currentStep - 1) / (circles.length - 1)) * 100}%`;

    checkCircles();
}

/* function for slider movement */
function checkCircles() {
    const section1 = document.getElementById('section1');
    const section2 = document.getElementById('section2');
    const section3 = document.getElementById('section3');
    const submit = document.getElementById('subButton');

    if (currentStep === circles.length) {
        next.disabled = true;
        section1.style.display = 'none';
        section2.style.display = 'none';
        section3.style.display = 'block';
        submit.style.display = 'inline-block';
    } else if (currentStep === 1) {
        prev.disabled = true;
        section1.style.display = 'block';
        section2.style.display = 'none';
        section3.style.display = 'none';
        submit.style.display = 'none';
    } else {
        next.disabled = false;
        prev.disabled = false;
        section1.style.display = 'none';
        section2.style.display = 'block';
        section3.style.display = 'none';
        submit.style.display = 'none';
    }
}

/* query selector to add border for empty fields */
inputFields.forEach(function (inputField) {
    var verticalLine = inputField.parentElement.querySelector(".passVerticalLine");
    inputField.addEventListener('blur', function () {
        if (inputField.value.trim() === '') {
            inputField.classList.add('empty-input');
            verticalLine.style.backgroundColor = 'red';
        } else {
            inputField.classList.remove('empty-input');
            verticalLine.style.backgroundColor = '#0E56B5';
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

/* query selector for date and password highlight */
selectLists.forEach(function (select) {
    select.addEventListener('change', function () {
        select.style.color = 'black';
    });
});

/* mobile number numerical input and initial number entry */
numberInput.addEventListener("input", function (event) {
    var startingNumbers = '09';
    var maxLength = 11;
    var inputValue = event.target.value;
    event.target.value = inputValue.replace(/\D/g, "");
    var currentValue = inputValue.replace(/\D/g, '');

    if (currentValue.length > maxLength) {
        event.target.value = currentValue.slice(0, maxLength);
    }

    if (currentValue.length < startingNumbers.length) {
        event.target.value = startingNumbers.slice(0, currentValue.length);
    }

    if (!currentValue.startsWith(startingNumbers)) {
        event.target.value = startingNumbers;
    }
});


/* eye password reveal */
passEye.addEventListener("click", function () {
    if (pass.getAttribute('type') === 'password') {
        pass.setAttribute('type', 'text');
        passEye.classList.remove('fa-eye');
        passEye.classList.add('fa-eye-slash');
    }
    else {
        pass.setAttribute('type', 'password');
        passEye.classList.remove('fa-eye-slash');
        passEye.classList.add('fa-eye');
    }
});

repassEye.addEventListener("click", function () {
    if (repass.getAttribute('type') === 'password') {
        repass.setAttribute('type', 'text');
        repassEye.classList.remove('fa-eye');
        repassEye.classList.add('fa-eye-slash');
    }
    else {
        repass.setAttribute('type', 'password');
        repassEye.classList.remove('fa-eye-slash');
        repassEye.classList.add('fa-eye');
    }
});
