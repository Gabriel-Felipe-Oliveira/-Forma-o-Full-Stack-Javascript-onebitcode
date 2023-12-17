const Usuario = require('./usuario');
const Conta = require('./conta');
const Deposito = require('./deposito');
const Transferencia = require('./transferencia');
const Emprestimo = require('./emprestimo');
const Parcela = require('./parcela');



module.exports = class Aplicativo {
    static usuários = [];

    static criarUsuário(nomeCompleto, email) {
        if (Aplicativo.encontrarUsuárioPorEmail(email)) {
            console.log('Email já está em uso. Não é possível criar usuário.');
            return null;
        }

        const usuário = new Usuário(nomeCompleto, email);
        Aplicativo.usuários.push(usuário);
        return usuário;
    }

    static encontrarUsuárioPorEmail(email) {
        return Aplicativo.usuários.find(usuário => usuário.email === email);
    }

    static realizarDepósito(emailUsuário, valor) {
        const usuário = Aplicativo.encontrarUsuárioPorEmail(emailUsuário);
        if (usuário) {
            usuário.conta.realizarDepósito(valor);
        } else {
            console.log('Usuário não encontrado.');
        }
    }

    static realizarTransferência(emailRemetente, emailDestinatario, valor) {
        const remetente = Aplicativo.encontrarUsuárioPorEmail(emailRemetente);
        const destinatario = Aplicativo.encontrarUsuárioPorEmail(emailDestinatario);

        if (remetente && destinatario) {
            remetente.conta.realizarTransferencia(destinatario, valor);
        } else {
            console.log('Remetente ou destinatário não encontrado.');
        }
    }

    static realizarEmpréstimo(emailUsuário, valor, parcelas) {
        const usuário = Aplicativo.encontrarUsuárioPorEmail(emailUsuário);
        if (usuário) {
            usuário.conta.realizarEmpréstimo(valor, parcelas);
        } else {
            console.log('Usuário não encontrado.');
        }
    }

    static definirTaxaDeJurosDoEmpréstimo(taxa) {
        Empréstimo.definirTaxaDeJuros(taxa);
    }
}