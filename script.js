function validateInput(input, regex, errorId) {
    const errorElement = document.getElementById(errorId);
    if (!regex.test(input.value)) {
        input.classList.add('error');
        errorElement.textContent = 'Invalid input';
    } else {
        input.classList.remove('error');
        errorElement.textContent = '';
    }
    checkFormValidity();
}

function checkFormValidity() {
    const inputs = document.querySelectorAll('input[required]');
    const textAreas = document.querySelectorAll('textarea[required]');
    const validInputs = Array.from(inputs).every(input => input.checkValidity() && !input.classList.contains('error'));
    const validTextAreas = Array.from(textAreas).every(textArea => textArea.checkValidity() && !textArea.classList.contains('error'));
    const submitBtn = document.getElementById('submitBtn');
    const checkBoxSelected = document.querySelectorAll('div.checkbox-group.required input[type="checkbox"]:checked').length > 0;
    submitBtn.disabled = !(validInputs && validTextAreas && checkBoxSelected);
}

function createTable() {
    const tableContainer = document.getElementById('tableContainer');
    tableContainer.innerHTML = '';
    const formData = new FormData(document.getElementById('feedbackForm'));
    const table = document.createElement('table');
    formData.forEach((value, key) => {
        const row = table.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        cell1.innerHTML = `<strong>${key}</strong>`;
        cell2.textContent = value;
    });
    tableContainer.appendChild(table);
    resetForm();
}

function addCheckbox() {
    const selection = document.getElementById('selection');
    const selectedOption = selection.options[selection.selectedIndex].value;
    const checkboxContainer = document.getElementById('checkboxContainer');
    checkboxContainer.innerHTML = '';

    function createCheckbox(checkboxName, checkboxValue, checkboxText) {
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.name = checkboxName;
        checkbox.value = checkboxValue;
        checkboxContainer.appendChild(checkbox);
        const label = document.createElement('label');
        label.textContent = checkboxText;
        checkboxContainer.appendChild(label);
    }

    if (selectedOption === 'Coffee' || selectedOption === 'Tea') {
        createCheckbox('Quantity', '8oz', 'Small');
    } else if (selectedOption === 'Donut') {
        createCheckbox('Quantity', '2', 'Pack of 2');
    } else if (selectedOption === 'Pastry') {
        createCheckbox('Quantity', '1', 'Single');
    } else {
        createCheckbox('Quantity', '6', '6 Pack');
    }
}

document.getElementById('feedbackForm').addEventListener('change', checkFormValidity);

function resetForm() {
    document.getElementById('feedbackForm').reset();
    checkFormValidity();
}
