function loginUser(event) {
    event.preventDefault();

    let adresse_email = document.getElementById("email_login").value;

    let password = document.getElementById("password_login").value;

    if (adresse_email === "admin@asswak.com" && password === "a") {

        window.location.href = "list_of_magazines.html";
        localStorage.setItem("isloged", JSON.stringify(1));

    } else {
        alert("Informations d'identification incorrectes.");
    }

}

document.getElementById("login").addEventListener("submit", (e) => {
    loginUser(e);
})