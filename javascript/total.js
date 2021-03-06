//panier
let products = JSON.parse(localStorage.getItem("Produits_du_panier"))

let prices = products.map(x => Number(x.price))

let total = prices.reduce((price, totalprice) => price + totalprice)



document.getElementById("add_total").textContent = `${total}` + "€";