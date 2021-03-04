//panier
let totalFromBasket = JSON.parse(localStorage.getItem("Produits du panier"))
totalFromBasket.forEach((productsIntoBasket, index) => {


    //addition panier
    let basket = 0;


    for (let i = 0; i < index + 1; i++) {
        basket += Number(totalFromBasket[i][1])
    }
    var addTotal = document.getElementById("add_total");
    addTotal.textContent = `${basket}` + "€";
})