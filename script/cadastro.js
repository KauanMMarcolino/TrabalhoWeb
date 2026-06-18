const btnCadastro =
    document.getElementById("btnCadastro");

const btnLogout =
    document.getElementById("btnLogout");

const modal =
    document.getElementById("modalCadastro");

const areaUsuario =
    document.getElementById("areaUsuario");

btnCadastro.addEventListener("click", () => {

    modal.style.display = "flex";

});

window.addEventListener("click", (e) => {

    if (e.target === modal) {
        modal.style.display = "none";
    }

});

document
    .getElementById("cadastro")
    .addEventListener("submit", function (e) {

        e.preventDefault();
        const email =
            document.getElementById("emailUsuario").value;

        const senha =
            document.getElementById("senhaUsuario").value;

        const nome =
            document.getElementById("nomeUsuario").value;

        const dataNascimento =
            document.getElementById("idadeUsuario").value;

        const hoje = new Date();
        const nascimento = new Date(dataNascimento);


        let idade =
            hoje.getFullYear() - nascimento.getFullYear();

        const mes =
            hoje.getMonth() - nascimento.getMonth();

        if (
            mes < 0 ||
            (mes === 0 &&
                hoje.getDate() < nascimento.getDate())
        ) {
            idade--;
        }


        localStorage.setItem("usuario", nome);
        localStorage.setItem("idade", idade);
        localStorage.setItem("email", email);

        areaUsuario.textContent =
            "Olá, " + nome;

        btnCadastro.style.display =
            "none";

        btnLogout.style.display =
            "block";

        modal.style.display =
            "none";

    });

const usuario =
    localStorage.getItem("usuario");

if (usuario) {

    areaUsuario.textContent =
        "Olá, " + usuario;

    btnCadastro.style.display =
        "none";

    btnLogout.style.display =
        "block";

}

btnLogout.addEventListener("click", () => {

    localStorage.removeItem("usuario");
    localStorage.removeItem("idade");

    areaUsuario.textContent = "";

    btnCadastro.style.display =
        "block";

    btnLogout.style.display =
        "none";

});