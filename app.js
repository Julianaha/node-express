import readlineSync from 'readline-sync';

const lista = []

while (true) {
    const entrada = readlineSync.question('Quais propriedades gostaria de armazenar?');
    if (entrada === 'sair') {
      break;
    }
    lista.push(entrada)
}
const listaOrdenada = lista.toString().replace(/[, ]+/g, ' ')
console.log(listaOrdenada.split(" ").sort().join('\n'))