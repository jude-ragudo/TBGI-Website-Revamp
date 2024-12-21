// Modal Functions

// Get the modal
var modal = document.getElementById("myModal");
var btn = document.getElementById("modalBtn");
var btn2 = document.getElementById("modalBtn2");
var closeBtn = document.getElementById("closeBtn");

closeBtn.addEventListener("click", closeModal);
window.addEventListener("click", outsideClick);

// When the user clicks the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
    document.getElementById('Tab1').style.display = 'block';
    document.getElementsByClassName('tablinks')[0].classList.add('active');
}

btn2.onclick = function () {
    modal.style.display = "block";
    document.getElementById('Tab1').style.display = 'block';
    document.getElementsByClassName('tablinks')[0].classList.add('active');
}



// Function to switch between tabs
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active"); // Remove "active" class from all tab buttons
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.classList.add("active"); // Add "active" class to the clicked tab button
}

function closeModal() {
    modal.style.display = "none";

    // Reset tab state
    var tabcontent = document.getElementsByClassName("tabcontent");
    for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    var tablinks = document.getElementsByClassName("tablinks");
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }
    var passwordInput = document.getElementById('newPin');
    passwordInput.value = "";

    var passwordInput = document.getElementById('oldPin');
    passwordInput.value = "";

    var passwordInput = document.getElementById('confirmPin');
    passwordInput.value = "";

    document.getElementById('Tab1').style.display = 'block';
    document.getElementsByClassName('tablinks')[0].classList.add('active');



}

var pinInputs = document.querySelectorAll("#oldPin, #newPin, #confirmPin");

pinInputs.forEach(function (element) {
    element.addEventListener("keypress", function (evt) {
        if (evt.which < 48 || evt.which > 57) {
            evt.preventDefault();
        }
    });
});

function restrictToNumbers(event) {
    var oldPinInput = document.getElementById('oldPin');
    oldPinInput.addEventListener('input', restrictToNumbers);

    var newPinInput = document.getElementById('newPin');
    newPinInput.addEventListener('input', restrictToNumbers);

    var confirmPinInput = document.getElementById('confirmPin');
    confirmPinInput.addEventListener('input', restrictToNumbers);

    var input = event.target;
    var inputValue = input.value;

    // Remove any non-numeric characters from the input
    var numericValue = inputValue.replace(/\D/g, '');

    // Set the input value to the numeric value
    input.value = numericValue;
}

function outsideClick(event) {
    if (event.target === modal) {
        closeModal();
    }
}

window.onload = function () {
    var oldPin = document.getElementById('oldPin');
    var newPin = document.getElementById('newPin');
    var confirmPin = document.getElementById('confirmPin');

    var limitInputLength = function (input) {
        input.addEventListener('input', function () {
            if (input.value.length > 6) {
                input.value = input.value.slice(0, 6);
            }
        });
    }

    limitInputLength(oldPin);
    limitInputLength(newPin);
    limitInputLength(confirmPin);
}


function clearCard() {

    var cardName = document.getElementById('cardName');
    var cardBrand = document.getElementById('cardBrand');
    var cardNumber = document.getElementById('cardNumber');
    var cardValidity = document.getElementById('cardValidity');

    if (cardName.textContent.trim().length > 0) {
        Swal.fire({
            title: 'Confirm Removal',
            text: "Do you want to remove this card?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            target: document.getElementById('myModal'),
            customClass: {
                container: "my-swal",
                popup: "my-swal-popup"
            },
            confirmButtonText: 'Confirm'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: 'Deleted!',
                    text: 'Your card has been deleted.',
                    icon: 'success',
                    target: document.getElementById('myModal'),
                    customClass: {
                        container: "my-swal",
                        popup: "my-swal-popup"
                    }
                });

                // Clear the card information
                cardName.textContent = '';
                cardBrand.textContent = '';
                cardNumber.textContent = '';
                cardValidity.textContent = '';
            }
        });
    } else {
        Swal.fire({
            title: 'Error',
            text: 'The card information is empty.',
            icon: 'error',
            target: document.getElementById('myModal'),
            customClass: {
                container: "my-swal",
                popup: "my-swal-popup"
            }
        });
    }

    
}


// Functions for show/hide password

const newPinInput = document.querySelector("#newPin")
const newEye = document.querySelector("#newPinEye")


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

const oldPinInput = document.querySelector("#oldPin")
const oldEye = document.querySelector("#oldPinEye")

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

const confirmPinInput = document.querySelector("#confirmPin")
const confirmEye = document.querySelector("#confirmPinEye")

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

const updatePin = document.querySelector("#updatePin")

updatePin.addEventListener("click", function () {
    var newPinInput = document.getElementById('newPin');
    var oldPinInput = document.getElementById('oldPin');
    var confirmPinInput = document.getElementById('confirmPin');

    if (newPinInput.value !== '' && oldPinInput.value !== '' && confirmPinInput.value !== '') {
        if (newPinInput.value.length == 6 && oldPinInput.value.length == 6 && confirmPinInput.value.length == 6) {
            if (newPinInput.value == oldPinInput.value) {
                Swal.fire({
                    title: "Fail",
                    text: "Old PIN and new PIN match. Please enter a different PIN",
                    icon: "error",
                    showConfirmButton: false,
                    timer: 1500,
                    target: document.getElementById('myModal'),
                    customClass: {
                        container: "my-swal", // Add a custom class to the SweetAlert dialog
                        popup: "my-swal-popup" // Add a custom class to the SweetAlert dialog content
                    },
                });

                newPinInput.value = "";
                oldPinInput.value = "";
                confirmPinInput.value = "";
            }
            
            else if (newPinInput.value == confirmPinInput.value) {
                Swal.fire({
                    title: "Success",
                    text: "PIN Successfully Changed!",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 1500,
                    target: document.getElementById('myModal'),
                    customClass: {
                        container: "my-swal", // Add a custom class to the SweetAlert dialog
                        popup: "my-swal-popup" // Add a custom class to the SweetAlert dialog content
                    },
                });

                newPinInput.value = "";
                oldPinInput.value = "";
                confirmPinInput.value = "";
            }
            else {
                Swal.fire({
                    title: "Fail",
                    text: "PIN not equal. Please enter PIN again",
                    icon: "error",
                    showConfirmButton: false,
                    timer: 1500,
                    target: document.getElementById('myModal'),
                    customClass: {
                        container: "my-swal", // Add a custom class to the SweetAlert dialog
                        popup: "my-swal-popup" // Add a custom class to the SweetAlert dialog content
                    },
                });

                newPinInput.value = "";
                oldPinInput.value = "";
                confirmPinInput.value = "";
            }

        }
        else {
            Swal.fire({
                title: "Fail",
                text: "PIN must be 6 digits!",
                icon: "error",
                showConfirmButton: false,
                timer: 1500,
                target: document.getElementById('myModal'),
                customClass: {
                    container: "my-swal", // Add a custom class to the SweetAlert dialog
                    popup: "my-swal-popup" // Add a custom class to the SweetAlert dialog content
                },
            });

            newPinInput.value = "";
            oldPinInput.value = "";
            confirmPinInput.value = "";
        }

    }

    else {
        Swal.fire({
            title: "Fail",
            text: "Please enter PIN",
            icon: "error",
            showConfirmButton: false,
            timer: 1500,
            target: document.getElementById('myModal'),
            customClass: {
                container: "my-swal", // Add a custom class to the SweetAlert dialog
                popup: "my-swal-popup" // Add a custom class to the SweetAlert dialog content
            },
        });

        newPinInput.value = "";
        oldPinInput.value = "";
        confirmPinInput.value = "";
    }




});

// Transaction History Table

var data = [
    { 'Transaction ID': "Q11111111", Date: "02-15-2022", Merchant: "Brand", Debit: "PHP 500.00", 'Running Balance': "PHP 10,000.00", Status: "Completed" },
    { 'Transaction ID': "Q22222222", Date: "03-10-2022", Merchant: "Brand", Debit: "PHP 500.00", 'Running Balance': "PHP 10,000.00", Status: "Completed" },
    { 'Transaction ID': "Q33333333", Date: "03-26-2022", Merchant: "Brand", Debit: "PHP 500.00", 'Running Balance': "PHP 10,000.00", Status: "Completed" },
    { 'Transaction ID': "Q44444444", Date: "04-10-2022", Merchant: "Brand", Debit: "PHP 500.00", 'Running Balance': "PHP 10,000.00", Status: "Completed" },
    { 'Transaction ID': "Q55555555", Date: "05-10-2022", Merchant: "Brand", Debit: "PHP 500.00", 'Running Balance': "PHP 10,000.00", Status: "Completed" },
    { 'Transaction ID': "Q66666666", Date: "08-10-2022", Merchant: "Brand", Debit: "PHP 500.00", 'Running Balance': "PHP 10,000.00", Status: "Completed" },
    { 'Transaction ID': "Q77777777", Date: "01-10-2023", Merchant: "Brand", Debit: "PHP 500.00", 'Running Balance': "PHP 10,000.00", Status: "Failed" },
    { 'Transaction ID': "Q88888888", Date: "03-10-2023", Merchant: "Brand", Debit: "PHP 500.00", 'Running Balance': "PHP 10,000.00", Status: "Failed" },
    { 'Transaction ID': "Q99999999", Date: "04-10-2023", Merchant: "Brand", Debit: "PHP 500.00", 'Running Balance': "PHP 10,000.00", Status: "Failed" },
    { 'Transaction ID': "Q12121212", Date: "05-08-2023", Merchant: "Brand", Debit: "PHP 500.00", 'Running Balance': "PHP 10,000.00", Status: "Pending" },
    { 'Transaction ID': "Q34343434", Date: "07-27-2023", Merchant: "Brand", Debit: "PHP 500.00", 'Running Balance': "PHP 10,000.00", Status: "Pending" },
    { 'Transaction ID': "Q56565656", Date: "10-10-2023", Merchant: "Brand", Debit: "PHP 500.00", 'Running Balance': "PHP 10,000.00", Status: "Pending" },
];
function generateTable(data) {
    var tableBody = document.getElementById("table-body");

    // Clear existing table rows
    tableBody.innerHTML = '';

    // Check if data is empty
    if (data.length === 0) {
        displayEmptyTable();
    } else {
        // Loop through the data and create the table rows and cells
        data.forEach(function (rowData) {
            var row = document.createElement("tr");

            Object.values(rowData).forEach(function (value) {
                var cell = document.createElement("td");
                var text = document.createElement("span");
                text.textContent = value;
                cell.appendChild(text);
                row.appendChild(cell);

                if (text.innerText.toLowerCase() === "completed") {
                    text.classList.add("completed-transaction");
                } else if (text.innerText.toLowerCase() === "pending") {
                    text.classList.add("pending-transaction");
                } else if (text.innerText.toLowerCase() === "failed") {
                    text.classList.add("failed-transaction");
                }
            });

            tableBody.appendChild(row);
        });
    }
}

function displayEmptyTable() {
    var tableBody = document.getElementById("table-body");

    var numRows = 1; // Number of rows
    var numCells = 6; // Number of cells per row

    for (var i = 0; i < numRows; i++) {
        var row = document.createElement("tr");

        for (var j = 0; j < numCells; j++) {
            var cell = document.createElement("td");
            cell.textContent = "No Data Available";
            row.appendChild(cell);
        }

        tableBody.appendChild(row);
    }
}

function filterTable() {
    var startDate = new Date(document.getElementById('startdate').value);
    var endDate = new Date(document.getElementById('enddate').value);
    var merchant = document.getElementById('merchant').value.toLowerCase();

    var filteredData = data.filter(function (item) {
        var rowDate = new Date(item.Date.replace(/-/g, '/')); // Fix date format for Safari compatibility
        var rowMerchant = item.Merchant.toLowerCase();

        var matchDate = rowDate >= startDate && rowDate <= endDate;
        var matchMerchant = merchant !== '' && rowMerchant.includes(merchant); // Check if merchant is empty


        return matchDate && matchMerchant;
    });

    var hasInputs = startDate && endDate && merchant;
    var hasMatches = filteredData.length > 0;

    if (hasInputs && !hasMatches) {
        var tableBody = document.getElementById("table-body");

        // Clear existing table rows
        tableBody.innerHTML = '';
        displayEmptyTable();
    } else {
        generateTable(hasInputs ? filteredData : data);
    }
}

// Add an event listener to the filter button
var filterButton = document.getElementById('filter');
filterButton.addEventListener('click', filterTable);

//Disable function for filter button
function checkInputFields() {
    var startDate = document.getElementById('startdate').value;
    var endDate = document.getElementById('enddate').value;
    var merchant = document.getElementById('merchant').value;

    var filterButton = document.getElementById('filter');

    if (startDate === '' || endDate === '' || merchant === '') {
        filterButton.disabled = true;
        filterButton.classList.add('disabled');
    } else {
        filterButton.disabled = false;
        filterButton.classList.remove('disabled');
    }
}

document.getElementById('startdate').addEventListener('input', checkInputFields);
document.getElementById('enddate').addEventListener('input', checkInputFields);
document.getElementById('merchant').addEventListener('input', checkInputFields);

// Call the function to generate the initial dynamic table
generateTable(data);


