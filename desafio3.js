class heroi {
    constructor(nome, idade, tipo, ataque) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
        this.ataque = ataque
    }

    atacar() {
        console.log(`O ${this.tipo} ${this.nome} (${this.idade}) atacou usando ${this.ataque}.`)
    }        
}

let mago = new heroi("Joseph", 25, "mago", "magia")
let guerreiro = new heroi("Jack", 23, "guerreiro", "espada")
let monge = new heroi("Gerald", 29, "monge", "artes marciais")
let ninja = new heroi("Carl", 32, "ninja", "shuriken")

mago.atacar()
guerreiro.atacar()
monge.atacar()
ninja.atacar()