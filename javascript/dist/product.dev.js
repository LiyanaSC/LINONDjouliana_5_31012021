"use strict";

var params = new URL(document.location).searchParams;
var urlId = params.get('id'); // la chaine de caractère "Jonathan Smith".
//console.log(urlId)

function getProductById(id) {
  return fetch("http://localhost:3000/api/teddies/".concat(id)).then(function (result) {
    return result.json();
  });
}

getProductById(urlId).then(function (teddy) {
  var productsPics = getProductById("product_page_pic");
  console.log(productsPics); //productsPics.setAttribute('src', teddy.imageUrl);        
});
/*//variables pour afficher qu'il s'agit d'une erreur ajax

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


getResults().then(function(teddys) {
    teddys.forEach(function(teddy, index) {



        let pic = document.createElement('img')
        pic.className = "results_pics_size";
        pic.id = "pic_" + index;
        pic.setAttribute('src', teddy.imageUrl);
        let productChanges = document.getElementById("product_section").appendChild(pic);


        document.addEventListener('DOMContentLoaded', function() {
            productChanges()
        })

    })

})*/