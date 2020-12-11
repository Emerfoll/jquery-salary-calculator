console.log('js git status!');

$(readyNow);

function readyNow() {
    console.log('jQuery ready');

    renderToDom();
    
    $('#addEmployeeButton').on('click', addEmployee);
}

let employees = [
    {firstName:'Mister', 
    lastName:'Fox', 
    ID:1234, 
    title:'Trickster', 
    salary:100000,}
];

function renderToDom(){
    //clear display 
    $('#newEmployee').empty();
    //use everything in the array, and append them accordingly
    for(let employee of employees){
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

    let newEmployee = {
        firstName:$('#firstNameIn').val(),
        lastName:$('#lastNameIn').val(),
        ID:$('#employeeIDIn').val(),
        title:$('#jobTitleIn').val(),
        salary:$('#annualSalaryIn').val(),
    }
    console.log(newEmployee);
    employees.push(newEmployee);
    

    clearInputs();
    renderToDom();
}

function clearInputs() {
    $('#firstNameIn').val('');
    $('#lastNameIn').val('');
    $('#employeeIDIn').val('');
    $('#jobTitleIn').val('');
    $('#annualSalaryIn').val('');
}