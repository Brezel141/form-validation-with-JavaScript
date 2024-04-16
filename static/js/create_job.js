function getFormFields() {
    var jobId = document.getElementById('job-id');
    var title = document.getElementById('title');
    var description = document.getElementById('description');

    return { jobId, title, description };
}

function allFieldsAreValid(fields) {
    return fields.jobId.value !== '' && fields.title.value !== '' && fields.description.value !== '';
}

document.getElementById("entry-form").addEventListener('submit', function(event){
    event.preventDefault();

    var fields = getFormFields();

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

    if(allFieldsAreValid(fields)){
        document.getElementById('entry-form').reset();
    }
});