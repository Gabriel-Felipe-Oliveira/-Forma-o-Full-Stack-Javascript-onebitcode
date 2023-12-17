const Conta = require('./conta');

module.exports = class Usuário {
    constructor(nomeCompleto, email) {
        this.nomeCompleto = nomeCompleto;
        this.email = email;
        this.conta = new Conta(this);
    }
}