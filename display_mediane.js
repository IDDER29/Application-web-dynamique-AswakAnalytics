function display_mediane() {
    let caData_JSON = localStorage.getItem("caData");
    let caData = JSON.parse(caData_JSON) || [100, 150, 200, 250, 300];
    

    if (caData && caData.length > 0) {
        caData.sort((a, b) => a - b);

        let index = caData.length;
        let mediane;

        if (index % 2 === 0) {
            mediane = (caData[index / 2] + caData[(index / 2) - 1]) / 2;
        } else {
            mediane = caData[Math.floor(index / 2)];
        }
        document.getElementById("ca_mediane").innerHTML = mediane.toFixed(2) + " %";
    }
}


document.addEventListener("DOMContentLoaded", () =>{

    display_mediane();
});