// 1. Crie uma classe Contador, que encapsule um valor usado para
// contagem de itens ou eventos. A classe deve oferecer métodos que
// devem:
// a) Zerar;
// b) Incrementar;
// c) Retornar o valor do contador

export class contador {
    private "contador" : number

    constructor (contador: number) {
     this.contador = contador
    }

    zerar(){
         this.contador = 0
         console.log(this.contador);
         
    }

    incrementar (){
         this.contador++
         console.log(this.contador);

    }
    valor(){
        this.contador
        console.log(this.contador);
    }
}

