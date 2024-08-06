function validateForm() {
    const produceName = document.getElementById("produceName").value;
    const produceType = document.getElementById("produceType").value;
    const date = document.getElementById("dateTime").value;
    // const time = document.getElementById("time").value;
    const tonnage = document.getElementById("tonnage").value;
    const cost = document.getElementById("cost").value;
    const dealerName = document.getElementById("dealerName").value;
    const branch = document.getElementById("branch").value;
    const contact = document.getElementById("contact").value;
    const price = document.getElementById("price").value;

    if (!produceName.match(/^[a-zA-Z0-9\s]+$/)) {
        alert("Name of produce should be alphanumeric.");
        return false;
    }

    if (!produceType.match(/^[A-Za-z]{2,}$/)) {
        alert("Type of produce should contain alphabets only and be at least 2 characters long.");
        return false;
    }

    if (!dateTime) {
        alert("Date cannot be empty.");
        return false;
    }

    if (!time) {
        alert("Time cannot be empty.");
        return false;
    }

    if (!tonnage || tonnage.length < 3) {
        alert("Tonnage should be numeric and at least 3 characters long.");
        return false;
    }

    if (!cost || cost.length < 5) {
        alert("Cost should be numeric and at least 5 characters long.");
        return false;
    }

    if (!dealerName.match(/^[a-zA-Z0-9\s]{2,}$/)) {
        alert("Name of dealer should be alphanumeric and at least 2 characters long.");
        return false;
    }

    if (!branch) {
        alert("Please select a branch.");
        return false;
    }

    if (!contact.match(/^\d{10}$/)) {
        alert("Contact should be a valid 10-digit phone number.");
        return false;
    }

    if (!price) {
        alert("Price to be sold at cannot be empty.");
        return false;
    }

    return true;
}
