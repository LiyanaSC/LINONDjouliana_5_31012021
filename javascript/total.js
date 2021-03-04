//panier
let products = JSON.parse(localStorage.getItem("Produits_du_panier"))

let prices = products.map(x => Number(x.price))

let total = prices.reduce((price, totalprice) => price + totalprice)
console.log(total)
console.log(prices)


document.getElementById("add_total").textContent = `${total}` + "€";

/*totalFromBasket.forEach((productsIntoBasket, index) => {


    //addition panier
    let basket = 0;


    for (let i = 0; i < index + 1; i++) {
        basket += Number(totalFromBasket[i][1])
    }
    var addTotal = document.getElementById("add_total");
    addTotal.textContent = `${basket}` + "€";
})*/