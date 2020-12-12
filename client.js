console.log('js git status!');

$(readyNow);

function readyNow() {
    console.log('jQuery ready');

    renderToDom();

    $('#addEmployeeButton').on('click', addEmployee);
}

let monthlyCost = 0;

let employees = [
    {
        firstName: 'Mister',
        lastName: 'Fox',
        ID: 87425,
        title: 'Trickster',
        salary: 1000,
    },
    {
        firstName: 'Bob',
        lastName: 'Loblaw',
        ID: 5068,
        title: 'Trickster',
        salary: 1200,
    }
];

function renderToDom() {
    //clear display 
    $('#newEmployee').empty();
    //use everything in the array, and append them accordingly
    for (let employee of employees) {
        $('#newEmployee').append(`
            <tr class="employee">
             <td>${employee.firstName}</td>
             <td>${employee.lastName}</td>
             <td>${employee.ID}</td>
             <td>${employee.title}</td>
             <td>$${employee.salary}</td>
             <td><button id="remove" class="btn btn-danger">Remove</button></td>

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

// Calculate Total Monthly Expense.
function calculateMonthlyCost() {
    for (let monthPay of employees) {
        monthlyCost += Number(monthPay.salary);
    } monthlyCost = monthlyCost / 12;
    let total = $('#monthlyCost');
    total.empty();
    total.append(Math.ceil(monthlyCost));

    console.log('monthlyCost');
}