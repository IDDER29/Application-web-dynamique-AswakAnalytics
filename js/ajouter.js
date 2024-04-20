const date = document.querySelector("#exampleInputDate");
const ville = document.querySelector("#exampleInputVille");
const nom = document.querySelector("#exampleInputNom");
const ajouter = document.querySelector("button");
const street = document.querySelector("#exampleInputStreet");

let ajouterMagazins = JSON.parse(localStorage.getItem("magazins")) || [];

//AJOUTER
function addMagazins() {
    if (!nom.value || !city.value || !street.value || date.value)
    {
        alert("enter all inputs");
    }
    else
    {
        ajouterMagazins.push({
            name : nom.value,
            city : ville.value,
            street : street.value,
            date : date.value
        });
    }   

    localStorage.setItem("magazins", JSON.stringify(ajouterMagazins));
}

ajouter.addEventListener("click", (e)=> {
    e.preventDefault();
    addMagazins();
})