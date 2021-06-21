window.onload = function () {

    if (!window.sessionStorage) {
        window.location = "./inicio.html";
    }

    var title = document.querySelector(".title-userName");
    var userName = sessionStorage.getItem("user");
    title.innerHTML += userName;

    // Logout
    document.querySelector("#logout").addEventListener("click", (event) => {
        sessionStorage.removeItem("user");
        window.location = "./inicio.html";
    });
};