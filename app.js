import readlineSync from 'readline-sync';

const lista = []

while (true) {
    const input = readlineSync.question('Quais propriedades gostaria de armazenar?');
    if (input === 'SAIR') {
      break;
    }
    lista.push(input)
}
const listaOrdenada = lista.toString().replace(/[, ]+/g, ' ')
console.log(listaOrdenada.split(" ").sort().join('\n'))