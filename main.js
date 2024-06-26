let elementsArray = [];
let stors = JSON.parse(localStorage.getItem("magazins"));
let id = JSON.parse(localStorage.getItem("selectedId"));

console.log(stors[id].name);


let button = document.getElementById("add-button");
function openPopup() {
  let popup = document.getElementById("editPopup");
  popup.style.display = "block";
}

function closePopup() {
  let popup = document.getElementById("editPopup");
  popup.style.display = "none";
}
function validateInputAdd() {
  var year = document.getElementById("year").value;
  var chiffreAffaire = document.getElementById("CA").value;
  var effectif = document.getElementById("effectif").value;
  var surface = document.getElementById("surface").value;
  var tableData = JSON.parse(localStorage.getItem("tableData")) || [];

  let cardData = tableData.filter(data => data.stor == stors[id].name);
  let checkYearExists = cardData.some(data => data.name == year);

  // Vérifie si l'année existe déjà dans les données
  if (checkYearExists) {
    alert("L'année existe déjà dans les données. Veuillez choisir une autre année.");
    return false; // Empêche l'ajout au tableau si l'année existe déjà
  }
  // Vérifie si les champs sont vides ou non numériques
  if (
    isNaN(chiffreAffaire) ||
    isNaN(effectif) ||
    isNaN(surface) ||
    chiffreAffaire === "" ||
    effectif === "" ||
    surface === ""
  ) {
    alert("Veuillez entrer des valeurs numériques dans tous les champs.");
    return false; // Empêche l'ajout au tableau si les données ne sont pas valides
  }
  return true; // Les données sont valides
}
function validateInputMod() {
  var chiffreAffaire = document.getElementById("modCa").value;
  var effectif = document.getElementById("modEffectif").value;
  var surface = document.getElementById("modSurface").value;

  // Vérifie si les champs sont vides ou non numériques
  if (
    isNaN(chiffreAffaire) ||
    isNaN(effectif) ||
    isNaN(surface) ||
    chiffreAffaire === "" ||
    effectif === "" ||
    surface === ""
  ) {
    alert("Veuillez entrer des valeurs numériques dans tous les champs.");
    return false; // Empêche l'ajout au tableau si les données ne sont pas valides
  }
  return true; // Les données sont valides
}
var rowCount = 1;

function addToTable() {
  if (!validateInputAdd()) {
    return; // Sort de la fonction si les données ne sont pas valides
  }
  var name = document.getElementById("year").value;
  var chiffreAffaire = document.getElementById("CA").value;
  var effectif = document.getElementById("effectif").value;
  var surface = document.getElementById("surface").value;

  var newRow = document.createElement("tr");

  var nameCell = document.createElement("td");
  nameCell.textContent = name;
  var chiffreAffaireCell = document.createElement("td");
  chiffreAffaireCell.textContent = chiffreAffaire;
  var effectifCell = document.createElement("td");
  effectifCell.textContent = effectif;

  var surfaceCell = document.createElement("td");
  surfaceCell.textContent = surface;

  // Cellule pour l'icône de modification
  // Créer la cellule pour les icônes d'édition et de suppression
  var actionCell = document.createElement("td");

  // Créer l'icône d'édition
  // Créez l'icône d'édition
  var editIcon = document.createElement("i");
  editIcon.className = "fas fa-edit edit-icon";

  // Ajoutez l'événement de clic à l'icône d'édition
  editIcon.addEventListener("click", function () {
    var row = this.parentNode.parentNode; // Récupère la ligne parente de l'icône d'édition
    openEditPopup(row);
  });

  actionCell.appendChild(editIcon);

  var iconSpacing = document.createElement("span");
  iconSpacing.className = "icon-spacing";
  actionCell.appendChild(iconSpacing);

  // Créer l'icône de suppression
  var deleteIcon = document.createElement("i");
  deleteIcon.className = "fas fa-trash-alt delete-icon";
  deleteIcon.setAttribute("disabled", "disabled");
  actionCell.appendChild(deleteIcon);

  // Ajouter l'écouteur d'événements à l'icône d'édition

  deleteIcon.addEventListener("click", function () {
    var confirmation = confirm(
      "Êtes-vous sûr de vouloir supprimer cet élément ?"
    );
    if (confirmation) {
      var row = deleteIcon.parentNode.parentNode;
      row.parentNode.removeChild(row);

      updateLocalStorage();
    }
  });

  newRow.appendChild(nameCell);
  newRow.appendChild(chiffreAffaireCell);
  newRow.appendChild(effectifCell);
  newRow.appendChild(surfaceCell);
  newRow.appendChild(actionCell);

  document.getElementById("tableBody").appendChild(newRow);

  var data = {
    stor:stors[id].name,
    name: name,
    chiffreAffaire: chiffreAffaire,
    effectif: effectif,
    surface: surface,
  };

  var tableData = JSON.parse(localStorage.getItem("tableData")) || [];
  tableData.push(data);
  localStorage.setItem("tableData", JSON.stringify(tableData));

  closePopup();
}

var currentRow;

function openEditPopup(row) {
  currentRow = row;
  var tableRows = document.querySelectorAll("tr");
  tableRows.forEach(function (tableRow) {
    tableRow.classList.remove("selected");
  });

  row.classList.add("selected");

  var cells = row.getElementsByTagName("td");
  var name = cells[1].textContent;
  var effectif = cells[2].textContent;
  var surface = cells[3].textContent;

  document.getElementById("modCa").value = name;
  document.getElementById("modEffectif").value = effectif;
  document.getElementById("modSurface").value = surface;

  var modPopup = document.getElementById("modPopup");
  modPopup.style.display = "block";
}

function closeEditPopup() {
  var modPopup = document.getElementById("modPopup");
  modPopup.style.display = "none";
}

function attachSaveEditEvent() {
  document.getElementById("saveEdit").addEventListener("click", function () {
    // console.log("Bouton Enregistrer cliqué");
    saveEditedData();
  });
}

// Attacher l'événement à l'événement "DOMContentLoaded" du document
document.addEventListener("DOMContentLoaded", attachSaveEditEvent);

function saveEditedData() {
  if (!validateInputMod()) {
    return; // Sort de la fonction si les données ne sont pas valides
  }
  var name = document.getElementById("modCa").value;
  var effectif = document.getElementById("modEffectif").value;
  var surface = document.getElementById("modSurface").value;

  var cells = currentRow.getElementsByTagName("td");

  cells[1].textContent = name;
  cells[2].textContent = effectif;
  cells[3].textContent = surface;
console.log("hi how are you ");
  closeEditPopup();
  // validateInput();
  updateLocalStorage();
}

function updateLocalStorage() {
  var tableRows = document.querySelectorAll("#tableBody tr");
  var tableData = [];

  tableRows.forEach(function (row) {
    var cells = row.getElementsByTagName("td");
    var rowData = {
      stor:stors[id].name,
      name: cells[0].textContent,
      chiffreAffaire: cells[1].textContent,
      effectif: cells[2].textContent,
      surface: cells[3].textContent,
    };
    tableData.push(rowData);
  });

  localStorage.setItem("tableData", JSON.stringify(tableData));
}
// Charger les données du local storage au chargement de la page
window.addEventListener("load", function () {
  var tableData = JSON.parse(localStorage.getItem("tableData")) || [];
  let cardData = tableData.filter(data => data.stor == stors[id].name);

  var tableBody = document.getElementById("tableBody");
  updateTitle();
  cardData.forEach(data => {
    var newRow = document.createElement("tr");
    console.log("hi how are you ");
    newRow.innerHTML =
      "<td>" +
      data.name +
      "</td><td>" +
      data.chiffreAffaire +
      "</td><td>" +
      data.effectif +
      "</td><td>" +
      data.surface +
      "</td>";
      console.log("repeat");
    // Ajouter l'icône d'édition et l'icône de suppression à chaque ligne
    var actionCell = document.createElement("td");

    // Créer l'icône d'édition
    var editIcon = document.createElement("i");
    editIcon.className = "fas fa-edit edit-icon";
    editIcon.addEventListener("click", function () {
      var row = this.parentNode.parentNode;
      openEditPopup(row);
    });
   
    actionCell.appendChild(editIcon);

    var iconSpacing = document.createElement("span");
    iconSpacing.className = "icon-spacing";
    actionCell.appendChild(iconSpacing);

    // Créer l'icône de suppression
    var deleteIcon = document.createElement("i");
    deleteIcon.className = "fas fa-trash-alt delete-icon";
    deleteIcon.addEventListener("click", function () {
      var confirmation = confirm(
        "Êtes-vous sûr de vouloir supprimer cet élément ?"
      );
      if (confirmation) {
        var row = deleteIcon.parentNode.parentNode;
        row.parentNode.removeChild(row);
        updateLocalStorage();
      }
    });
    actionCell.appendChild(deleteIcon);

    newRow.appendChild(actionCell);
    tableBody.appendChild(newRow);
  });
  console.log("hi how are you ");
});



var addButton = document.getElementById("addButton");
addButton.addEventListener("click", function () {
  addToTable();
});

// // Fonction pour mettre à jour le titre en fonction du magasin sélectionné
function updateTitle() {
  // var selectElement = document.getElementById("editCategory");
  // var selectedStoreName = selectElement.value;
  var titleElement = document.getElementById("magasin-title");

  titleElement.textContent = stors[id].name ;
}




