document.getElementById('Form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    let amountPaid = document.getElementById('amountPaid').value;
    let buyerName = document.getElementById('buyerName').value;
    let salesAgentName = document.getElementById('salesAgentName').value;

    if (amountPaid.length < 5) {
        alert('Amount Paid must be at least 5 characters.');
        return;
    }

    if (!/^[a-z0-9]+$/i.test(buyerName) || buyerName.length < 2) {
        alert('Buyer\'s Name must be alphanumeric and at least 2 characters long.');
        return;
    }

    if (!/^[a-z0-9]+$/i.test(salesAgentName) || salesAgentName.length < 2) {
        alert('Sales Agent\'s Name must be alphanumeric and at least 2 characters long.');
        return;
    }

    // If all validations pass, submit the form
    alert('Form submitted successfully!');
    this.submit();
});
