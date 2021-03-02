//appelle de mon id produit

let params = (new URL(document.location)).searchParams;

let urlId = params.get('id');
console.log(urlId)

function getProductById(id) {
    return fetch(`http://localhost:3000/api/teddies/${id}`).then(result => result.json())
}

//mise en page-----------------------------------------------------------------------------------------------------------------
getProductById(urlId).then(teddy => {

    //ajout de l'image
    let picture = document.createElement('img')
    picture.className = "main_teddy_bear_result_pics_size";
    picture.id = "pic_loaded";
    picture.setAttribute('src', teddy.imageUrl);
    picture.setAttribute('alt', "photo d'un ours en peluche");
    document.getElementById("box_pic").appendChild(picture);

    //Partie h3 (nom de l article)

    let productTitle = document.createElement('h3');
    productTitle.className = "result_page_description_title";
    productTitle.id = "result_page_description_title";
    document.getElementById("description_box").appendChild(productTitle);

    let nameProduct = document.getElementById("result_page_description_title");
    nameProduct.textContent = teddy.name;

    // description
    let productDescription = document.createElement('p');
    productDescription.className = "result_page_description_text";
    productDescription.id = "result_page_description_text";
    document.getElementById("description_box").appendChild(productDescription);

    let descriptionContent = document.getElementById("result_page_description_text");
    descriptionContent.textContent = teddy.description;

    //Prix


    let productPrice = document.createElement('p');
    productPrice.className = "results_descriptions_text_price";
    productPrice.id = "product_price";
    document.getElementById("description_box").appendChild(productPrice);

    let textPrice = document.getElementById("product_price");
    textPrice.textContent = (teddy.price / 100).toPrecision(4) + "€";

    // box choix couleur
    let ColorSelector = document.createElement('div');
    ColorSelector.className = `color_choices appear1`;
    ColorSelector.id = "color_selector";
    document.getElementById("description_box").appendChild(ColorSelector);

    let addColors = document.getElementById("color_selector");
    addColors.innerHTML = `<label for="pet-select" class="color_choices_title">Couleurs disponibles:</label>`;

    // couleur
    let colors = document.createElement('select');
    colors.setAttribute('name', "couleurs");
    colors.className = `color_choices_selection`;
    colors.id = "color_select";
    document.getElementById("color_selector").appendChild(colors);

    //placeholder
    let defaultOption = document.createElement('option');
    defaultOption.setAttribute('value', "placeholder");
    //   defaultOption.setAttribute('contentEditable', 'false')
    defaultOption.id = "put_color";
    document.getElementById("color_select").appendChild(defaultOption);

    let dafaultAdded = document.getElementById("put_color");
    dafaultAdded.textContent = "--Couleur--";

    //mise en place des couleurs

    let teddysColors = teddy.colors

    teddysColors.forEach((teddysColor, index) => {
        let putColors = document.createElement('option');
        putColors.setAttribute('value', `${teddysColor}`);
        //    putColors.setAttribute('contentEditable', 'true')
        putColors.id = "put_color" + index;
        document.getElementById("color_select").appendChild(putColors);

        let colorsAdded = document.getElementById("put_color" + index);
        colorsAdded.textContent = teddysColor;

    });

    //box de validation
    let addToBasket = document.createElement('div');
    addToBasket.className = `add_to_basket_box appear2`;
    addToBasket.id = "validation";
    document.getElementById("description_box").appendChild(addToBasket);
    //bouton de validation
    let addToBasketBtn = document.createElement('button');
    addToBasketBtn.className = "add_to_basket_box_btn";
    addToBasketBtn.id = "add_to_basket_box_btn";
    document.getElementById("validation").appendChild(addToBasketBtn);
    //texte
    let addToBasketText = document.createElement('p');
    addToBasketText.id = "add_to_basket_text";
    document.getElementById("add_to_basket_box_btn").appendChild(addToBasketText);

    let validerLePanierText = document.getElementById("add_to_basket_text");
    validerLePanierText.textContent = "Ajouter au panier";



    // Localstorage-----------------------------------------------------------------------------------------------------------------



    // let inString = JSON.stringify(productToAddInStorage)

    if (localStorage.getItem("Produits du panier") == null) {
        localStorage.setItem("Produits du panier", '[]');

    }

    let productToAddInStorage = JSON.parse(localStorage.getItem("Produits du panier"));
    document.getElementById("add_to_basket_box_btn").addEventListener('click', (e) => {


        let price = (teddy.price / 100).toPrecision(4);
        let name = teddy.name;
        let id = teddy._id;

        e.preventDefault();
        let produtObject = [name, price, id];
        productToAddInStorage.push(produtObject);
        localStorage.setItem("Produits du panier", JSON.stringify(productToAddInStorage));
        console.log(productToAddInStorage)

        document.location = "panier.html";


    })
})

//panier
let productsIntoBaskets = JSON.parse(localStorage.getItem("Produits du panier"))
productsIntoBaskets.forEach((productsIntoBasket, index) => {


    //addition panier
    let basket = 0;


    for (let i = 0; i < index + 1; i++) {
        basket += Number(productsIntoBaskets[i][1])
    }
    var addTotal = document.getElementById("add_total");
    addTotal.textContent = `${basket}` + "€";
})