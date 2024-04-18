function display_mode(event) {
    event.preventDefault();

    let caData_JSON = localStorage.getItem("caData");
    let caData = JSON.parse(caData_JSON);

    if (caData && caData.length > 0) {
        let mode = caData[0];
        for (let i = 1; i < caData.length; i++) {
            if (caData[i] > mode) {
                mode = caData[i];
            }

        }
        document.getElementById("ca_mode").innerHTML = mode.toFixed(2) + " DH"
    }
}
document.addEventListener("DOMContentLoaded", function () {
    display_mode(event);
});