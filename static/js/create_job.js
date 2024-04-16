// Function to get form fields
function getFormFields() {
    var jobId = document.getElementById('job-id');
    var title = document.getElementById('title');
    var description = document.getElementById('description');

    return { jobId, title, description };
}

// Function to check if all fields are valid
function allFieldsAreValid(fields) {
    return fields.jobId.value !== '' && fields.title.value !== '' && fields.description.value !== '';
}

// Event listener for form submission
document.getElementById("entry-form").addEventListener('submit', function(event){
    event.preventDefault();

    var fields = getFormFields();

    // Validation for each field
    if(fields.jobId.value === ''){
        document.getElementById('job-id-error').textContent = "Job-ID is required";
    }else {
        document.getElementById('job-id-error').textContent = "";
    }

    if(fields.title.value === ''){
        document.getElementById('title-error').textContent = "Title is required";
    } else {
        document.getElementById('title-error').textContent = "";
    }

    if(fields.description.value === ''){
        document.getElementById('description-error').textContent = "Description is required";
    } else {
        document.getElementById('description-error').textContent = "";
    }

    // If all fields are valid, reset the form
    if(allFieldsAreValid(fields)){
        document.getElementById('entry-form').reset();
    }
});