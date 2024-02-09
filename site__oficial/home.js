let  btn_mat = document.getElementById("btn_mat")
let area_matricula = document.getElementById("matricula")
let header = document.getElementById("header")
let section = document.getElementById("section")

btn_mat.addEventListener("click", matricule_se)


function matricule_se() {
    area_matricula.style.display = "block"

    section.style.filter = "blur(4px)"
    header.style.filter = "blur(4px)"

    section.style.pointerEvents = "none"
    header.style.pointerEvents = "none"
}

let btn_sair_matricula = document.getElementById("btn_sair_matricula")

btn_sair_matricula.addEventListener("click", sair_matricula)

function sair_matricula() {
    area_matricula.style.display= "none"

    section.style.filter = "none"
    header.style.filter = "none"

    section.style.pointerEvents =  "none"
    header.style.pointerEvents = "none"
}