document.addEventListener('DOMContentLoaded', function() {
    // Pergunta ao usuário
    let resposta = "";
    do {
        document.querySelector(".content").style.display = "none";
        resposta = prompt("Quem é o amor da sua vida? Digite o primeiro nome");

        if (resposta === null || resposta.trim() === "") {
            alert("Você precisa responder. Tente novamente!");
            resposta = "";  // Reinicia para repetir a pergunta
        }

    } while (resposta.toLocaleLowerCase().trim() !== 'Arthur'.toLowerCase());

    if(resposta.toLocaleLowerCase().trim() == 'Arthur'.toLowerCase()) {
        document.querySelector(".content").style.display = "flex";
    }
});