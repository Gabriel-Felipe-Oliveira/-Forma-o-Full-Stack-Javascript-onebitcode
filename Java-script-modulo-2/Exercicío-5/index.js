let vagas = [];

function  menu() {
 let escolha = prompt("\n=== Sistema de Vagas de Emprego ==="+
  "\n1. Listar vagas disponíveis"+
  "\n2. Criar uma nova vaga"+
  "\n3. Visualizar uma vaga"+
  "\n4. Inscrever um candidato em uma vaga"+
  "\n5. Excluir uma vaga"+
  "\n6. Sair");
  return escolha
}

function listarVagas() {
  alert("\nLista de Vagas Disponíveis:");
  vagas.forEach((vaga, index) => {
    alert(`${index}. ${vaga.nome} - ${vaga.descricao} - ${vaga.candidatos.length} candidatos`);
  });
}

function criarVaga() {
  alert("\nCriar uma Nova Vaga:");
  const nome = prompt("Nome da vaga: ");
  const descricao = prompt("Descrição da vaga: ");
  const dataLimite = prompt("Data limite da vaga: ");
  const confirmacao = confirm(`Confirme as informações:\nNome: ${nome}\nDescrição: ${descricao}\nData Limite: ${dataLimite}`);

  if (confirmacao) {
    vagas.push({
      nome,
      descricao,
      dataLimite,
      candidatos: []
    });
    alert("Vaga criada com sucesso!");
  } else {
    alert("Operação cancelada.");
  }
}

function visualizarVaga() {
  alert("\nVisualizar uma Vaga:");
  const index = prompt("Digite o índice da vaga: ");
  const vaga = vagas[index];

  if (vaga) {
    alert(`\nInformações da Vaga ${index}:`);
    alert(`Nome: ${vaga.nome}`);
    alert(`Descrição: ${vaga.descricao}`);
    alert(`Data Limite: ${vaga.dataLimite}`);
    alert(`Candidatos: ${vaga.candidatos.length}`);
    if (vaga.candidatos.length > 0) {
      alert("Lista de Candidatos:");
      vaga.candidatos.forEach((candidato, index) => {
        alert(`${index}. ${candidato}`);
      });
    }
  } else {
    alert("Vaga não encontrada.");
  }
}

function inscreverCandidato() {
 alert("\nInscrever um Candidato em uma Vaga:");
  const nomeCandidato = prompt("Nome do candidato: ");
  const indexVaga = prompt("Índice da vaga: ");
  const vaga = vagas[indexVaga];

  if (vaga) {
    const confirmacao = confirm(`Confirme as informações:\nNome do Candidato: ${nomeCandidato}\nVaga: ${vaga.nome}`);
    
    if (confirmacao) {
      vaga.candidatos.push(nomeCandidato);
     alert("Candidato inscrito com sucesso!");
    } else {
     alert("Operação cancelada.");
    }
  } else {
   alert("Vaga não encontrada.");
  }
}

function excluirVaga() {
  alert("\nExcluir uma Vaga:");
  const index = prompt("Digite o índice da vaga: ");
  const vaga = vagas[index];

  if (vaga) {
    alert(`\nInformações da Vaga ${index}:`);
    alert(`Nome: ${vaga.nome}`);
    alert(`Descrição: ${vaga.descricao}`);
    alert(`Data Limite: ${vaga.dataLimite}`);
    alert(`Candidatos: ${vaga.candidatos.length}`);

    const confirmacao = confirm("Tem certeza que deseja excluir esta vaga?");

    if (confirmacao) {
      vagas.splice(index, 1);
      alert("Vaga excluída com sucesso!");
    } else {
      alert("Operação cancelada.");
    }
  } else {
    alert("Vaga não encontrada.");
  }
}

do {
  
  let opcao = menu();

  switch (opcao) {
    case "1":
      listarVagas();
      break;
    case "2":
      criarVaga();
      break;
    case "3":
      visualizarVaga();
      break;
    case "4":
      inscreverCandidato();
      break;
    case "5":
      excluirVaga();
      break;
    case "6":
      alert("Saindo do programa. Até logo!");
      break;
    default:
      alert("Opção inválida. Tente novamente.");
  }
} while (opcao !== "6");