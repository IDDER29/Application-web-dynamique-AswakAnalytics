function graph() {
    // var xValues = ["Jan", "Fev", "Mar", "Avr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let tableData_JSON = localStorage.getItem("tableData");
    let tableData = JSON.parse(tableData_JSON);

    var selectedYear = localStorage.getItem("selectedYear") || "2024";
    document.getElementById("year-select").value = selectedYear;


    let chiffreAffaireData = [];
    let namesData = [];


    for (let i = 0; i < tableData.length; i++) {
        if (tableData[i].name === selectedYear) {
            chiffreAffaireData.push(parseFloat(tableData[i].chiffreAffaire));
            namesData.push(String(tableData[i].stor));

        }
    }
    let yValues;
    let xValues;


    if (namesData) {
        xValues = namesData;
    }
    if (chiffreAffaireData) {
        yValues = chiffreAffaireData;
    }
   

    if (window.myChart instanceof Chart) {
        window.myChart.destroy();
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
    
}
document.addEventListener("DOMContentLoaded", () => {
    graph();
});