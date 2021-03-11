//function de la création de box
export function elementcreation(type, id, nameOfClass, idOfParent) {
    let result = document.createElement(`${type}`);
    result.className = `${nameOfClass}`;
    result.id = `${id}`;
    document.getElementById(`${idOfParent}`).appendChild(result);
}
//function de l'ajout d'attributs
export function addAttribut(id, attribut, responseAttribut) {
    document.getElementById(`${id}`).setAttribute(`${attribut}`, `${responseAttribut}`)
}
//function de l'ajout de texte

export function addText(id, textToAdd) {
    let writeIntothisBox = document.getElementById(`${id}`);
    writeIntothisBox.textContent = `${textToAdd}`;
}

//classe des infos produits utiles
export class ProductsInfosForAndFromLocalStorage {
    constructor(name, price, id) {
        this.name = name;
        this.price = price;
        this.id = id;
    }

}

//panier et total
export class Basket {
    constructor() {
        this.products = JSON.parse(localStorage.getItem("Produits_du_panier"));
        this.total = (0).toPrecision(3);
    }
    preparStorage() { //préparation de l'emplacement dans le local storage
        if (localStorage.getItem("Produits_du_panier") == null) {
            localStorage.setItem("Produits_du_panier", '[]');
        }
    }
    addProduct(productName, productPrice, productID) {
        this.products
        let produtObject = new ProductsInfosForAndFromLocalStorage(productName, productPrice, productID);
        this.products.push(produtObject);
        localStorage.setItem("Produits_du_panier", JSON.stringify(this.products));
    }
    addAmount() {
        if (this.products == "") {
            document.getElementById("add_total").textContent = `${this.total}` + "€";
        } else {
            let prices = this.products.map(x => Number(x.price))

            this.total = prices.reduce((price, totalprice) => price + totalprice)



            document.getElementById("add_total").textContent = `${this.total}` + "€";
        }
    }

    addTotal() {
        return this.total

    }

}