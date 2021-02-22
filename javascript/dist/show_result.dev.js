"use strict";

// REQUETTE AJAX ----------------------------------------------------------------------------------------------------
//variables pour afficher qu'il s'agit d'une erreur ajax
var catchError = function catchError(e) {
  console.error('ajax error', e);
}; //fonction Ajax pour ne pas répéter la requête


var get = function get(url) {
  return new Promise(function (resolve, reject) {
    var request = new XMLHttpRequest();

    request.onreadystatechange = function () {
      if (this.readyState == 4) {
        if (this.status === 200) {
          resolve(request.responseText);
        } else {
          reject(request);
        }
      }
    };

    request.open("GET", url, true);
    request.send();
  });
}; //promesse pour ne pas réitérer l'appelle de mon objet


var getResults = function getResults() {
  return new Promise(function (resolve, reject) {
    get("http://localhost:3000/api/teddies").then(function (response) {
      var teddys = JSON.parse(response);
      resolve(teddys);
    })["catch"](catchError);
  });
}; // appels de mes infos produits


getResults().then(function (teddys) {
  teddys.forEach(function (teddy, index) {
    console.log(teddy, index); //creation du conteneur--------------------------------------------------------------------------------------------

    var result = document.createElement('div');
    result.className = "main_products_results" + " " + "appear" + index;
    result.id = "result_box" + index;
    document.querySelector("section").appendChild(result); //creation de l'effet cliquable

    var link = document.createElement('a');
    link.className = "main_products_results_generic";
    link.setAttribute('href', "#");
    link.id = teddy._id + index;
    document.getElementById("result_box" + index).appendChild(link); //creation de la partie photo

    var picBox = document.createElement('div');
    picBox.className = "results_pics";
    picBox.id = "result_pics" + index;
    document.getElementById(teddy._id + index).appendChild(picBox);
    var pic = document.createElement('img');
    pic.className = "results_pics_size";
    pic.id = "pic_" + index;
    pic.setAttribute('src', teddy.imageUrl);
    document.getElementById("result_pics" + index).appendChild(pic); //creation de la partie commentaire

    var commentBox = document.createElement('div');
    commentBox.className = "results_descriptions";
    commentBox.id = "results_descriptions" + index;
    document.getElementById(teddy._id + index).appendChild(commentBox); //Partie h3 (nom des articles)

    var productTitle = document.createElement('h3');
    productTitle.className = "results_descriptions_title";
    productTitle.id = "results_descriptions_title" + index;
    document.getElementById("results_descriptions" + index).appendChild(productTitle);
    var nameProduct = document.getElementById("results_descriptions_title" + index);
    nameProduct.textContent = teddy.name; //Partie description

    var productText = document.createElement('p');
    productText.className = "results_descriptions_text";
    productText.id = "product_text" + index;
    document.getElementById("results_descriptions" + index).appendChild(productText);
    var textDescription = document.getElementById("product_text" + index);
    textDescription.textContent = teddy.description; //Prix

    var productPrice = document.createElement('p');
    productPrice.className = "results_descriptions_text_price";
    productPrice.id = "product_price" + index;
    document.getElementById("results_descriptions" + index).appendChild(productPrice);
    var textPrice = document.getElementById("product_price" + index);
    textPrice.textContent = (teddy.price / 100).toPrecision(4) + "€"; //creation de l'étiquette disponible

    var availableLabel = document.createElement('div');
    availableLabel.className = "results_availability";
    availableLabel.id = "results_availability" + index;
    document.getElementById(teddy._id + index).appendChild(availableLabel); //creation de l'étiquette disponible

    var availableText = document.createElement('div');
    availableText.id = "available" + index;
    document.getElementById("results_availability" + index).appendChild(availableText);
    var textAvailable = document.getElementById("available" + index);
    textAvailable.textContent = "disponible"; //redirection -------------------------------------------------------------------------------------------------------

    var teddyLinkAction = document.getElementById(teddy._id + index);
    teddyLinkAction.addEventListener('click', function (event) {
      event.preventDefault();
      location.href = "teddy_1.html";
    });
  });
});