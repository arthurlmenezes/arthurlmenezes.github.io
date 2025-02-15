document.addEventListener('DOMContentLoaded', function() {
    // Pergunta ao usuário
    let resposta = "";
    do {
        resposta = prompt("Quem é o amor da sua vida? Digite o primeiro nome");

    } while (resposta.toLocaleLowerCase() != 'Arthur'.toLowerCase());
});