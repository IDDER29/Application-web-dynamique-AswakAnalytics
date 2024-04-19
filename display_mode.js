function display_mode() {
<<<<<<< Updated upstream
=======
  let caData_JSON = localStorage.getItem("caData");
  let caData = JSON.parse(caData_JSON) || [100, 150, 200, 250, 300];
>>>>>>> Stashed changes

  if (caData && caData.length > 0) {
    let mode = caData[0];
    for (let i = 1; i < caData.length; i++) {
      if (caData[i] > mode) {
        mode = caData[i];
      }
    }
    document.getElementById("ca_mode").innerHTML = mode.toFixed(2) + " DH";
  }
}
<<<<<<< Updated upstream
document.addEventListener("DOMContentLoaded", ()=> {
    display_mode();
});
=======

document.addEventListener("DOMContentLoaded", () => {
  display_mode();
});
>>>>>>> Stashed changes
