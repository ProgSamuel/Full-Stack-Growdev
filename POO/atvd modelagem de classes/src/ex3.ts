// 3. Crie uma classe para implementar uma conta corrente. A classe
// deve possuir os seguintes atributos:
// a. Número da conta
// b. Nome do correntista
// c. Saldo
// Os métodos são os seguintes:
// a) Alterar nome
// b) Deposito
// c) Saque
// No construtor, o saldo é opcional, com valor padrão zero e os
// demais atributos são obrigatórios. A conta não pode ficar com saldo
// negativo.
let id: number = 0
export class cc {
    private 'id': number;
    'name': string;
    'balance': number;
    constructor (name: string, balance ?: number){
        this.name = name;
        this.balance = balance===undefined? 0: balance;
        this.id = id++
    }
    changeName(newname: string): void {
    this.name = newname;
    console.log(`The name was changed to ${this.name}`);
    }
    deposit(valueAdd: number) {
        this.balance += valueAdd;
        console.log(`Your current balance is: ${this.balance}`);
        
    }
    withdraw(valueRemove:number){
        valueRemove > this.balance? console.log(`You don't have enough balance`):
        (this.balance -= valueRemove,
             console.log(`Your new balance is: ${this.balance}`)); 
    }
}