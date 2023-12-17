const Deposito = require('./deposito');
const Emprestimo = require('./emprestimo');
const Transferencia = require('./transferencia');


module.exports = class Conta {
    constructor(dono) {
        this._saldo = 0;
        this.depositos = [];
        this.empréstimos = [];
        this.transferencias = [];
        this.dono = dono;
    }

    get saldo() {
        return this._saldo;
    }

    realizarDepósito(valor) {
        this._saldo += valor;
        const depósito = new Depósito(valor);
        this.depositos.push(depósito);
    }

    realizarEmpréstimo(valor, parcelas) {
        const empréstimo = new Empréstimo(valor, parcelas);
        this._saldo += valor;
        this.empréstimos.push(empréstimo);
    }

    realizarTransferencia(destinatario, valor) {
        const transferencia = new Transferencia(this.dono, destinatario, valor);
        if (destinatario === this.dono) {
            this._saldo += valor;
        } else {
            this._saldo -= valor;
        }
        this.transferencias.push(transferencia);
    }
}