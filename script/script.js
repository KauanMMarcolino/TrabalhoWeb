document.getElementById("formulario").addEventListener("submit", function(event){

    event.preventDefault();
    
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let idade = document.getElementById("idade").value;
    let filme = document.getElementById("filme").value;
    let genero = document.getElementById("genero").value;
    
    document.getElementById("resultado").innerHTML =
    "Nome: " + nome + "<br>" +
    "Email: " + email + "<br>" +
    "Idade: " + idade + "<br>" +
    "Filme favorito: " + filme + "<br>" +
    "Gênero preferido: " + genero;
    
    });