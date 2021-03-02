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



// appels de mes infos produits
getResults().then(function(teddyIds) {
        console.log("ici", teddyIds)
    })
    //création  de mes produits--------------------------------------------------------------------------------------------------------
getResults().then(function(teddys) {
    teddys.forEach(function(teddy, index) {

        //creation du conteneur
        let result = document.createElement('div');
        result.className = "main_products_results" + " " + "appear" + index;
        result.id = "result_box" + index;
        document.getElementById("section_index").appendChild(result);

        //creation de l'effet cliquable

        let link = document.createElement('a');
        link.className = "main_products_results_generic";
        link.setAttribute('href', "#");
        link.id = "teddylink" + index;
        document.getElementById("result_box" + index).appendChild(link);

        //creation de la partie photo
        let picBox = document.createElement('div');
        picBox.className = "results_pics";
        picBox.id = "result_pics" + index;
        document.getElementById("teddylink" + index).appendChild(picBox);

        let pic = document.createElement('img')
        pic.className = "results_pics_size";
        pic.id = "pic_" + index;
        pic.setAttribute('src', teddy.imageUrl);
        document.getElementById("result_pics" + index).appendChild(pic);

        //creation de la partie commentaire
        let commentBox = document.createElement('div');
        commentBox.className = "results_descriptions";
        commentBox.id = "results_descriptions" + index;
        document.getElementById("teddylink" + index).appendChild(commentBox);

        //Partie h3 (nom des articles)

        let productTitle = document.createElement('h3');
        productTitle.className = "results_descriptions_title";
        productTitle.id = "results_descriptions_title" + index;
        document.getElementById("results_descriptions" + index).appendChild(productTitle);

        let nameProduct = document.getElementById("results_descriptions_title" + index);
        nameProduct.textContent = teddy.name;

        //Partie description

        let productText = document.createElement('p');
        productText.className = "results_descriptions_text";
        productText.id = "product_text" + index;
        document.getElementById("results_descriptions" + index).appendChild(productText);

        let textDescription = document.getElementById("product_text" + index);
        textDescription.textContent = teddy.description;

        //Prix


        let productPrice = document.createElement('p');
        productPrice.className = "results_descriptions_text_price";
        productPrice.id = "product_price" + index;
        document.getElementById("results_descriptions" + index).appendChild(productPrice);

        let textPrice = document.getElementById("product_price" + index);
        textPrice.textContent = (teddy.price / 100).toPrecision(4) + "€";

        //creation de l'étiquette disponible
        let availableLabel = document.createElement('div');
        availableLabel.className = "results_availability";
        availableLabel.id = "results_availability" + index;
        document.getElementById("teddylink" + index).appendChild(availableLabel);

        let availableText = document.createElement('div');
        availableText.id = "available" + index;
        document.getElementById("results_availability" + index).appendChild(availableText);

        let textAvailable = document.getElementById("available" + index);
        textAvailable.textContent = "disponible";

        // page produit

        let productPage = document.getElementById("teddylink" + index);


        productPage.addEventListener("click", function() {
            window.document.location = `product.html?id=${teddy._id}`

        })

        document.addEventListener('DOMContentLoaded', function() {
            productPage()
        })


    });
})

//panier-------------------------------------------------------------------------------------------------------------------------
let productsIntoBaskets = JSON.parse(localStorage.getItem("Produits du panier"))
productsIntoBaskets.forEach((productsIntoBasket, index) => {


    //addition panier
    let basket = 0;


    for (let i = 0; i < index + 1; i++) {
        basket += Number(productsIntoBaskets[i][1])
    }
    var addTotal = document.getElementById("add_total");
    addTotal.textContent = `${basket}` + "€";
})