function display_mediane() {
    let tableData_JSON = localStorage.getItem("tableData");
    let tableData = JSON.parse(tableData_JSON);

    var selectedYear = localStorage.getItem("selectedYear") || "2024";
    document.getElementById("year-select").value = selectedYear;

    document.getElementById("ca_mediane").innerHTML ="Chargement... ";


    let chiffreAffaireData = [];

    for (let i = 0; i < tableData.length; i++) {
        if (tableData[i].name === selectedYear) {
            chiffreAffaireData.push(parseFloat(tableData[i].chiffreAffaire));
        }
    }

    if (chiffreAffaireData && chiffreAffaireData.length > 0) {
        chiffreAffaireData.sort((a, b) => a - b);

        let index = chiffreAffaireData.length;
        let mediane;

        if (index % 2 === 0) {
            mediane = (chiffreAffaireData[index / 2] + chiffreAffaireData[(index / 2) - 1]) / 2;
        } else {
            mediane = chiffreAffaireData[Math.floor(index / 2)];
        }
        document.getElementById("ca_mediane").innerHTML = mediane.toFixed(2) + " DH";
    }
}


document.addEventListener("DOMContentLoaded", () => {

    display_mediane();
});