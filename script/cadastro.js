const btnCadastro =
document.getElementById("btnCadastro");

const modal =
document.getElementById("modalCadastro");

btnCadastro.addEventListener("click", () => {

    modal.style.display = "flex";

});

window.addEventListener("click", (e)=>{

    if(e.target === modal){
        modal.style.display = "none";
    }

});

document
.getElementById("cadastro")
.addEventListener("submit", function(e){

    e.preventDefault();

    const nome =
    document.getElementById("nomeUsuario").value;

    localStorage.setItem("usuario", nome);

    document.getElementById("areaUsuario")
    .textContent = "Olá, " + nome;

    modal.style.display = "none";

});

const usuario =
localStorage.getItem("usuario");

if(usuario){

    document.getElementById("areaUsuario")
    .textContent = "Olá, " + usuario;

}