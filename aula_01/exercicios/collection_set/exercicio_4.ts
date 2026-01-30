// Escreva um programa para criar uma Collection Set do tipo number,
// inicializada com 10 valores inteiros. O programa deverá solicitar
//  ao usuário, que ele digite via teclado 1 número inteiro e caso
//  ele seja encontrado na Collection Set, exiba na tela a mensagem:
//  O Número NN foi encontrado! Caso o número não seja encontrado,
//  o programa deverá exibir na tela a mensagem: O número NN não foi encontrado!

import leitor = require("readline-sync");

const listaSet: Set<number> = new Set<number>([2, 5, 1, 3, 4, 9, 7, 8, 10, 6]);

const valorBuscado: number = leitor.questionInt(`Digite o valor a ser buscado: `);

if(!listaSet.has(valorBuscado)){
    console.log(`O número ${valorBuscado} não foi encontrado!`)
}else{
    console.log(`O número ${valorBuscado} foi encontrado!`)
}