// REQUETTE AJAX ----------------------------------------------------------------------------------------------------

//variables pour afficher qu'il s'agit d'une erreur ajax
let catchError = function(e) {
    console.error('ajax error', e)
}

//fonction Ajax pour ne pas répéter la requête
var get = function(url) {
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
var getResults = function() {
    return new Promise(function(resolve, reject) {
        get("http://localhost:3000/api/teddies").then(function(response) {
            var teddys = JSON.parse(response)
            resolve(teddys)
        }).catch(catchError)

    })
}

// appels de mes infos produits


//tableau entier

getResults().then(function(teddys) {
    console.log(teddys)
})

// résultat individuel
getResults().then(function(teddys) {
    let teddy1 = teddys[0];
    console.log(teddy1)
})





// RESULTAT DUPLIQUÉ ----------------------------------------------------------------------------------------------------
//cration de l'élément originel
var i;
for (i = 1; i < 6; i++) {
    //creation du conteneur
    var result = document.createElement('div');
    result.className = "main_products_results" + " " + "appear" + i;
    result.id = "result_box" + i;
    document.querySelector("section").appendChild(result);

    //creation de l'effet cliquable
    var link = document.createElement('a');
    link.className = "main_products_results_generic";
    link.setAttribute('href', "#");
    link.id = "link_" + i;
    document.getElementById("result_box" + i).appendChild(link);

    //creation de la partie photo
    var picBox = document.createElement('div');
    picBox.className = "results_pics";
    picBox.id = "result_pics" + i;
    document.getElementById("link_" + i).appendChild(picBox);

    //url de la photo
    var urlPic = getResults().then(function(teddys) {
        let teddiesPic = teddys[0].imageUrl;
        console.log("ici url image", teddiesPic)
    })
    var pic = document.createElement('img');
    pic.className = "results_pics_size";
    pic.id = "pic_" + i;
    pic.setAttribute('src', "http://localhost:3000/images/teddy_" + [i] + ".jpg");
    document.getElementById("result_pics" + i).appendChild(pic);









}



//4 clones
/*let result = document.getElementById("result_box")
var i;
for (i = 0; i < 4; i++) {
    var clone = result.cloneNode(true);
    clone.id = 'teddies_box' + i;

    document.querySelector("section").appendChild(clone);
}*/

//originel