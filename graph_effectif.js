function graph() {
    let tableData_JSON = localStorage.getItem("tableData");
    let tableData = JSON.parse(tableData_JSON);

    var selectedYear = localStorage.getItem("selectedYear") || "2024";
    document.getElementById("year-select").value = selectedYear;


    let namesData = [];
    let effectifData = [];

    for (let i = 0; i < tableData.length; i++) {
        if (tableData[i].name === selectedYear) {
            namesData.push(String(tableData[i].stor));
            effectifData.push(parseFloat(tableData[i].effectif));
        }
    }
    let xValues;
    let sValues;

    if (namesData) {
        xValues = namesData;
    }
    
    if(effectifData){
        sValues = effectifData;
    }

    
    if (window.effectif_Chart instanceof Chart) {
        window.effectif_Chart.destroy();
    }
    
    window.effectif_Chart = new Chart("effectif_Chart", {
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
                    text: "Effectif this year"
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


    let effectifData = [];

    for (let i = 0; i < tableData.length; i++) {
        if (tableData[i].name === selectedYear) {
            effectifData.push(parseFloat(tableData[i].effectif));
        }
    }

    if (effectifData && effectifData.length > 0) {
        let somme = 0;
        for (let i = 0; i < effectifData.length; i++) {
            somme += effectifData[i];
        }
        let moyen_arith = somme / effectifData.length;
        document.getElementById("ca_moyenne_arithm").innerHTML = moyen_arith + " effectif"
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
  
  
      let effectifData = [];
  
      for (let i = 0; i < tableData.length; i++) {
          if (tableData[i].name === selectedYear) {
            effectifData.push(parseFloat(tableData[i].effectif));
          }
      }
  
    if (effectifData && effectifData.length > 0) {
      let mode = effectifData[0];
      for (let i = 1; i < effectifData.length; i++) {
        if (effectifData[i] > mode) {
          mode = effectifData[i];
        }
      }
      document.getElementById("ca_mode").innerHTML = mode + " effectif";
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


    let effectifData = [];

    for (let i = 0; i < tableData.length; i++) {
        if (tableData[i].name === selectedYear) {
            effectifData.push(parseFloat(tableData[i].effectif));
        }
    }

    if (effectifData && effectifData.length > 0) {
        effectifData.sort((a, b) => a - b);

        let index = effectifData.length;
        let mediane;

        if (index % 2 === 0) {
            mediane = (effectifData[index / 2] + effectifData[(index / 2) - 1]) / 2;
        } else {
            mediane = effectifData[Math.floor(index / 2)];
        }
        document.getElementById("ca_mediane").innerHTML = mediane + " effectif";
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


    let effectifData = [];

    for (let i = 0; i < tableData.length; i++) {
        if (tableData[i].name === selectedYear) {
            effectifData.push(parseFloat(tableData[i].effectif));
        }
    }

    let somme = 0;
    for (let i = 0; i < effectifData.length; i++) {
        somme += effectifData[i];
    }
    let moyenne = somme / effectifData.length;

    let variance = 0;
    for (let i = 0; i < effectifData.length; i++) {
        variance += Math.pow(effectifData[i] - moyenne, 2);
    }
    variance /= effectifData.length;
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
  