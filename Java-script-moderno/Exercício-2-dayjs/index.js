const dayjs = require('dayjs');

function calcularIdadeEAniversario(dataNascimento) {
  // Converter a string da data de nascimento para um objeto dayjs
  const dataNascObj = dayjs(dataNascimento);

  // Obter a data atual
  const dataAtual = dayjs();

  // Calcular a idade
  const idade = dataAtual.diff(dataNascObj, 'year');

  // Calcular a próxima data de aniversário
  const proximoAniversario = dayjs(dataNascObj).add(idade + 1, 'year');

  // Calcular a diferença em dias para o próximo aniversário
  const diasParaProximoAniversario = proximoAniversario.diff(dataAtual, 'day');

  // Exibir as informações no terminal
  console.log('Idade:', idade);
  console.log('Próximo Aniversário:', proximoAniversario.format('DD/MM/YYYY'));
  console.log('Dias para o Próximo Aniversário:', diasParaProximoAniversario);
}

// Exemplo de uso da função com uma data de nascimento fictícia (formato: "YYYY-MM-DD")
calcularIdadeEAniversario('2000-08-31');