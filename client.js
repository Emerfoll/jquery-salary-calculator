console.log('js git status!');

$(readyNow);

function readyNow() {
    console.log('jQuery ready');

    renderToDom();

    $('#addEmployeeButton').on('click', addEmployee);
    $('#newEmployee').on('click', '.remove', removeEmployee);

}

let employees = [
    {
        firstName: 'Mister',
        lastName: 'Fox',
        ID: 87425,
        title: 'Trickster',
        salary: 80000,
    },
    {
        firstName: 'Bob',
        lastName: 'Loblaw',
        ID: 5068,
        title: 'Trickster',
        salary: 110000,
    }
];


function renderToDom() {
    // Clear display 
    $('#newEmployee').empty();
    // Loop through array and display to the DOM
    for (let i = 0; i < employees.length; i++) {
        $('#newEmployee').append(`
            <tr class="employee">
             <td>${employees[i].firstName}</td>
             <td>${employees[i].lastName}</td>
             <td>${employees[i].ID}</td>
             <td>${employees[i].title}</td>
             <td>$${employees[i].salary}</td>
             <td><button id="${[i]}" class="btn btn-danger remove">Remove</button></td>

             </tr>`)

    }
    // Recalculate the Total Monthly Cost.
    calculateMonthlyCost();

}


// Runs when addEmployeeButton is clicked.
function addEmployee() {
    console.log('Employee added.');
    let firstName = $('#firstNameIn').val();
    console.log(firstName);
    let lastName = $('#lastNameIn').val();
    console.log(lastName);
    let employeeID = $('#employeeIDIn').val();
    console.log(employeeID);
    let job = $('#jobTitleIn').val();
    console.log(job);
    let salary = $('#annualSalaryIn').val();
    console.log(salary);

    // Don't allow entry if they're are empty input fields.
    if (!firstName || !lastName || !employeeID || !job || !salary) {
        $('.input').addClass("requireInput")
        console.log('Please fill all boxes');
    } // If input fields are filled, create an object to push to the employees array.
    else {
        let newEmployee = {
            firstName: firstName,
            lastName: lastName,
            ID: employeeID,
            title: job,
            salary: salary,
        }
        console.log(newEmployee);
        employees.push(newEmployee);

        // Clear the input fields.
        clearInputs();
        // Re-apply what is on the DOM
        renderToDom();
        $('.input').removeClass("requireInput")
    }
}

// Clears the input fields.
function clearInputs() {
    $('#firstNameIn').val('');
    $('#lastNameIn').val('');
    $('#employeeIDIn').val('');
    $('#jobTitleIn').val('');
    $('#annualSalaryIn').val('');
}

// Delete and recalculate the Total Monthly Expense.
function removeEmployee() {
    console.log('Employee Fired');
    $(this).parent().parent().remove();

    let value = this.id

    employees.splice(value, 1)
    calculateMonthlyCost();

}



// Calculate Total Monthly Expense.
function calculateMonthlyCost() {
    // generate yearly salary per employee
    let monthlyCost = 0;
    for (let monthPay of employees) {
        monthlyCost += Number(monthPay.salary);
    } // Find monthly cost based off yearly salary.
    monthlyCost = monthlyCost / 12;

    // Update the DOM.
    let total = $('#monthlyCost');
    //Empty current monthly cost.
    total.empty();
    //Insert new updated monthly cost.
    total.append(Math.ceil(monthlyCost));


    //If monthly cost is over 20k, add red background.
    if (monthlyCost >= 20000) {
        $('#monthlyCost').addClass("overBudget")
    } else if (monthlyCost < 20000) {
        $('#monthlyCost').removeClass('overBudget')
    }
    console.log(monthlyCost);
}