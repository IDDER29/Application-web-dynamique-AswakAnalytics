function display_moyen_arith() {

    let tableData_JSON = localStorage.getItem("tableData");
    let tableData = JSON.parse(tableData_JSON);

    var selectedYear = localStorage.getItem("selectedYear") || "2024";
    document.getElementById("year-select").value = selectedYear;

    document.getElementById("ca_moyenne_arithm").innerHTML ="Chargement... ";


    let chiffreAffaireData = [];

    for (let i = 0; i < tableData.length; i++) {
        if (tableData[i].name === selectedYear) {
            chiffreAffaireData.push(parseFloat(tableData[i].chiffreAffaire));
        }
    }

    if (chiffreAffaireData && chiffreAffaireData.length > 0) {
        let somme = 0;
        for (let i = 0; i < chiffreAffaireData.length; i++) {
            somme += chiffreAffaireData[i];
        }
        let moyen_arith = somme / chiffreAffaireData.length;
        document.getElementById("ca_moyenne_arithm").innerHTML = moyen_arith.toFixed(2) + " DH"
    }
}
document.addEventListener("DOMContentLoaded", ()=> {
    display_moyen_arith();
});
