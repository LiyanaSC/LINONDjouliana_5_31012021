// REQUETTE AJAX ----------------------------------------------------------------------------------------------------

//variables pour afficher qu'il s'agit d'une erreur ajax
let catchError = function(e) {
    console.error('ajax error', e)
}

//fonction Ajax pour ne pas répéter la requête
let get = function(url) {
    return new Promise(function(resolve, reject) {
        var request = new XMLHttpRequest()
        request.onreadystatechange = function() {
            if (this.readyState == 4) {
                if (this.status === 200) {
                    resolve(request.responseText)
                } else {
                    reject(request)
                }

            }
        }
        request.open("GET", url, true);
        request.send()


    })
}

//promesse pour ne pas réitérer l'appelle de mon objet
let getResults = function() {
    return new Promise(function(resolve, reject) {
        get("http://localhost:3000/api/teddies").then(function(response) {
            let teddys = JSON.parse(response)
            resolve(teddys)
        }).catch(catchError);


    })
}


//création  de mes produits--------------------------------------------------------------------------------------------------------
getResults().then(teddys => {
    teddys.forEach((teddy, index) => {

        /*    - elementcreation contient le type, l'id, la classe puis l'id du conteneur parent
              - addAttribut contient l'id de l'élément concerné, l'attribut puis ce que contient cet attribut
              - addText contient l'id de l'élément concerné et le texte à ajouter */

        //conteneur
        elementcreation('div', `result_box${index}`, "main_products_results", "section_index");

        //creation de la partie photo
        elementcreation('div', `result_pics${index}`, "results_pics", `result_box${index}`); //bloc photo

        elementcreation('img', `pic_${index}`, "results_pics_size", `result_pics${index}`); //photo
        addAttribut(`pic_${index}`, 'src', `${teddy.imageUrl}`) //lien photo

        //création de la partie commentaire
        elementcreation('div', `results_descriptions${index}`, "results_descriptions", `result_box${index}`);

        //Partie h3 (nom des articles)
        elementcreation('h3', `results_descriptions_title${index}`, "results_descriptions_title", `results_descriptions${index}`);
        addText(`results_descriptions_title${index}`, `${teddy.name}`);

        //Partie description
        elementcreation('p', `product_text${index}`, "results_descriptions_text", `results_descriptions${index}`);
        addText(`product_text${index}`, `${teddy.description}`);

        //Prix
        elementcreation('p', `product_price${index}`, "results_descriptions_text_price", `results_descriptions${index}`);
        addText(`product_price${index}`, `${(teddy.price / 100).toPrecision(4)}€`);

        //creation de l'étiquette disponible
        elementcreation('div', `results_availability${index}`, "results_availability", `result_box${index}`);
        addText(`results_availability${index}`, "disponible");


        // création des page produit

        let productPage = document.getElementById("result_box" + index);


        productPage.addEventListener("click", function() {
            window.document.location = `product.html?id=${teddy._id}`

        })

        document.addEventListener('DOMContentLoaded', function() {
            productPage()
        })


    });
})