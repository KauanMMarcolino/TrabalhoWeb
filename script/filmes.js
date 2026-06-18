document
.querySelectorAll(".filme-card")
.forEach(card => {

    card.addEventListener("click", function(e){

        e.preventDefault();

        const usuario =
        localStorage.getItem("usuario");

        if(!usuario){

            alert(
                "Você precisa estar cadastrado para assistir aos trailers."
            );

            return;
        }

        const idadeUsuario =
        Number(localStorage.getItem("idade"));

        const idadeMinima =
        Number(card.dataset.idade);

        if(idadeUsuario < idadeMinima){

            alert(
                "Este filme é para maiores de "
                + idadeMinima +
                " anos."
            );

            return;
        }

        document.getElementById("tituloFilme")
        .textContent = card.dataset.nome;

        document.getElementById("notaFilme")
        .textContent =
        "⭐ " + card.dataset.nota + "/10";

        document.getElementById("idadeFilme")
        .textContent =
        "Classificação: " + card.dataset.idade;

        document.getElementById("sinopseFilme")
        .textContent =
        card.dataset.sinopse;

        document.getElementById("btnTrailer")
        .href = card.href;

        document.getElementById("btnFilme")
        .href = card.href;

        document.getElementById("painelFilme")
        .classList.add("ativo");

    });

});

document
.getElementById("fecharPainel")
.addEventListener("click", () => {

    document
    .getElementById("painelFilme")
    .classList.remove("ativo");

});