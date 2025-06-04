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
}

function reiniciar(){
    let limpaAmigo = document.getElementById('nome-amigo');
    let limpaListaDeAmigos = document.getElementById('lista-amigos');

    limpaAmigo.value = '';
    limpaListaDeAmigos.innerText = '';
}