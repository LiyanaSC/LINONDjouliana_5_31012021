"use strict";

/*function letsTryFetchtoGetTessiesApi() {
    return fetch("http://localhost:3000/api/teddies").then(result => result.json())
}

letsTryFetchtoGetTessiesApi().then(Teddys => {
    Teddys.forEach(teddy => {
        console.log("essayons", teddy)

    });
})*/
var productArrays = Object.keys(localStorage).map(function (cle) {
  return [cle, localStorage[cle]];
});
console.log("par ici", productArrays);
productArrays.forEach(function (productArray, index, array) {
  var stringifyProductInfo = productArray[1]; // le nom des produits dans le pannier

  var productAdded = document.createElement('p');
  productAdded.className = "summary_detail_box_articles";
  productAdded.id = "summary_detail_box_articles" + index;
  document.getElementById("put_products_in_basket").appendChild(productAdded);
  var nameProduct = document.getElementById("summary_detail_box_articles" + index);
  nameProduct.textContent = stringifyProductInfo.slice(6); // le prix des produits dans le pannier

  var showProctPriceInBasket = document.createElement('span');
  showProctPriceInBasket.className = "summary_detail_box_price";
  showProctPriceInBasket.id = "summary_detail_box_price" + index;
  document.getElementById("summary_detail_box_articles" + index).appendChild(showProctPriceInBasket);
  var priceProduct = document.getElementById("summary_detail_box_price" + index);
  priceProduct.textContent = " " + stringifyProductInfo.slice(0, 5); //nombre d'articles

  var numberOfProduct = document.getElementById("number_of_product");
  numberOfProduct.textContent = "".concat(index + 1);
});
var basket = 0;
console.log(basket);

for (var i = 0; i < productArrays.length; i++) {
  basket += Number(productArrays[i][1].slice(0, 5));
}

console.log(basket);
/*(let i = 0; i < localStorage.length; i++) {

    let key = localStorage.key(i);
    console.log(key, localStorage.getItem(key))

    let productAdded = document.createElement('p');
    productAdded.className = "summary_detail_box_articles";
    document.getElementById("put_products_in_basket");





}


/*var basketValidation = document.getElementById("basket_validation");
basketValidation.addEventListener('submit', function(event) {
    event.preventDefault();
    const contact = []
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let adress = document.getElementById("adress").value;
    let city = document.getElementById("city").value;
    let email = document.getElementById("email").value;
    contact.push(firstName, lastName, adress, city, email)



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

/*   location.href = "validation.html";
})*/