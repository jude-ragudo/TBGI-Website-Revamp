function showErr(msg,title) {
    Swal.fire({
        icon: 'error',
        title: title,
        text: msg,
    })
}
function decimalValid(value) {
    var regex = /^\d+\.\d{2}$/;
    return regex.test(value);
}

function checkInput() {
    const inputField = document.querySelectorAll('.payment-box');
    var inputName = '';
    inputField.forEach((input) => {
        if (input.value == '') {
            input.style.borderColor = 'red';
            if (inputName == '') {
                inputName = input.id;
                inputName = inputName.charAt(0).toUpperCase() + inputName.slice(1);
                inputName = inputName.replace(/([A-Z])/g, ' $1').trim();
            }
        } else {
            input.style.borderColor = 'black';
        }
    })

    if (!inputName == '') {
        showErr("Please enter " + inputName, 'Missing Input');
    } else if (inputField[2].value.length != 16) {
        showErr("Card Number needs to be 16 digits", 'Invalid Input');
    } else if (!decimalValid(inputField[3].value)){
        showErr("Amount needs two decimal places", 'Invalid Input');
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
                    const form = document.getElementById('servicesForm');
                    form.submit();
                }
            })
        }
    });
}