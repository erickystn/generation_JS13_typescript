// Escreva um programa contendo uma Collection Queue (Fila) de Objetos do
//  tipo string, para organizar uma fila por ordem de chegada dos Clientes de um Banco.
//   O programa deverá ter um Menu que aceitará as opções 0, 1, 2 e 3:
// 1: Adicionar um novo Cliente na fila. Deve solicitar o nome do Cliente.
// 2: Listar todos os Clientes na fila
// 3: Chamar (retirar) uma pessoa da fila 
// 0: O programa deve ser finalizado. 
// Caso a fila esteja vazia, o programa deverá informar que a fila está vazia ao tentar retirar (chamar) um cliente da fila.
import Queue from "../Queue";
import leitor from "readline-sync";
const fila = new Queue<string>();
const menu =`
${"*".repeat(50)}
    1 - Adicionar um novo Cliente na fila.
    2 - Listar todos os Clientes na fila
    3 - Chamar (retirar) uma pessoa da fila 
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
            fila.enqueue(leitor.question("Digite o nome do cliente: "));
            console.log("Cliente Adicionado!");
            break;
        case "2":
            console.clear();
            console.log("*** Clientes na Fila ***");
            fila.printQueue();   
            console.log("*** Fim ***");         
            break;
        case "3":
             fila.dequeue();
            break;
    
        default: break;
    }
    leitor.question("\n Aperte Enter para continuar... ");

}