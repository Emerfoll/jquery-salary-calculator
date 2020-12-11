console.log('js loaded!');

$(readyNow);

function readyNow() {
    console.log('jQuery ready');
    
    $('#addEmployee').on('click', addEmployee);
}

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
    
}