function display_mode() {

  let tableData_JSON = localStorage.getItem("tableData");
    let tableData = JSON.parse(tableData_JSON);

    let chiffreAffaireData = [];

    for (let i = 0; i < tableData.length; i++) {
        chiffreAffaireData.push(parseFloat(tableData[i].chiffreAffaire));
    }

  if (chiffreAffaireData && chiffreAffaireData.length > 0) {
    let mode = chiffreAffaireData[0];
    for (let i = 1; i < chiffreAffaireData.length; i++) {
      if (chiffreAffaireData[i] > mode) {
        mode = chiffreAffaireData[i];
      }
    }
    document.getElementById("ca_mode").innerHTML = mode.toFixed(2) + " DH";
  }
}


document.addEventListener("DOMContentLoaded", () => {
  display_mode();
});

