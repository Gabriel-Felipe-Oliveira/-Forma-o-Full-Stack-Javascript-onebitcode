let nomeTurista;
let cidadesVisitadas = [];


nomeTurista = prompt("Qual é o seu nome?");


let resposta = prompt("Você já visitou alguma cidade? (Digite 'sim' ou 'não')").toLowerCase();

while (resposta === 'sim') {
    
    let cidade = prompt("Qual cidade você visitou?");
    cidadesVisitadas.push(cidade);

    
    resposta = prompt("Você visitou mais alguma cidade? (Digite 'sim' ou 'não')").toLowerCase();
}


alert(`Nome do turista: ${nomeTurista}`);
alert(`Número de cidades visitadas: ${cidadesVisitadas.length}`);

if (cidadesVisitadas.length > 0) {
    alert("Cidades visitadas:");
    for (let i = 0; i < cidadesVisitadas.length; i++) {
        alert(`- ${cidadesVisitadas[i]}`);
    }
} else {
    alert("O turista não visitou nenhuma cidade.");
}