document.getElementById("completeForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let dob = document.getElementById("dob").value;
    let gender = document.getElementById("gender").value;
    let message = document.getElementById("message").value;
    
    if (name && email && password && dob && gender) {
        document.getElementById("responseMessage").textContent = "Form submitted successfully!";
        document.getElementById("responseMessage").style.color = "green";
    } else {
        document.getElementById("responseMessage").textContent = "Please fill all required fields.";
        document.getElementById("responseMessage").style.color = "red";
    }
});
