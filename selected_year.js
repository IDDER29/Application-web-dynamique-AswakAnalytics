function selected_year() {

    var selectedYear = document.getElementById("year-select").value;

    localStorage.setItem("selectedYear", selectedYear);
    display_mode();
    display_moyen_arith();
    display_ecart_type();
    display_mediane();
    graph();
};


document.addEventListener("DOMContentLoaded", () => {

    selected_year();
});
