// index.js
const Aplicativo = require('./entites/aplicativo');

// Exemplo de uso
const usuario1 = Aplicativo.criarUsuario('João Silva', 'joao@example.com');
const usuario2 = Aplicativo.criarUsuario('Maria Oliveira', 'maria@example.com');

Aplicativo.realizarDeposito('joao@example.com', 1000);
Aplicativo.realizarTransferencia('joao@example.com', 'maria@example.com', 500);
Aplicativo.realizarEmprestimo('maria@example.com', 2000, 12);

console.log(usuario1.conta.saldo);  // Saída esperada: 500
console.log(usuario2.conta.saldo);  // Saída esperada: 1500