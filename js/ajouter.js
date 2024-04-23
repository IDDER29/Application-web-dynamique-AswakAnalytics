const date = document.querySelector("#exampleInputDate");
const ville = document.querySelector("#exampleInputVille");
const nom = document.querySelector("#exampleInputNom");
const ajouter = document.querySelector("button");
const street = document.querySelector("#exampleInputStreet");

let ajouterMagazins = JSON.parse(localStorage.getItem("magazins")) || [];

//AJOUTER
function addMagazins() {
    if (!nom.value || !ville.value || !street.value || !date.value) {
        alert("Please enter all inputs");
    } else {
        // Check if the magazine already exists
        const nomMagazine = ajouterMagazins.find(magazine => magazine.name === nom.value);
        if (nomMagazine) {
            alert(nomMagazine.name + " already exists");
        } else if (date.value < 2000 || date.value > 2024) {
            alert("years is between 2000 and 2024")
        } else {
            // Add new magazine entry
            ajouterMagazins.push({
                name: nom.value,
                city: ville.value,
                street: street.value,
                year: date.value
            });
            // Save to local storage
            localStorage.setItem("magazins", JSON.stringify(ajouterMagazins));
            alert("Magazine added successfully");
        }
    }
}

ajouter.addEventListener("click", (e)=> {
    e.preventDefault();
    addMagazins();
    nom.value = "";
    ville.value = "";
    street.value = "";
    date.value = "";
})