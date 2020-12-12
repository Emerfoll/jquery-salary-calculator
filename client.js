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
        salary: 100000,
    },
    {
        firstName: 'Bob',
        lastName: 'Loblaw',
        ID: 5068,
        title: 'Trickster',
        salary: 120000,
    }
];

function renderToDom() {
    //clear display 
    $('#newEmployee').empty();
    //use everything in the array, and append them accordingly
    for (let i=0; i<employees.length; i++) {
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

    if (!firstName || !lastName || !employeeID || !job || !salary) {
        console.log('Please fill all boxes');
    } else {
        let newEmployee = {
            firstName: firstName,
            lastName: lastName,
            ID: employeeID,
            title: job,
            salary: salary,
        }
        console.log(newEmployee);
        employees.push(newEmployee);

        clearInputs();
        renderToDom();
    }
}

function clearInputs() {
    $('#firstNameIn').val('');
    $('#lastNameIn').val('');
    $('#employeeIDIn').val('');
    $('#jobTitleIn').val('');
    $('#annualSalaryIn').val('');
}

// delete and recalculate the Total Monthly Expense.

function removeEmployee() {
    console.log('Employee Fired');
    $(this).parent().parent().remove();

    let value = this.id

    employees.splice(value , 1)
    calculateMonthlyCost();
    
}



// Calculate Total Monthly Expense.
function calculateMonthlyCost() {
    let monthlyCost = 0;

    for (let monthPay of employees) {
        monthlyCost += Number(monthPay.salary);
    } monthlyCost = monthlyCost / 12;
    let total = $('#monthlyCost');
    total.empty();
    total.append(Math.ceil(monthlyCost));
    if ( monthlyCost >= 20000) {
        $('#monthlyCost').addClass("overBudget")
    } else if (monthlyCost < 20000) {
        $('#monthlyCost').removeClass('overBudget')
    }
    console.log('monthlyCost');
}