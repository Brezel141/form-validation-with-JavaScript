const apply = getElementById("apply-form").addEventListener('submit', function(event){
    event.preventDefault();

    var jobId = document.getElementById('apply-job-id');
    var name = document.getElementById('name');
    var surname = document.getElementById('surname');
    var email = document.getElementById('email');

    if(jobId.value === ''){
        document.getElementById('apply-job-id-error').textContent = "Job-ID is required";
    }else {
        document.getElementById('apply-job-id-error').textContent = "";
    }
});


