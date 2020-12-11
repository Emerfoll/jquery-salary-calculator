console.log('js loaded!');

$(readyNow);

function readyNow() {
    console.log('jQuery ready');
    
    $('#addEmployee').on('click', addEmployee);
}

function addEmployee() {
    console.log('Employee added.');
    
}