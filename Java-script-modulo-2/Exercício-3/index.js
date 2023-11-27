const imoveis = [
  { proprietario: "gabriel", quartos: 4, banheiro: 2, garagem: 1 }
];

let opcao = "";

do {
  opcao = prompt(
    "Imoveis cadastrados: " + imoveis.length +
    "\n1. Salvar um imovel \n2. Mostrar imoveis salvos \n3. Sair"
  );

  switch (opcao) {
    case "1":

      let novoProprietario = prompt("Nome do proprietário:")
      let novoQuartos = parseInt(prompt("Número de quartos:"))
      let novoBanheiro = parseInt(prompt("Número de banheiros:"))
      let novaGaragem = parseInt(prompt("Número de vagas de garagem:"))

     
      let novoImovel = {
        proprietario: novoProprietario,
        quartos: novoQuartos,
        banheiro: novoBanheiro,
        garagem: novaGaragem
      };

      
      imoveis.push(novoImovel);
      alert("Imóvel salvo com sucesso!");

      break;
    case "2":
      // Código para mostrar os imóveis salvos
      let lista = "";
      for (let i = 0; i < imoveis.length; i++) {
        lista += `Proprietário: ${imoveis[i].proprietario}, Quartos: ${imoveis[i].quartos}, Banheiros: ${imoveis[i].banheiro}, Garagem: ${imoveis[i].garagem}\n`;
      }
      alert(lista);
      break;
    case "3":
      alert("Saindo...");
      break;
    default:
      alert("Opção inválida!");
  }

} while (opcao !== "3");


