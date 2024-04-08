async function verificar(numero) {
//variaveis
const number = numero;
const array = await number.split('');


//Multiplicando os numeros
for (i = 1; i < 15; i++) {
let numeroMultiplicado = array[i++] * 2;
if (numeroMultiplicado > 9) numeroMultiplicado = numeroMultiplicado - 9;
array.splice(i, 1);
await array.push(`${numeroMultiplicado}`);
}



//Somando todos os numeros
const sum = await array.reduce((sum, number) => sum + parseInt(number), 0);

//Descobrindo quanto falta para chegar no proximo multiplo de 10
const divisao = sum / 10;
const arredondando = Math.ceil(divisao);
const multiplicando = arredondando * 10;
const diferenca = multiplicando - sum;

// retornando ao usuario

return `${number}${diferenca}`;
}

module.exports = verificar;