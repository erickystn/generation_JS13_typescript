// Escreva um programa para criar uma Collection Array do tipo number,
//  inicializada com 10 valores inteiros. O programa deverá solicitar
//   ao usuário, que ele digite via teclado 1 número inteiro e caso
//   ele seja encontrado no Array, exiba na tela a posição deste
//    número na Collection. Caso o número não seja encontrado,
//    o programa deverá exibir na tela a mensagem: O número NN não foi encontrado!

import leitor = require("readline-sync");

const vetor: Array<number> = new Array<number>(2, 5, 1, 3, 4, 9, 7, 8, 10, 6);

const valorBuscado: number = leitor.questionInt("Insira um numero inteiro para pesquisar: ");
const encontrado: number = vetor.indexOf(valorBuscado);


if(encontrado === -1){
    console.log(`O número ${valorBuscado} não foi encontrado!`)
}else{
    console.log(`O número 7 está localizado na posição: ${encontrado}`)
}