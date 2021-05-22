document.querySelector('.exitButtton').addEventListener("click", hiddeModal, "false");

function hiddeModal() {
    document.querySelector('.modal-loggin').style.setProperty('display', 'none')
    document.querySelector('.textBackground').style.setProperty('visibility', 'unset')
}

document.querySelector('#login').addEventListener("click", showModal, "false");

function showModal() {
    document.querySelector('.modal-loggin').style.setProperty('display', 'block')
    document.querySelector('.textBackground').style.setProperty('visibility', 'hidden')
}

document.querySelector('.button').addEventListener("click", () => { location.reload() }, "false");