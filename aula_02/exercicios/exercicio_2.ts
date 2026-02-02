// Escreva um programa contendo uma Collection Stack (Pilha) de Objetos string,
//  para organizar a retirada de livros de uma pilha. O programa deverá 
//  ter um Menu que aceitará as opções 0, 1, 2 e 3:
// 1: Adicionar um novo livro na pilha. Deve solicitar o nome do livro.
// 2: Listar todos os livros da Pilha
// 3: Retirar um livro da pilha 
// 0: O programa deve ser finalizado. 
// Caso a pilha esteja vazia, ao tentar retirar um livro da pilha, 
// o programa deverá informar que a pilha está vazia.

import Stack = require("../Stack");
import leitor = require("readline-sync");
const fila = new Stack<string>();
const menu =`
${"*".repeat(50)}
    1 - Adicionar livro na fila.
    2 - Listar todos os Livros
    3 - Retirar Livro da Pilha
    0 - Sair. 
${"*".repeat(50)}
`;

while(true){
    console.clear();
    console.log(menu);
    const opcao = leitor.keyIn(`Digite uma opcao: `,{limit: '0123'});

    if(opcao === "0")break;

    switch (opcao) {
        case "1": 
            fila.push(leitor.question("Digite o nome do livro: "));
            console.log("Livro Adicionado!");
            break;
        case "2":
            console.clear();
            console.log("*** Livros na pilha ***");
            fila.printStack();   
            console.log("*** Fim ***");         
            break;
        case "3":
            fila.pop();
            break;
    
        default: break;
    }
    leitor.question("\n Aperte Enter para continuar... ");

}