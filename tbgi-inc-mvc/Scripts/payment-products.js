function addRow() {
    var tableBody = document.getElementById('table-body');
    var newRow = document.createElement('tr');
    newRow.innerHTML = '<td>[Product Img]</td><td>Qty. </td><td>Price: </td>';
    tableBody.appendChild(newRow);

    // Update the colspan of the header cell
    var headerCell = document.getElementById('headerCell');
    var footerCell = document.getElementById('footerCell');
    var colspanValue = headerCell.getAttribute('colspan');
    headerCell.setAttribute('colspan', Number(colspanValue) + 1);
    footerCell.setAttribute('colspan', Number(colspanValue) + 1);
} 