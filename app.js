let amigos = [];


function inserirAmigo() {
    let addNome = document.querySelector("input");
    if (addNome.value === "") {
        alert("insira um nome valido!");
    } else {
        amigos.push(addNome.value);
    };
    inserirNome.value = "";
    atualizarListaAmigos();
};


function atualizarListaAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}


function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Não há amigos para sortear');
        return;
    }
    let numeroDoAmigo = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[numeroDoAmigo];
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `${amigoSorteado}`;

    amigos.splice(numeroDoAmigo, 1);
    atualizarListaAmigos()
}  

