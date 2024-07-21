// document.getElementById("loginForm").addEventListener("submit", function(event) {
//     event.preventDefault(); // Prevent the default form submission

//     // Access form elements
//     var email = document.getElementById("email").value;
//     var password = document.getElementById("password").value;
//     var userName = document.getElementById("userName").value;

//     // Simple validation
//     if (email === "" || password === "" || userName === "") {
//         alert("Please fill out all fields.");
//         return;
//     }


//function that submits my form
function submitForm() {
    //collect form data
    let name = document.getElementById("userName").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    //validate email format
    const emailFormat = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;

    //validate form data
    if (name === "" || email === "" || password === "" || confirmPassword === "") {
        alert("Please fill out all fields");
        return;
    }
    else if (!email.match(emailFormat)) {
        alert("Please enter a valid email");
        return;
    }
    else if (confirmPassword !== password) {
        alert("Passwords do not match");
        return;
    }
    else {
        alert("Form submitted successfully");
        // clear form inputs
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
        document.getElementById("confirmPassword").value = "";
    }
}

// add event listener to form submit button
let submitButton = document.getElementById("submit");

submitButton.addEventListener("click", function(event) {
    event.preventDefault();
    submitForm();
});



























//     // Show the form data in a div (for demonstration purposes)
//     var resultDiv = document.getElementById("result");
//     resultDiv.innerHTML = `<p>Email: ${email}</p><p>Password: ${password}</p> <p>userName: ${userName}</p>`;

//     // Submit the form data using AJAX
//     var xhr = new XMLHttpRequest();
//     xhr.open("POST", "/submit_form", true);
//     xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
//     xhr.onreadystatechange = function() {
//         if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
//             alert("Form submitted successfully!");
//             resultDiv.innerHTML += `<p>Server Response: ${xhr.responseText}</p>`;
//         }
//     };
//     xhr.send(`email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`);
// });
