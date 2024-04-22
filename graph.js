function graph() {
    // var xValues = ["Jan", "Fev", "Mar", "Avr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let tableData_JSON = localStorage.getItem("tableData");
    let tableData = JSON.parse(tableData_JSON);

    var selectedYear = localStorage.getItem("selectedYear") || "2024";
    document.getElementById("year-select").value = selectedYear;


    let chiffreAffaireData = [];
    let namesData = [];
    let effectifData = [];
    let surfaceData = [];

    for (let i = 0; i < tableData.length; i++) {
        if (tableData[i].name === selectedYear) {
            chiffreAffaireData.push(parseFloat(tableData[i].chiffreAffaire));
            namesData.push(String(tableData[i].stor));
            effectifData.push(parseFloat(tableData[i].effectif));
            surfaceData.push(parseFloat(tableData[i].surface));
        }
    }
    let yValues;
    let xValues;
    let eValues;
    let sValues;

    if (namesData) {
        xValues = namesData;
    }
    if (chiffreAffaireData) {
        yValues = chiffreAffaireData;
    }
    if (effectifData) {
        eValues = effectifData;
    }
    if(surfaceData){
        sValues = surfaceData;
    }

    if (window.myChart instanceof Chart) {
        window.myChart.destroy();
    }
    if (window.effectif_Chart instanceof Chart) {
        window.effectif_Chart.destroy();
    }
    if (window.surface_Chart instanceof Chart) {
        window.surface_Chart.destroy();
    }
    window.myChart = new Chart("myChart", {
        type: "bar",
        data: {
            labels: xValues,
            datasets: [{
                backgroundColor: "blue",
                data: yValues
            }]
        },
        options: {
            plugins: {
                legend: { display: false },
                title: {
                    display: true,
                    text: "Products sold this year"
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
    window.effectif_Chart = new Chart("effectif_Chart", {
        type: "bar",
        data: {
            labels: xValues,
            datasets: [{
                backgroundColor: "blue",
                data: eValues
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