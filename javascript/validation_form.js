var basketValidation = document.getElementById("basket_validation");
basketValidation.addEventListener('submit', function(event) {
    event.preventDefault();
    const contact = []
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let adress = document.getElementById("adress").value;
    let city = document.getElementById("city").value;
    let email = document.getElementById("email").value;
    contact.push(firstName, lastName, adress, city, email)

    /*localStorage.setItem("contact", contact)

    fetch("http://localhost:3000/api/teddies/order", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(contact)

        }).then(function(response) {
            return response;
        })
        /*var request = new XMLHttpRequest();
        request.open("POST", "http://localhost:3000/api/teddies/order");
        request.setRequestHeader("Content-Type", "application/json");
        request.send(JSON.stringify(contact));*/

    location.href = "validation.html";
})