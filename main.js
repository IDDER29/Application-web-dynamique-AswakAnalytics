let elementsArray = [];

let button = document.getElementById("add-button");
function openPopup() {
  let popup = document.getElementById("editPopup");
  popup.style.display = "block";
}

function closePopup() {
  let popup = document.getElementById("editPopup");
  popup.style.display = "none";
}

let rowCount = 1;

function addToTable() {
  let name = document.getElementById("editName").value;
  let chiffreAffaire = document.getElementById("CA").value;
  let effectif = document.getElementById("effectif").value;
  let surface = document.getElementById("surface").value;

  let newRow = document.createElement("tr");

  let nameCell = document.createElement("td");
  nameCell.textContent = name;
  let chiffreAffaireCell = document.createElement("td");
  chiffreAffaireCell.textContent = chiffreAffaire;
  let effectifCell = document.createElement("td");
  effectifCell.textContent = effectif;

  let surfaceCell = document.createElement("td");
  surfaceCell.textContent = surface;

  // Cellule pour l'icône de modification
  // Créer la cellule pour les icônes d'édition et de suppression
  let actionCell = document.createElement("td");

  // Créer l'icône d'édition
  // Créez l'icône d'édition
  let editIcon = document.createElement("i");
  editIcon.className = "fas fa-edit edit-icon";
  
  // Ajoutez l'événement de clic à l'icône d'édition
  editIcon.addEventListener("click", function () {
    let row = this.parentNode.parentNode; // Récupère la ligne parente de l'icône d'édition
    openEditPopup(row);
  });

  actionCell.appendChild(editIcon);

  let iconSpacing = document.createElement("span");
  iconSpacing.className = "icon-spacing";
  actionCell.appendChild(iconSpacing);

  // Créer l'icône de suppression
  let deleteIcon = document.createElement("i");
  deleteIcon.className = "fas fa-trash-alt delete-icon";
  deleteIcon.setAttribute("disabled", "disabled");
  actionCell.appendChild(deleteIcon);

  // Ajouter l'écouteur d'événements à l'icône d'édition

  deleteIcon.addEventListener("click", function () {
    let confirmation = confirm(
      "Êtes-vous sûr de vouloir supprimer cet élément ?"
    );
    if (confirmation) {
      let row = deleteIcon.parentNode.parentNode;
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

  let data = {
    name: name,
    chiffreAffaire: chiffreAffaire,
    effectif: effectif,
    surface: surface,
  };

  let tableData = JSON.parse(localStorage.getItem("tableData")) || [];
  tableData.push(data);
  localStorage.setItem("tableData", JSON.stringify(tableData));

  closePopup();
}

let currentRow;

function openEditPopup(row) {
  currentRow = row;

  let tableRows = document.querySelectorAll("tr");
  tableRows.forEach(function (tableRow) {
    tableRow.classList.remove("selected");
  });

  row.classList.add("selected");

  let cells = row.getElementsByTagName("td");
  let name = cells[1].textContent;
  let effectif = cells[2].textContent;
  let surface = cells[3].textContent;

  document.getElementById("modCa").value = name;
  document.getElementById("modEffectif").value = effectif;
  document.getElementById("modSurface").value = surface;

  let modPopup = document.getElementById("modPopup");
  modPopup.style.display = "block";
}

function closeEditPopup() {
  let modPopup = document.getElementById("modPopup");
  modPopup.style.display = "none";
}

function attachSaveEditEvent() {
  document.getElementById("saveEdit").addEventListener("click", function () {
    console.log("Bouton Enregistrer cliqué");
    saveEditedData();
  });
}

// Attacher l'événement à l'événement "DOMContentLoaded" du document
document.addEventListener("DOMContentLoaded", attachSaveEditEvent);

function saveEditedData() {
  let name = document.getElementById("modCa").value;

  let effectif = document.getElementById("modEffectif").value;
  let surface = document.getElementById("modSurface").value;

  let cells = currentRow.getElementsByTagName("td");

  cells[1].textContent = name;
  cells[2].textContent = effectif;
  cells[3].textContent = surface;

  closeEditPopup();

  updateLocalStorage();
}

function updateLocalStorage() {
  let tableRows = document.querySelectorAll("#tableBody tr");
  let tableData = [];

  tableRows.forEach(function (row) {
    let cells = row.getElementsByTagName("td");
    let rowData = {
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
  let tableData = JSON.parse(localStorage.getItem("tableData")) || [];
  let tableBody = document.getElementById("tableBody");

  tableData.forEach(function (data) {
    let newRow = document.createElement("tr");
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

    // Ajouter l'icône d'édition et l'icône de suppression à chaque ligne
    let actionCell = document.createElement("td");

    // Créer l'icône d'édition
    let editIcon = document.createElement("i");
    editIcon.className = "fas fa-edit edit-icon";
    editIcon.addEventListener("click", function () {
      let row = this.parentNode.parentNode;
      openEditPopup(row);
    });
    actionCell.appendChild(editIcon);

    let iconSpacing = document.createElement("span");
    iconSpacing.className = "icon-spacing";
    actionCell.appendChild(iconSpacing);

    // Créer l'icône de suppression
    let deleteIcon = document.createElement("i");
    deleteIcon.className = "fas fa-trash-alt delete-icon";
    deleteIcon.addEventListener("click", function () {
      let confirmation = confirm(
        "Êtes-vous sûr de vouloir supprimer cet élément ?"
      );
      if (confirmation) {
        let row = deleteIcon.parentNode.parentNode;
        row.parentNode.removeChild(row);
        updateLocalStorage();
      }
    });
    actionCell.appendChild(deleteIcon);

    newRow.appendChild(actionCell);
    tableBody.appendChild(newRow);
  });
});

console.log("tableData:", tableData);
localStorage.setItem("tableData", JSON.stringify(tableData));

window.addEventListener("load", function () {
  let tableData = JSON.parse(localStorage.getItem("tableData")) || [];
  let tableBody = document.getElementById("tableBody");

  tableData.forEach(function (data) {
    let newRow = document.createElement("tr");
    newRow.innerHTML =
      "<td>" +
      data.name +
      "</td><td>" +
      data.effectif +
      "</td><td>" +
      data.surface +
      "</td>";
    tableBody.appendChild(newRow);
  });
});

let addButton = document.getElementById("addButton");
addButton.addEventListener("click", function () {
  addToTable();
  
});
