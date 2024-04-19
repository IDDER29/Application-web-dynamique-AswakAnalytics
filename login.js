let onlineOrNot = JSON.parse(localStorage.getItem("isloged"))|| -1;
if(onlineOrNot==1){
    window.location.href = "list_of_magazines.html";
}
function loginUser(event) {
    event.preventDefault();

    let adresse_email = document.getElementById("email_login").value;

    let password = document.getElementById("password_login").value;

    let errorMessage = document.getElementById("error-message");
    
    if (adresse_email === "admin@asswak.com" && password === "a") {

        localStorage.setItem("isloged", JSON.stringify(1));
        window.location.href = "list_of_magazines.html";

    } else {
        // alert("Informations d'identification incorrectes.");
        errorMessage.classList.remove("d-none");
    }

}

document.getElementById("login").addEventListener("submit", (e) => {
    loginUser(e);
})
