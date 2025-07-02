function adicionar(){
    let amigo = document.getElementById('nome-amigo');
    let listaDeAmigos = document.getElementById('lista-amigos');

    if(listaDeAmigos.innerText == ''){
        listaDeAmigos.innerText = amigo.value;
        amigo.value = '';
    } else {
        listaDeAmigos.innerText += ', ' + amigo.value;
        amigo.value = '';
    }
}

function sortear(){
    let listaSorteio = document.getElementById('lista-sorteio');
    let amigosProSorteio = document.getElementById('lista-amigos');

    let amigosDivididos = amigosProSorteio.innerText.split(', ');
    let amigosSorteados = amigosDivididos;

    // Cria uma cópia do array para embaralhar
    amigosSorteados = amigosDivididos.slice();

    // Embaralha o array usando Fisher-Yates
    for (let i = amigosSorteados.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [amigosSorteados[i], amigosSorteados[j]] = [amigosSorteados[j], amigosSorteados[i]];
    }

    // Garante que ninguém tire a si mesmo
    let tentativa = 0;
    while (amigosDivididos.some((amigo, idx) => amigo === amigosSorteados[idx]) && tentativa < 100) {
        for (let i = amigosSorteados.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [amigosSorteados[i], amigosSorteados[j]] = [amigosSorteados[j], amigosSorteados[i]];
        }
        tentativa++;
    }

    // Exibe o resultado
    for (let i = 0; i < amigosDivididos.length; i++) {
        let section = document.createElement('section');
        let span = document.createElement('span');
        span.textContent = `${amigosDivididos[i]} -> ${amigosSorteados[i]}`;
        section.appendChild(span);
        listaSorteio.appendChild(section);
    }
}

function reiniciar(){
    let limpaAmigo = document.getElementById('nome-amigo');
    let limpaListaDeAmigos = document.getElementById('lista-amigos');
    let limpaSorteio = document.getElementById('lista-sorteio');

    limpaAmigo.value = '';
    limpaListaDeAmigos.innerText = '';
    limpaSorteio.innerHTML = '';
}