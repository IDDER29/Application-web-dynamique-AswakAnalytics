function graph() {
    let tableData_JSON = localStorage.getItem("tableData");
    let tableData = JSON.parse(tableData_JSON);

    var selectedYear = localStorage.getItem("selectedYear") || "2024";
    document.getElementById("year-select").value = selectedYear;


    let namesData = [];
    let surfaceData = [];

    for (let i = 0; i < tableData.length; i++) {
        if (tableData[i].name === selectedYear) {
            namesData.push(String(tableData[i].stor));
            surfaceData.push(parseFloat(tableData[i].surface));
        }
    }
    let xValues;
    let sValues;

    if (namesData) {
        xValues = namesData;
    }
    
    if(surfaceData){
        sValues = surfaceData;
    }

    
    if (window.surface_Chart instanceof Chart) {
        window.surface_Chart.destroy();
    }
    
    window.surface_Chart = new Chart("surface_Chart", {
        type: "bar",
        data: {
            labels: xValues,
            datasets: [{
                backgroundColor: "blue",
                data: sValues
            }]
        },
        options: {
            plugins: {
                legend: { display: false },
                title: {
                    display: true,
                    text: "Surface this year"
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 10000
                    }
                }
            }
        }
    });
}
document.addEventListener("DOMContentLoaded", () => {
    graph();
});

function display_moyen_arith() {

    let tableData_JSON = localStorage.getItem("tableData");
    let tableData = JSON.parse(tableData_JSON);

    var selectedYear = localStorage.getItem("selectedYear") || "2024";
    document.getElementById("year-select").value = selectedYear;

    document.getElementById("ca_moyenne_arithm").innerHTML ="Chargement... ";


    let surfaceData = [];

    for (let i = 0; i < tableData.length; i++) {
        if (tableData[i].name === selectedYear) {
            surfaceData.push(parseFloat(tableData[i].surface));
        }
    }

    if (surfaceData && surfaceData.length > 0) {
        let somme = 0;
        for (let i = 0; i < surfaceData.length; i++) {
            somme += surfaceData[i];
        }
        let moyen_arith = somme / surfaceData.length;
        document.getElementById("ca_moyenne_arithm").innerHTML = moyen_arith.toFixed(2) + " m²"
    }
}
document.addEventListener("DOMContentLoaded", ()=> {
    display_moyen_arith();
});

function display_mode() {

    let tableData_JSON = localStorage.getItem("tableData");
      let tableData = JSON.parse(tableData_JSON);
  
  var selectedYear = localStorage.getItem("selectedYear") || "2024";
      document.getElementById("year-select").value = selectedYear;
  
      document.getElementById("ca_mode").innerHTML ="Chargement... ";
  
  
      let surfaceData = [];
  
      for (let i = 0; i < tableData.length; i++) {
          if (tableData[i].name === selectedYear) {
            surfaceData.push(parseFloat(tableData[i].surface));
          }
      }
  
    if (surfaceData && surfaceData.length > 0) {
      let mode = surfaceData[0];
      for (let i = 1; i < surfaceData.length; i++) {
        if (surfaceData[i] > mode) {
          mode = surfaceData[i];
        }
      }
      document.getElementById("ca_mode").innerHTML = mode.toFixed(2) + " m²";
    }
  }
  
  
  document.addEventListener("DOMContentLoaded", () => {
    display_mode();
  });

  function display_mediane() {
    let tableData_JSON = localStorage.getItem("tableData");
    let tableData = JSON.parse(tableData_JSON);

    var selectedYear = localStorage.getItem("selectedYear") || "2024";
    document.getElementById("year-select").value = selectedYear;

    document.getElementById("ca_mediane").innerHTML ="Chargement... ";


    let surfaceData = [];

    for (let i = 0; i < tableData.length; i++) {
        if (tableData[i].name === selectedYear) {
            surfaceData.push(parseFloat(tableData[i].surface));
        }
    }

    if (surfaceData && surfaceData.length > 0) {
        surfaceData.sort((a, b) => a - b);

        let index = surfaceData.length;
        let mediane;

        if (index % 2 === 0) {
            mediane = (surfaceData[index / 2] + surfaceData[(index / 2) - 1]) / 2;
        } else {
            mediane = surfaceData[Math.floor(index / 2)];
        }
        document.getElementById("ca_mediane").innerHTML = mediane.toFixed(2) + " m²";
    }
}


document.addEventListener("DOMContentLoaded", () => {

    display_mediane();
});


function display_ecart_type() {

    let tableData_JSON = localStorage.getItem("tableData");
    let tableData = JSON.parse(tableData_JSON);

    var selectedYear = localStorage.getItem("selectedYear") || "2024";
    document.getElementById("year-select").value = selectedYear;

    document.getElementById("ecart_type_x").innerHTML = "Chargement... ";


    let surfaceData = [];

    for (let i = 0; i < tableData.length; i++) {
        if (tableData[i].name === selectedYear) {
            surfaceData.push(parseFloat(tableData[i].surface));
        }
    }

    let somme = 0;
    for (let i = 0; i < surfaceData.length; i++) {
        somme += surfaceData[i];
    }
    let moyenne = somme / surfaceData.length;

    let variance = 0;
    for (let i = 0; i < surfaceData.length; i++) {
        variance += Math.pow(surfaceData[i] - moyenne, 2);
    }
    variance /= surfaceData.length;
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
  