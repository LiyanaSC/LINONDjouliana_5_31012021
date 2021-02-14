let teddy = ["teddy_1", "teddy_2", "teddy_3", "teddy_4", "teddy_5"]

for (let teddy of teddys) {
    const newElt = document.createElement("div");

    let elt = document.getElementById("genericResult");

    elt.appendChild(newElt)
}