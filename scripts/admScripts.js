window.onload = function () {

    if (!window.sessionStorage) {
        window.location = "./inicio.html";
    }

    var title = document.querySelector(".title-userName");
    var userName = sessionStorage.getItem("user");
    title.innerHTML += userName;

    // Logout
    document.querySelector("#logout").addEventListener("click", (event) => {
        window.location = "./inicio.html";
        sessionStorage.removeItem("user");
    });
};