window.onload = () => {
    // Show login modal
    document.querySelector('#login').addEventListener("click", showModal, "false");

    function showModal() {

        // Deshabilitacion de botones de nav
        document.querySelectorAll("nav>ul>li").disabled = true;

        document.querySelector('.modal-loggin').style.setProperty('display', 'block')
        document.querySelector('.textBackground').style.setProperty('visibility', 'hidden')
    }

    // Hide login modal
    document.querySelector('.exitButtton').addEventListener("click", hiddeModal, "false");

    function hiddeModal() {

        // Deshabilitacion de botones de nav
        document.querySelectorAll("nav>ul>li").disabled = false;

        const messageBox = document.querySelector("#messageLogin");

        messageBox.innerHTML = "";

        document.querySelector('.modal-loggin').style.setProperty('display', 'none');
        document.querySelector('.textBackground').style.setProperty('visibility', 'unset');
    }

    // Login
    document.querySelector("button.button.login").addEventListener("click", (event) => {

        event.preventDefault();
        const inputUsername = document.querySelector("#username").value;
        const inputPassword = document.querySelector("#password").value;
        const messageBox = document.querySelector("#messageLogin");
        const searchResults = users.find(usuario => usuario.username == inputUsername);

        console.log(CryptoJS.MD5(inputPassword));

        if (searchResults) {
            if (searchResults.password == inputPassword) {
                sessionStorage.setItem("user", searchResults.username);
                if (searchResults.type == "adm") {
                    sessionStorage.setItem("type", "adm");
                    window.location = "./panelAdm.html";
                } else if (searchResults.type == "user") {
                    sessionStorage.setItem("type", "user");
                    window.location = "./panelUser.html";
                }
            } else {
                messageBox.innerHTML = "Contraseña incorrecta, vuelva a intentarlo";
            }
        } else {
            messageBox.innerHTML = "Usuario incorrecto, vuelva a intentarlo";
        }

    }, "true");
};