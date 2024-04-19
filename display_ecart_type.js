function display_ecart_type() {

    let caData_JSON = localStorage.getItem("caData");
    let caData = JSON.parse(caData_JSON);

    let somme = 0;
    for (let i = 0; i < caData.length; i++) {
        somme += caData[i];
    }
    let moyenne = somme / caData.length;

    let variance = 0;
    for (let i = 0; i < caData.length; i++) {
        variance += Math.pow(caData[i] - moyenne, 2);
    }
    variance /= caData.length;
    let ecartType = Math.sqrt(variance);

    let coefficientVariation = (ecartType / moyenne) * 100; // mafhemtch

    document.getElementById("ecart_type_x").innerHTML = coefficientVariation.toFixed(2) + " %"

    console.log("Moyenne:", moyenne);
    console.log("Écart-type:", ecartType);
    console.log("Coefficient de variation:", coefficientVariation, "%");


}
document.addEventListener("DOMContentLoaded", ()=> {
    display_ecart_type();
});