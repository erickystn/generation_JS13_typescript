import leitor from "readline-sync";

let numero1: number, numero2: number;

numero1 = leitor.questionInt("Digite o 1o numero: ")
numero2 = leitor.questionInt("Digite o 2o numero: ")

console.log(`${numero1} + ${numero2} = ${numero1+numero2}`);