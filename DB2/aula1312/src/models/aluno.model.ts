import { publicDecrypt, randomUUID } from "crypto";

export class Aluno {
public id:string
public idade:number|undefined

    constructor( 
        public nome: string,
        public email:string,
        public senha :string,
         idade?:number,
        ) {
            this.id=randomUUID()
            this.idade=idade
        }
    }

    const daphne = new Aluno('daphne', '123', '@example', 21);