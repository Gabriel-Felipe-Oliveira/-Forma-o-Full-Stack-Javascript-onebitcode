module.exports =  class Transferencia {
    constructor(rementente, destinatario, valor) {
        this.rementente = rementente;
        this.destinatario = destinatario;
        this.valor = valor;
        this.dataDeCriacao = new Date();
    }
}