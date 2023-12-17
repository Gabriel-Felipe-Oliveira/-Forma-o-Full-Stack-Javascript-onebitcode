class Character {
    constructor(nome, pontosVida, pontosAtaque, pontosDefesa) {
        this.nome = nome;
        this.pontosVida = pontosVida;
        this.pontosAtaque = pontosAtaque;
        this.pontosDefesa = pontosDefesa;
    }

    atacar(alvo) {
        const dano = this.pontosAtaque - alvo.pontosDefesa;
        alvo.pontosVida -= dano;
        console.log(`${this.nome} atacou ${alvo.nome} causando ${dano} pontos de dano.`);
    }
}

class Thief extends Character {
    constructor(nome, pontosVida, pontosAtaque, pontosDefesa) {
        super(nome, pontosVida, pontosAtaque, pontosDefesa);
    }

    // Sobrescreve o método de ataque para dobrar o dano
    atacar(alvo) {
        const dano = 2 * (this.pontosAtaque - alvo.pontosDefesa);
        alvo.pontosVida -= dano;
        console.log(`${this.nome} atacou furtivamente ${alvo.nome} causando ${dano} pontos de dano.`);
    }
}

// Exemplo de uso

const ladrao = new Thief("Ladrão", 80, 15, 5);

guerreiro.atacar(ladrao); // Saída esperada: Guerreiro atacou Ladrão causando 10 pontos de dano.
ladrao.atacar(guerreiro);

class Mage extends Character {
    constructor(nome, pontosVida, pontosAtaque, pontosDefesa, pontosMagia) {
        super(nome, pontosVida, pontosAtaque, pontosDefesa);
        this.pontosMagia = pontosMagia;
    }

    // Sobrescreve o método de ataque para incluir pontos de magia
    atacar(alvo) {
        const dano = this.pontosAtaque + this.pontosMagia - alvo.pontosDefesa;
        alvo.pontosVida -= dano;
        console.log(`${this.nome} lançou um feitiço em ${alvo.nome} causando ${dano} pontos de dano.`);
    }

    // Método exclusivo para curar o alvo
    curar(alvo) {
        const cura = 2 * this.pontosMagia;
        alvo.pontosVida += cura;
        console.log(`${this.nome} curou ${alvo.nome} em ${cura} pontos de vida.`);
    }
}

class Warrior extends Character {
    constructor(nome, pontosVida, pontosAtaque, pontosDefesa, pontosEscudo) {
        super(nome, pontosVida, pontosAtaque, pontosDefesa);
        this.pontosEscudo = pontosEscudo;
        this.posicao = 'ataque';
    }

    // Sobrescreve o método de ataque para considerar posição e escudo
    atacar(alvo) {
        if (this.posicao === 'ataque') {
            const dano = this.pontosAtaque - alvo.pontosDefesa;
            alvo.pontosVida -= dano;
            console.log(`${this.nome} atacou ${alvo.nome} causando ${dano} pontos de dano.`);
        } else if (this.posicao === 'defesa') {
            const dano = this.pontosAtaque - (alvo.pontosDefesa + this.pontosEscudo);
            alvo.pontosVida -= dano;
            console.log(`${this.nome} atacou ${alvo.nome} em posição defensiva causando ${dano} pontos de dano.`);
        }
    }

    // Método para mudar a posição entre ataque e defesa
    mudarPosicao() {
        this.posicao = (this.posicao === 'ataque') ? 'defesa' : 'ataque';
        console.log(`${this.nome} mudou para a posição ${this.posicao}.`);
    }
}

// Exemplo de uso
const mago = new Mage("Mago", 80, 15, 5, 20);
const guerreiro = new Warrior("Guerreiro", 100, 20, 10, 15);

mago.atacar(guerreiro); // Saída esperada: Mago lançou um feitiço em Guerreiro causando 25 pontos de dano.
guerreiro.atacar(mago); // Saída esperada: Guerreiro atacou Mago causando 15 pontos de dano.

mago.curar(guerreiro); // Saída esperada: Mago curou Guerreiro em 40 pontos de vida.

guerreiro.mudarPosicao(); // Saída esperada: Guerreiro mudou para a posição defesa.

mago.atacar(guerreiro); 