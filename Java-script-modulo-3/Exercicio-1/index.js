
        
function escalarJogador() {
            var posicao = document.getElementById("posicao").value;
            var nome = document.getElementById("nome").value;
            var numero = document.getElementById("numero").value;

            var confirmacao = confirm("Deseja confirmar a escalação de " + nome + " com o número " + numero + " na posição de " + posicao + "?");

            if (confirmacao) {
                // Adiciona o jogador à lista
                var listaJogadores = document.getElementById("listaJogadores");
                var jogadorItem = document.createElement("li");
                jogadorItem.textContent = nome + " - Número: " + numero + " - Posição: " + posicao;
                listaJogadores.appendChild(jogadorItem);

                // Limpa os campos de texto
                document.getElementById("posicao").value = "";
                document.getElementById("nome").value = "";
                document.getElementById("numero").value = "";
            }
}






      
function removerJogador() {
    var numeroRemover = document.getElementById("numeroRemover").value;

    var confirmacao = confirm("Deseja confirmar a remoção do jogador com o número " + numeroRemover + "?");

    if (confirmacao) {
        // Remove o jogador da lista
        var listaJogadores = document.getElementById("listaJogadores");
        var itens = listaJogadores.getElementsByTagName("li");

        for (var i = 0; i < itens.length; i++) {
            var jogadorInfo = itens[i].textContent;
            if (jogadorInfo.includes("Número: " + numeroRemover)) {
                listaJogadores.removeChild(itens[i]);
                break;
            }
        }

        // Limpa o campo de textos
        document.getElementById("numeroRemover").value = "";
    }
}
