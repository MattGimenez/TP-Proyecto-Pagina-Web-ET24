var users = [
    {
        "username": "adm24",
        "password": "temporalpassword",
        "type": "adm"
    },
    {
        "username": "user24",
        "password": "temporalpassword",
        "type": "user"
    }
];
document.querySelector('.exitButtton').addEventListener("click", hiddeModal, "false");

function hiddeModal() {
    document.querySelector('.modal-loggin').style.setProperty('display', 'none')
    document.querySelector('.textBackground').style.setProperty('visibility', 'unset')
}

// Show login modal
document.querySelector('#login').addEventListener("click", showModal, "false");

function showModal() {
    document.querySelector('.modal-loggin').style.setProperty('display', 'block')
    document.querySelector('.textBackground').style.setProperty('visibility', 'hidden')
}

// Hide login modal
document.querySelector('.exitButtton').addEventListener("click", hiddeModal, "false");
function hiddeModal() {
    document.querySelector('.modal-loggin').style.setProperty('display', 'none')
    document.querySelector('.textBackground').style.setProperty('visibility', 'unset')

}

// Login
document.querySelector("button.button.login").addEventListener("click", (event) => {

    event.preventDefault();
    const inputUsername = document.querySelector("#username").value;
    const inputPassword = document.querySelector("#password").value;
    const messageBox = document.querySelector("#messageLogin");
    const searchResults = users.find( usuario => usuario.username == inputUsername);
    
    if(searchResults){
        if(searchResults.password == inputPassword){
            if(searchResults.type == "adm"){
            window.location="./panelAdm.html";
        }else if(searchResults.type == "user"){
            window.location="./panelUser.html";
        }
        }else{
            messageBox.innerHTML = "Contraseña incorrecta, vuelva a intentarlo";
        }
    }else{
        messageBox.innerHTML = "Usuario incorrecto, vuelva a intentarlo";
    }

}, "true"
);
