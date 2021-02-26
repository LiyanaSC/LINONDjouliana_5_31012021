"use strict";

var basketValidation = document.getElementById("basket_validation");
basketValidation.addEventListener('submit', function (event) {
  event.preventDefault();
  var contact = [];
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var adress = document.getElementById("adress").value;
  var city = document.getElementById("city").value;
  var email = document.getElementById("email").value;
  contact.push(firstName, lastName, adress, city, email);
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
});