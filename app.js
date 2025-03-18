//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();
    //ALERTA DE NOME INVÁLIDO  
    if (nome === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }
    //ALERTS DE NOME DUPLICADO
    if (amigos.includes(nome)) {
        alert("Este nome já foi adicionado.");
        return;
    }
    //AGREGAR AMIGOS NO CAMPO DE AMIGOS  
    amigos.push(nome);
    atualizarLista();
    input.value = "";
}
//FUNÇAO PARA ATUALIZAR A LISTA NA INTERFACE
function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach(nome => {
        const li = document.createElement("li");
        li.textContent = nome;
        lista.appendChild(li);
    });
}
//FUNÇÃO SORTEAR AMIGOS
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos dois amigos para sortear.");
        return;
    }
    //GEGAR UM INDICE ALEATÓRIO
    const indiceSorteado = Math.floor(Math.random() * amigos.length);//GERAR UM NÚMERO ALEATÓRIO
    const amigoSorteado = amigos[indiceSorteado];//OBTER O NOME SORTEADO

    //MOSTRAR O RESULTADO EM HTML
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>O amigo secreto sorteado é: <strong>${amigoSorteado}</strong></li>`;
}


