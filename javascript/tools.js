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