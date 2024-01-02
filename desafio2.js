let vitorias = 155
let derrotas = 50
var saldo
var nivel

getSaldo()
getNivel()

console.log(`O Herói tem de saldo de ${saldo} e está no nível de ${nivel}.`)

function getSaldo() {
    saldo = vitorias - derrotas
    return saldo
}

function getNivel() {
    switch (true) {
        case saldo <= 10:
            nivel = "Ferro"
            return nivel
            break;

        case saldo >= 11 && saldo < 20:
            nivel = "Bronze"
            return nivel
            break;


        case saldo >= 21 && saldo < 50:
            nivel = "Prata"
            return nivel
            break;

        case saldo >= 51 && saldo < 80:
            nivel = "Ouro"
            return nivel
            break;

        case saldo >= 81 && saldo < 90:
            nivel = "Diamante"
            return nivel
            break;

        case saldo >= 91 && saldo < 100:
            nivel = "Lendário"
            return nivel
            break;

        default:
            nivel = "Imortal"
            return nivel
            break;
    }
}
