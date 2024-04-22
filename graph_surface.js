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