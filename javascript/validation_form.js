// apparitions des produit dans total

let productsIntoBaskets = JSON.parse(localStorage.getItem("Produits du panier"));

productsIntoBaskets.forEach((productsIntoBasket, index) => {

    let name = productsIntoBasket[0];
    let price = productsIntoBasket[1];
    let id = productsIntoBasket[2]

    //La div contenant les infos produits
    let blockByResult = document.createElement('div');
    blockByResult.className = "summary_detail_box_results";
    blockByResult.id = "block_for_result" + index;
    document.getElementById("put_products_in_basket").appendChild(blockByResult);


    // le nom des produits dans le pannier
    let productAdded = document.createElement('p');
    productAdded.className = "summary_detail_box_articles";
    productAdded.id = "summary_detail_box_articles" + index;
    document.getElementById("block_for_result" + index).appendChild(productAdded);

    let nameProduct = document.getElementById("summary_detail_box_articles" + index);
    nameProduct.textContent = name;


    // le prix des produits dans le pannier
    let showProctPriceInBasket = document.createElement('p');
    showProctPriceInBasket.className = "summary_detail_box_price";
    showProctPriceInBasket.id = "summary_detail_box_price" + index;
    document.getElementById("block_for_result" + index).appendChild(showProctPriceInBasket);

    let priceProduct = document.getElementById("summary_detail_box_price" + index);
    priceProduct.textContent = price + "€";

    //nombre d'articles
    let numberOfProduct = document.getElementById("number_of_product");
    numberOfProduct.textContent = index + 1;

    // Retirer un produit
    let removeFromBasket = document.createElement('span');
    removeFromBasket.className = "remove";
    removeFromBasket.id = "remove" + index;
    document.getElementById("block_for_result" + index).appendChild(removeFromBasket);

    let removeProduct = document.getElementById("remove" + index);
    removeProduct.textContent = "retirer";

    document.getElementById("remove" + index).addEventListener('click', function(e) {
        e.preventDefault()
        let productToAddInStorage = JSON.parse(localStorage.getItem("Produits du panier"))
        productToAddInStorage.splice(index, 1);
        localStorage.setItem("Produits du panier", JSON.stringify(productToAddInStorage));
        console.log(productToAddInStorage)


        document.location = "panier.html";
    })






});






var basketValidation = document.getElementById("basket_validation");
basketValidation.addEventListener('submit', function(event) {
    event.preventDefault();
    let contact = {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        address: document.getElementById("adress").value,
        city: document.getElementById("city").value,
        email: document.getElementById("email").value
    }

    console.log(contact);
    //envoie  des id produits
    let IntoBaskets = JSON.parse(localStorage.getItem("Produits du panier"));

    let producttoadd = []

    IntoBaskets.forEach((IntoBasket, index) => {
        producttoadd.push(JSON.stringify("product " + IntoBaskets[index][2]))

    });
    let products = [JSON.stringify(producttoadd)]
    console.log(products)





    fetch("http://localhost:3000/api/teddies/order", {
        method: 'POST',

        body: contact,
        products

    }).then(function(response) {
        return response;

    })

    /* var request = new XMLHttpRequest();
     request.open("POST", "http://localhost:3000/api/teddies/order");
     request.setRequestHeader("Content-Type", "application/json");
     request.send(contact, products);*/

    //  location.href = "validation.html";
})