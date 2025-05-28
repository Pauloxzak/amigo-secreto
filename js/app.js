function adicionar(){
    let amigo = document.getElementById('nome-amigo');
    let listaDeAmigos = document.getElementById('lista-amigos');

    let nomes = [];
    nomes.push(amigo.value);
    nomes.join(", ");
    listaDeAmigos.innerText += nomes;
}

function sortear(){

}

function reiniciar(){

}