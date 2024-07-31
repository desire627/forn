function validateForm() {
    let isValid = true;

    const buyerName = document.forms["salesForm"]["buyerName"].value;
    if (buyerName.length < 2 || !/^[a-zA-Z0-9 ]+$/.test(buyerName)) {
        alert("Buyer Name must be at least 2 alphanumeric characters.");
        isValid = false;
    }

    const nationalId = document.forms["salesForm"]["nationalId"].value;
    if (!/^[A-Z]{3}[0-9]{8}[A-Z]$/.test(nationalId)) {
        alert("Invalid National ID format. It should be of format 'XXX00000000X'.");
        isValid = false;
    }

    const location = document.forms["salesForm"]["location"].value;
    if (location.length < 2 || !/^[a-zA-Z0-9 ]+$/.test(location)) {
        alert("Location must be at least 2 alphanumeric characters.");
        isValid = false;
    }

    const contacts = document.forms["salesForm"]["contacts"].value;
    if (!/^\+?[0-9]{10,15}$/.test(contacts)) {
        alert("Invalid phone format. It should be 10-15 digits long.");
        isValid = false;
    }

    const amountDue = document.forms["salesForm"]["amountDue"].value;
    if (!/^\d{5,}$/.test(amountDue)) {
        alert("Amount Due must be at least 5 characters long and numeric.");
        isValid = false;
    }

    const salesAgent = document.forms["salesForm"]["salesAgent"].value;
    if (salesAgent.length < 2 || !/^[a-zA-Z0-9 ]+$/.test(salesAgent)) {
        alert("Sales Agent Name must be at least 2 alphanumeric characters.");
        isValid = false;
    }

    const produceName = document.forms["salesForm"]["produceName"].value;
    if (produceName.length < 2 || !/^[a-zA-Z0-9 ]+$/.test(produceName)) {
        alert("Produce Name must be at least 2 alphanumeric characters.");
        isValid = false;
    }

    return isValid;
}
