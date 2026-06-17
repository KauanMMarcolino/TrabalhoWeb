const pesquisa = document.getElementById("pesquisa");
const filtroGenero = document.getElementById("filtroGenero");
const filtroNota = document.getElementById("filtroNota");

function filtrarFilmes() {

    const texto = pesquisa.value.toLowerCase();
    const genero = filtroGenero.value;
    const notaMinima = Number(filtroNota.value);

    const filmes = document.querySelectorAll(".filme-card");

    filmes.forEach(filme => {

        const nome = filme.dataset.nome.toLowerCase();
        const generoFilme = filme.dataset.genero;
        const notaFilme = Number(filme.dataset.nota);

        const passaPesquisa =
            nome.includes(texto);

        const passaGenero =
            genero === "todos" ||
            generoFilme === genero;

        const passaNota =
            notaFilme >= notaMinima;

        if (
            passaPesquisa &&
            passaGenero &&
            passaNota
        ) {
            filme.style.display = "";
        } else {
            filme.style.display = "none";
        }

    });

}

pesquisa.addEventListener("keyup", filtrarFilmes);
filtroGenero.addEventListener("change", filtrarFilmes);
filtroNota.addEventListener("change", filtrarFilmes);