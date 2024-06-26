function display_ecart_type() {

    let tableData_JSON = localStorage.getItem("tableData");
    let tableData = JSON.parse(tableData_JSON);

    var selectedYear = localStorage.getItem("selectedYear") || "2024";
    document.getElementById("year-select").value = selectedYear;

    document.getElementById("ecart_type_x").innerHTML = "Chargement... ";


    let chiffreAffaireData = [];

    for (let i = 0; i < tableData.length; i++) {
        if (tableData[i].name === selectedYear) {
            chiffreAffaireData.push(parseFloat(tableData[i].chiffreAffaire));
        }
    }

    let somme = 0;
    for (let i = 0; i < chiffreAffaireData.length; i++) {
        somme += chiffreAffaireData[i];
    }
    let moyenne = somme / chiffreAffaireData.length;

    let variance = 0;
    for (let i = 0; i < chiffreAffaireData.length; i++) {
        variance += Math.pow(chiffreAffaireData[i] - moyenne, 2);
    }
    variance /= chiffreAffaireData.length;
    let ecartType = Math.sqrt(variance);

    let coefficientVariation = (ecartType / moyenne) * 100; // mafhemtch

    if (coefficientVariation) {
        document.getElementById("ecart_type_x").innerHTML = coefficientVariation.toFixed(2) + " %"
    }

    console.log("Moyenne:", moyenne);
    console.log("Écart-type:", ecartType);
    console.log("Coefficient de variation:", coefficientVariation, "%");

}
document.addEventListener("DOMContentLoaded", () => {
    display_ecart_type();
});