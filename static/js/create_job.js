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