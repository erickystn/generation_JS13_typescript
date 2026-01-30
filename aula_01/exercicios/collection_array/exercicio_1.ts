// Escreva um programa para criar uma Collection Array de Objetos do tipo string.
// programa deverá solir ao usuário, que ele digite via teclado 5 cores e deverá
// adicioná-las individualmente no Array. Em seguida, faça o que se pede:
// Mostre na tela todas as cores adicionadas.
// Mostre na tela todas as cores adicionadas, ordenadas em ordem crescente.

// Veja o exemplo abaixo:
import leitor = require("readline-sync");

const cores: Array<string> = new Array<string>(5).fill("");

cores.forEach((_, index, arr) => {
  arr[index] = leitor.question(`Digite ${index + 1}a cor: `);
});

const coresOrdenadas = cores.toSorted();
console.log("Listar todas as cores: ");
cores.forEach((v) => console.log(v));
console.log("\n Ordenar cores: ");
coresOrdenadas.forEach((v) => console.log(v));
