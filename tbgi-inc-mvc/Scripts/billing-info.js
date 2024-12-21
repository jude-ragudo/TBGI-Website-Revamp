function showErr(msg, title) {
    Swal.fire({
        icon: 'error',
        title: title,
        text: msg,
    })
}
function setName(name) {
    switch (name) {
        case 'fname':
            name = "First Name";
            break;
        case 'lname':
            name = "Last Name";
            break;
        case 'ba1':
        case 'ba2':
            name = "Billing Address"
            break;
        case 'city':
            name = "City";
            break;
        case 'country':
            name = "Country/Region";
            break;
        case 'email':
            name = "Email";
            break;
        case 'cardType':
            name = "Card Type";
            break;
        case 'cardNumber':
            name = "Card Number";
            break;
        case 'cvv':
            name = 'CVV';
            break;
        case 'month':
        case 'year':
            name = "Expiration Date"
            break;
        default:
            name = '';
    }
    return name;
}

function checkInput() {
    const inputField = document.querySelectorAll('.payment-box');
    var inputName = '';
    inputField.forEach((input) => {
        if (input.value == '') {
            input.style.borderColor = 'red';
            if (inputName == '') {
                inputName = input.id;
                inputName = setName(inputName);
            }
        } else {
            input.style.borderColor = 'black';
        }
    })
    const invalid = 'Invalid Input';
    const missing = 'Missing Input';
    if (!inputName == '') {
        showErr("Please enter " + inputName, missing);
    } else if (!checkEmail(inputField[6].value)) {
        showErr("Please enter valid Email", invalid);
    } else if (inputField[8].value.length != 16) {
        showErr("Card Number needs to be 16 digits", invalid);
    } else if (!checkExpiry(inputField[10].value, inputField[11].value)) {
        showErr("Please enter valid Expiry Date", invalid);
    } else {
        submitConfirm();
    }
}
function numberOnly(input) {
    input.value = input.value.replace(/[^0-9]/g, '');
}
function lettersOnly(input) {
    input.value = input.value.replace(/[^a-zA-Z]/g, '');
}
function checkEmail(value) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(value);
}
function checkExpiry(month, year) {
    return ((month <= 12 && month >= 1) && (year >= 0)) ? true : false;
}
function submitConfirm() {
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
            container: 'custom-sweetalert',
            popup: "my-swal-popup"
        }
    }).then((result) => {
        if (result.isConfirmed) {
            let timerInterval
            Swal.fire({
                title: 'Payment Successful',
                html: 'Returning to Dashboard in <strong></strong> second/s.',
                timer: 3000,
                timerProgressBar: true,
                customClass: {
                    container: 'custom-sweetalert',
                    popup: "my-swal-popup"
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
                    const pform = document.getElementById('productsForm');
                    pform.submit();
                }
            })
        }
    });
}