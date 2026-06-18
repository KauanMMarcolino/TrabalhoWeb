let carrinho = [];

const lista =
document.getElementById("listaCarrinho");

const total =
document.getElementById("totalCarrinho");

document
.querySelectorAll(".btnCarrinho")
.forEach(botao => {

    botao.addEventListener("click", () => {

        const usuario =
        localStorage.getItem("usuario");

        if(!usuario){
            alert("Faça login para comprar.");
            return;
        }

        const card =
        botao.parentElement;

        const produto =
        card.dataset.produto;

        const preco =
        Number(card.dataset.preco);

        carrinho.push({
            produto,
            preco
        });

        atualizarCarrinho();
    });

});

function atualizarCarrinho(){

    lista.innerHTML = "";

    let soma = 0;

    carrinho.forEach(item => {

        lista.innerHTML +=
        `<li>${item.produto} - R$ ${item.preco}</li>`;

        soma += item.preco;

    });

    total.textContent =
    soma.toFixed(2);

    localStorage.setItem(
        "carrinho",
        JSON.stringify(carrinho)
    );

}

const carrinhoSalvo =
JSON.parse(
    localStorage.getItem("carrinho")
) || [];

carrinho = carrinhoSalvo;

atualizarCarrinho();

document
.getElementById("btnFinalizar")
.addEventListener("click", () => {

    const usuario =
    localStorage.getItem("usuario");

    if(!usuario){
        alert("Faça login para finalizar a compra.");
        return;
    }

    if(carrinho.length === 0){
        alert("Seu carrinho está vazio.");
        return;
    }

    let mensagem =
    "🎟️ RESUMO DA COMPRA\n\n";

    let totalCompra = 0;

    carrinho.forEach(item => {

        mensagem +=
        item.produto +
        " - R$ " +
        item.preco.toFixed(2) +
        "\n";

        totalCompra += item.preco;

    });

    mensagem +=
    "\n💰 Total: R$ " +
    totalCompra.toFixed(2);

    alert(mensagem);

    carrinho = [];

    localStorage.removeItem("carrinho");

    atualizarCarrinho();

});