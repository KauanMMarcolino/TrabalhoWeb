document.getElementById("formulario")
.addEventListener("submit", function(event){

    event.preventDefault();

    let nome =
    document.getElementById("nome").value;

    let email =
    document.getElementById("email").value;

    let idade =
    document.getElementById("idade").value;

    if(idade){
        idade = new Date(idade)
        .toLocaleDateString("pt-BR");
    }

    let filme =
    document.getElementById("filme").value;

    let genero =
    document.getElementById("genero").value;

    let telefone =
    document.getElementById("telefone").value;

    let tipoContato =
    document.getElementById("tipoContato").value;

    let mensagem =
    document.getElementById("mensagem").value;

    const contato = {

        nome,
        email,
        idade,
        filme,
        genero,
        telefone,
        tipoContato,
        mensagem

    };

    let contatos =
    JSON.parse(
        localStorage.getItem("contatos")
    ) || [];

    contatos.push(contato);

    localStorage.setItem(
        "contatos",
        JSON.stringify(contatos)
    );

    document.getElementById("resultado").innerHTML =
    "<h2>Dados enviados:</h2><br>" +
    "Nome: " + nome + "<br>" +
    "Email: " + email + "<br>" +
    "Data de nascimento: " + idade + "<br>" +
    "Filme favorito: " + filme + "<br>" +
    "Gênero preferido: " + genero + "<br>" +
    "Telefone: " + telefone + "<br>" +
    "Tipo de contato: " + tipoContato + "<br>" +
    "Mensagem: " + mensagem;

});