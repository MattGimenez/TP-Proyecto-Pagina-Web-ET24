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

    var contenedor = document.querySelector(".materiasContainer");

    subjects.forEach((subject)=>{
        var hours = subject.classHours,
            subjectName = subject.name,
            teacher = subject.prof;
        
        var nodeBackground = document.createElement("div");
        nodeBackground.setAttribute("class", "materiaBackground");
        
        var nodeContainer = document.createElement("div");
        nodeContainer.setAttribute("class", "materiaContainer");
        
        var nodeText = document.createElement("div");
        nodeText.setAttribute("class", "materia-texts");
        
        var nodeH3 = document.createElement("h3");
        nodeH3.setAttribute("class", "name");
        nodeH3.innerHTML = subjectName;
        
        var nodeH6 = document.createElement("h6");
        nodeH6.setAttribute("class", "prof");
        nodeH6.innerHTML = "Profesor a cargo: " + teacher;

        var nodeH6_2 = document.createElement("h6");
        nodeH6_2.setAttribute("classHours", "prof");
        nodeH6_2.innerHTML = "Horas de clase: "+hours;

        contenedor.appendChild(nodeBackground);
        nodeBackground.appendChild(nodeContainer);
        nodeContainer.appendChild(nodeText);
        nodeText.appendChild(nodeH3);
        nodeText.appendChild(nodeH6);
        nodeText.appendChild(nodeH6_2);

    });

};