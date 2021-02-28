"use strict";

var params = new URL(document.location).searchParams;
var urlId = params.get('id');
console.log(urlId);

function getProductById(id) {
  return fetch("http://localhost:3000/api/teddies/".concat(id)).then(function (result) {
    return result.json();
  });
}

getProductById(urlId).then(function (teddy) {
  //ajout de l'image
  var picture = document.createElement('img');
  picture.className = "main_teddy_bear_result_pics_size";
  picture.id = "pic_loaded";
  picture.setAttribute('src', teddy.imageUrl);
  picture.setAttribute('alt', "photo d'un ours en peluche");
  document.getElementById("box_pic").appendChild(picture); //Partie h3 (nom de l article)

  var productTitle = document.createElement('h3');
  productTitle.className = "result_page_description_title";
  productTitle.id = "result_page_description_title";
  document.getElementById("description_box").appendChild(productTitle);
  var nameProduct = document.getElementById("result_page_description_title");
  nameProduct.textContent = teddy.name; // description

  var productDescription = document.createElement('p');
  productDescription.className = "result_page_description_text";
  productDescription.id = "result_page_description_text";
  document.getElementById("description_box").appendChild(productDescription);
  var descriptionContent = document.getElementById("result_page_description_text");
  descriptionContent.textContent = teddy.description; //Prix

  var productPrice = document.createElement('p');
  productPrice.className = "results_descriptions_text_price";
  productPrice.id = "product_price";
  document.getElementById("description_box").appendChild(productPrice);
  var textPrice = document.getElementById("product_price");
  textPrice.textContent = (teddy.price / 100).toPrecision(4) + "€"; // box choix couleur

  var ColorSelector = document.createElement('div');
  ColorSelector.className = "color_choices appear1";
  ColorSelector.id = "color_selector";
  document.getElementById("description_box").appendChild(ColorSelector);
  var addColors = document.getElementById("color_selector");
  addColors.innerHTML = "<label for=\"pet-select\" class=\"color_choices_title\">Couleurs disponibles:</label>"; // couleur

  var colors = document.createElement('select');
  colors.setAttribute('name', "couleurs");
  colors.className = "color_choices_selection";
  colors.id = "color_select";
  document.getElementById("color_selector").appendChild(colors); //placeholder

  var defaultOption = document.createElement('option');
  defaultOption.setAttribute('value', "placeholder"); //   defaultOption.setAttribute('contentEditable', 'false')

  defaultOption.id = "put_color";
  document.getElementById("color_select").appendChild(defaultOption);
  var dafaultAdded = document.getElementById("put_color");
  dafaultAdded.textContent = "--Couleur--"; //mise en place des couleurs

  var teddysColors = teddy.colors;
  teddysColors.forEach(function (teddysColor, index) {
    var putColors = document.createElement('option');
    putColors.setAttribute('value', "".concat(teddysColor)); //    putColors.setAttribute('contentEditable', 'true')

    putColors.id = "put_color" + index;
    document.getElementById("color_select").appendChild(putColors);
    var colorsAdded = document.getElementById("put_color" + index);
    colorsAdded.textContent = teddysColor;
  }); //box de validation

  var addToBasket = document.createElement('div');
  addToBasket.className = "add_to_basket_box appear2";
  addToBasket.id = "validation";
  document.getElementById("description_box").appendChild(addToBasket); //bouton de validation

  var addToBasketBtn = document.createElement('button');
  addToBasketBtn.className = "add_to_basket_box_btn";
  addToBasketBtn.id = "add_to_basket_box_btn";
  document.getElementById("validation").appendChild(addToBasketBtn); //texte

  var addToBasketText = document.createElement('p');
  addToBasketText.id = "add_to_basket_text";
  document.getElementById("add_to_basket_box_btn").appendChild(addToBasketText);
  var validerLePanierText = document.getElementById("add_to_basket_text");
  validerLePanierText.textContent = "Ajouter au panier"; // Localstorage-----------------------------------------------------------------------------------------------------------------

  document.getElementById("add_to_basket_box_btn").addEventListener('click', function (e) {
    e.preventDefault();
    var price = (teddy.price / 100).toPrecision(4);
    var name = teddy.name;
    localStorage.setItem("".concat(teddy._id, " Price"), price);
    localStorage.setItem("".concat(teddy._id, " Name"), name);
    document.location = "panier.html";
  }); //localStorage.getItem("essai", "coucou je suis là");

  console.log(localStorage); // localStorage.clear()
});