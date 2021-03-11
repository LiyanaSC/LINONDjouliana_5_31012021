//préparation de l'emplacement dans le local storage
if (localStorage.getItem("Produits_du_panier") == null) {
    localStorage.setItem("Produits_du_panier", '[]');
}

//panier
let products = JSON.parse(localStorage.getItem("Produits_du_panier"))
let total;
if (products == "") {
    total = 0;
    document.getElementById("add_total").textContent = `${total}` + "€";
} else {
    let prices = products.map(x => Number(x.price))

    total = prices.reduce((price, totalprice) => price + totalprice)



    document.getElementById("add_total").textContent = `${total}` + "€";
}