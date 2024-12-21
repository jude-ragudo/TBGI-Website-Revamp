var data = [
    { 'Transaction ID': "Q11111111", Date: "02-15-2022", Merchant: "Brand", Debit: "PHP 500.00", 'Running Balance': "PHP 10,000.00", Status: "Completed" },
    { 'Transaction ID': "Q22222222", Date: "03-10-2022", Merchant: "Brand", Debit: "PHP 500.00", 'Running Balance': "PHP 10,000.00", Status: "Completed" },
    { 'Transaction ID': "Q33333333", Date: "03-26-2022", Merchant: "Brand", Debit: "PHP 500.00", 'Running Balance': "PHP 10,000.00", Status: "Completed" },
    { 'Transaction ID': "Q44444444", Date: "04-10-2022", Merchant: "Brand", Debit: "PHP 500.00", 'Running Balance': "PHP 10,000.00", Status: "Completed" },
    { 'Transaction ID': "Q55555555", Date: "05-10-2022", Merchant: "Brand", Debit: "PHP 500.00", 'Running Balance': "PHP 10,000.00", Status: "Completed" },
    { 'Transaction ID': "Q66666666", Date: "08-10-2022", Merchant: "Brand", Debit: "PHP 500.00", 'Running Balance': "PHP 10,000.00", Status: "Completed" },
    { 'Transaction ID': "Q77777777", Date: "01-10-2023", Merchant: "Brand", Debit: "PHP 500.00", 'Running Balance': "PHP 10,000.00", Status: "Completed" },
    { 'Transaction ID': "Q88888888", Date: "03-10-2023", Merchant: "Brand", Debit: "PHP 500.00", 'Running Balance': "PHP 10,000.00", Status: "Completed" },
    { 'Transaction ID': "Q99999999", Date: "04-10-2023", Merchant: "Brand", Debit: "PHP 500.00", 'Running Balance': "PHP 10,000.00", Status: "Completed" },
    { 'Transaction ID': "Q12121212", Date: "04-08-2023", Merchant: "Brand", Debit: "PHP 500.00", 'Running Balance': "PHP 10,000.00", Status: "Completed" },
    { 'Transaction ID': "Q34343434", Date: "07-27-2023", Merchant: "Brand", Debit: "PHP 500.00", 'Running Balance': "PHP 10,000.00", Status: "Completed" },
    { 'Transaction ID': "Q56565656", Date: "10-10-2023", Merchant: "Brand", Debit: "PHP 500.00", 'Running Balance': "PHP 10,000.00", Status: "Completed" },
];

function generateTable() {
    var table = document.getElementById("dynamic-table");
    var thead = document.createElement("thead");
    var tbody = document.createElement("tbody");

    // Create the table header row
    var headerRow = document.createElement("tr");
    var headers = Object.keys(data[0] || {});

    // Loop through the headers and create the table header cells
    headers.forEach(function (header) {
        var th = document.createElement("th");
        th.textContent = header;
        headerRow.appendChild(th);
    });

    // Append the header row to the thead
    thead.appendChild(headerRow);

    // Append the thead to the table
    table.appendChild(thead);

    // Append the tbody to the table
    table.appendChild(tbody);

    // Check if data is empty
    if (data.length === 0) {
        displayEmptyTable();
    } else {
        // Loop through the data and create the table rows and cells
        data.forEach(function (item) {
            var row = document.createElement("tr");

            // Loop through the object properties and create the table cells
            headers.forEach(function (header) {
                var cell = document.createElement("td");
                cell.textContent = item[header];
                row.appendChild(cell);
            });

            // Append the row to the tbody
            tbody.appendChild(row);
        });
    }
}

function generateFilteredTable(data) {
    var table = document.getElementById("dynamic-table");
    var tbody = table.getElementsByTagName("tbody")[0];

    // Clear existing table rows
    tbody.innerHTML = '';

    // Check if data is empty
    if (data.length === 0) {
        displayEmptyTable();
    } else {
        // Loop through the data and create the table rows and cells
        data.forEach(function (item) {
            var row = document.createElement("tr");

            // Loop through the object properties and create the table cells
            Object.values(item).forEach(function (value) {
                var cell = document.createElement("td");
                cell.textContent = value;
                row.appendChild(cell);
            });

            // Append the row to the tbody
            tbody.appendChild(row);
        });
    }
}

// Function to display "No data available" message with multiple rows and cells
function displayEmptyTable() {
    var table = document.getElementById("dynamic-table");
    var tbody = table.getElementsByTagName("tbody")[0];

    var numRows = 1; // Number of rows
    var numCells = 6; // Number of cells per row

    for (var i = 0; i < numRows; i++) {
        var row = document.createElement("tr");

        for (var j = 0; j < numCells; j++) {
            var cell = document.createElement("td");
            cell.textContent = "No Data Available";
            row.appendChild(cell);
        }

        tbody.appendChild(row);
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
        var matchMerchant = rowMerchant.includes(merchant);

        return matchDate && matchMerchant;
    });

    generateFilteredTable(filteredData);
}

// Add an event listener to the filter button
var filterButton = document.getElementById('filter');
filterButton.addEventListener('click', filterTable);

// Call the function to generate the initial dynamic table
generateTable();
