function calcularNivel(vitorias) {
    if (vitorias < 10) {
        return 'Ferro';
    } else if (vitorias <= 20) {
        return 'Bronze';
    } else if (vitorias <= 50) {
        return 'Prata';
    } else if (vitorias <= 80) {
        return 'Ouro';
    } else if (vitorias <= 90) {
        return 'Diamante';
    } else if (vitorias <= 100) {
        return 'Lendário';
    } else {
        return 'Imortal';
    }
}

function calcularSaldo(vitorias, derrotas) {
    return vitorias - derrotas;
}

// Exemplo de uso
const vitorias = parseInt(prompt("Digite o número de vitórias:"));
const derrotas = parseInt(prompt("Digite o número de derrotas:"));

const saldoVitorias = calcularSaldo(vitorias, derrotas);
const nivel = calcularNivel(vitorias);

console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`);
