// Get references to the expense form and expense list (where the new expenses will be displayed)
const expenseForm = document.getElementById('expenseForm');
const expenseList = document.getElementById('expenseList');

// Add an event listener to the form, so that when the form is submitted, we can handle it
expenseForm.addEventListener('submit', function(event) {
    // Prevent the default behavior of form submission (which would cause a page reload)
    event.preventDefault(); 

    // Retrieve the values entered by the user in the form fields (description, category, and amount)
    const description = document.getElementById('description').value;
    const category = document.getElementById('category').value;
    const amount = document.getElementById('amount').value;

    // Check if all the fields are filled out and if the amount is a valid number
    // `!isNaN(amount)` ensures the entered amount is a number
    if (description && category && !isNaN(amount)) {
        // Create a new table row to hold the expense information
        const newRow = document.createElement('tr');

        // Set the inner HTML of the new row, inserting the values entered in the form
        newRow.innerHTML = `<td>${description}</td>
                            <td>${category}</td>
                            <td>${amount}</td>`;

        // Append the newly created row to the expense list (table body)
        expenseList.appendChild(newRow);

        // Clear the input fields after the new expense has been added to the list
        document.getElementById('description').value = '';
        document.getElementById('category').value = '';
        document.getElementById('amount').value = '';
    } else {
        // If any fields are missing or the amount is not a valid number, show an alert
        alert('Please fill out all fields with valid Data');
    }
});
