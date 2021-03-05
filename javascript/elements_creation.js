//function de la création de box
function elementcreation(type, id, nameOfClass, idOfParent) {
    let result = document.createElement(`${type}`);
    result.className = `${nameOfClass}`;
    result.id = `${id}`;
    document.getElementById(`${idOfParent}`).appendChild(result);
}
//function de l'ajout d'attributs
function addAttribut(id, attribut, responseAttribut) {
    document.getElementById(`${id}`).setAttribute(`${attribut}`, `${responseAttribut}`)
}
//function de l'ajout de texte

function addText(id, textToAdd) {
    let writeIntothisBox = document.getElementById(`${id}`);
    writeIntothisBox.textContent = `${textToAdd}`;
}