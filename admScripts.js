window.onload = function(){

    var title = document.querySelector(".title-userName");
    var userName = sessionStorage.getItem("user");
    title.innerHTML += userName;

}

// Logout
document.querySelector("#logout").addEventListener("click", (event) => {
    window.location = "./inicio.html";

    sessionStorage.removeItem("nombre");
});