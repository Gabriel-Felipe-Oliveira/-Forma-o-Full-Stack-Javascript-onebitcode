const Parcela = require('./parcela');

module.exports = class Empréstimo {
    static taxaDeJuros = 0.0;

    constructor(valor, parcelas) {
        this.valor = valor;
        this.dataDeCriacao = new Date();
        this.parcelas = Array.from({ length: parcelas }, (_, i) => new Parcela(valor / parcelas, i + 1));
    }

    static definirTaxaDeJuros(taxa) {
        Empréstimo.taxaDeJuros = taxa;
    }
}