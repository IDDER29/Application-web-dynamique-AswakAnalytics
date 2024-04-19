function display_moyen_arith() {
    

    let caData_JSON = localStorage.getItem("caData");
    let caData = JSON.parse(caData_JSON);

    if (caData && caData.length > 0) {
        let somme = 0;
        for (let i = 0; i < caData.length; i++) {
            somme += caData[i];
        }
        let moyen_arith = somme / caData.length;
        document.getElementById("ca_moyenne_arithm").innerHTML = moyen_arith.toFixed(2) + " DH"
    }
}
document.addEventListener("DOMContentLoaded", ()=> {
    display_moyen_arith();
});

// const caData = [100, 150, 200, 250, 300];
// const caData_JSON = JSON.stringify(caData);
// localStorage.setItem("caData", caData_JSON);