document.getElementById("apply-form").addEventListener('submit', function(event){
    event.preventDefault();

    var jobId = document.getElementById('job-id');
    var name = document.getElementById('name');
    var surname = document.getElementById('surname');
    var email = document.getElementById('email');

    if(jobId.value === ''){
        document.getElementById('job-id-error').textContent = "Job-ID is required";
    }else {
        document.getElementById('job-id-error').textContent = "";
    }

    if(name.value === ''){
        document.getElementById('name-error').textContent = "Name is required";
    } else {
        document.getElementById('name-error').textContent = "";
    }

    if(surname.value === ''){
        document.getElementById('surname-error').textContent = "Surname is required";
    } else {
        document.getElementById('surname-error').textContent = "";
    }

    if(email.value === ''){
        document.getElementById('email-error').textContent = "Email is required";
    } else {
        document.getElementById('email-error').textContent = "";
    }
});


document.getElementById("entry-form").addEventListener('submit', function(event){
    event.preventDefault();

    var jobId = document.getElementById('job-id');
    var title = document.getElementById('title'); 
    var description = document.getElementById('description');

    if(jobId.value === ''){
        document.getElementById('job-id-error').textContent = "Job-ID is required";
    } else {
        document.getElementById('job-id-error').textContent = "";
    }

    if(title.value === ''){
        document.getElementById('title-error').textContent = "Title is required";
    } else {
        document.getElementById('title-error').textContent = "";
    }

    if(description.value === ''){
        document.getElementById('description-error').textContent = "Description is required";
    } else {
        document.getElementById('description-error').textContent = "";
    }

});
