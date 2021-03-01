// apparitions des produit dans total
function getProducts() {
    return fetch(`http://localhost:3000/api/teddies/`).then(result => result.json())
    resolve(teddys)
}
getProducts().then(teddys => {
    teddys.forEach((teddy, index) => {

        let name = teddy.name;
        let getBackProductsInfo = JSON.parse(localStorage.getItem(`${name}`)); //contient : prix, nom,id

        // le nom des produits dans le pannier
        let productAdded = document.createElement('p');
        productAdded.className = "summary_detail_box_articles";
        productAdded.id = "summary_detail_box_articles" + index;
        document.getElementById("put_products_in_basket").appendChild(productAdded);

        let nameProduct = document.getElementById("summary_detail_box_articles" + index);
        nameProduct.textContent = getBackProductsInfo[1];

        // le prix des produits dans le pannier
        let showProctPriceInBasket = document.createElement('span');
        showProctPriceInBasket.className = "summary_detail_box_price";
        showProctPriceInBasket.id = "summary_detail_box_price" + index;
        document.getElementById("summary_detail_box_articles" + index).appendChild(showProctPriceInBasket);

        let priceProduct = document.getElementById("summary_detail_box_price" + index);
        priceProduct.textContent = getBackProductsInfo[0];

        //nombre d'articles
        let numberOfProduct = document.getElementById("number_of_product");
        numberOfProduct.textContent = `${index+1}`;

        // Retirer un produit
        let removeFromBasket = document.createElement('span');
        removeFromBasket.className = "remove";
        removeFromBasket.id = "remove" + index;
        document.getElementById("summary_detail_box_articles" + index).appendChild(removeFromBasket);

        let removeProduct = document.getElementById("remove" + index);
        removeProduct.textContent = "retirer du panier";

        document.getElementById("remove" + index).addEventListener('click', function(e) {
            e.preventDefault()
            localStorage.removeItem(`${name}`);
            document.location = "panier.html";
        })

    })


})

//addition panier
/*var basket = 0;


for (let i = 0; i < productArrays.length; i++) {
    basket += Number(productArrays[i][1].slice(0, 5))
}
var addTotal = document.getElementById("add_total");
addTotal.textContent = `${basket}` + "€";

console.log(localStorage.key(0))*/



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