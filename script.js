document.addEventListener('DOMContentLoaded', function() {
    // Pergunta ao usuário
    let resposta = "";
    do {
        resposta = prompt("Quem é o amor da sua vida? Digite o primeiro nome");

        if (resposta === null || resposta.trim() === "") {
            alert("Você precisa responder. Tente novamente!");
            resposta = "";  // Reinicia para repetir a pergunta
        }

    } while (resposta.toLocaleLowerCase() !== 'Arthur'.toLowerCase());

    if(resposta.toLocaleLowerCase() == 'Arthur'.toLowerCase()) {
        document.querySelector(".content").style.display = "flex";
    }
});