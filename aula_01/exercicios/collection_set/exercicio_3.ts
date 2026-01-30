// Escreva um programa para criar uma Collection Set do tipo number.
//  O programa deverá solicitar ao usuário, que ele digite via 
//  teclado 10 valores inteiros não repetidos e adicione-os 
//  individualmente na Collection Set. Em seguida, faça o que se pede:
// Mostre na tela todos os elementos da Collection Set. 


import leitor = require("readline-sync");

const listaSet: Set<number> = new Set<number>();

for (let i = 1; i <= 10; i++) {
    listaSet.add(leitor.questionInt(`Digite ${i}o valor inteiro (nao repetido): `));
}
console.log("Listar dados do Set");
listaSet.forEach(v => console.log(v) );