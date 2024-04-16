// Function to get form fields
function getFormFields() {
    var jobId = document.getElementById('job-id');
    var name = document.getElementById('name');
    var surname = document.getElementById('surname');
    var email = document.getElementById('email');

    return { jobId, name, surname, email };
}

// Function to check if all fields are valid
function allFieldsAreValid(fields) {
    return fields.jobId.value !== '' && fields.name.value !== '' && fields.surname.value !== '' && fields.email.value !== '';
}

// Event listener for form submission
document.getElementById("apply-form").addEventListener('submit', function(event){
    event.preventDefault();

    var fields = getFormFields();

    // Validation for each field
    if(fields.jobId.value === ''){
        document.getElementById('job-id-error').textContent = "Job-ID is required";
    }else {
        document.getElementById('job-id-error').textContent = "";
    }

    if(fields.name.value === ''){
        document.getElementById('name-error').textContent = "Name is required";
    } else {
        document.getElementById('name-error').textContent = "";
    }

    if(fields.surname.value === ''){
        document.getElementById('surname-error').textContent = "Surname is required";
    } else {
        document.getElementById('surname-error').textContent = "";
    }

    if(fields.email.value === ''){
        document.getElementById('email-error').textContent = "Email is required";
    } else {
        document.getElementById('email-error').textContent = "";
    }

    // If all fields are valid, reset the form
    if(allFieldsAreValid(fields)){
        document.getElementById('apply-form').reset();
    }
});