import {randomUUID} from "node:crypto"

export class user {
    private id:string
    constructor(public name:string, public username:string, public email:string){
        this.id = randomUUID()
    }

    addToCart(){
        console.log();
    }
    removeFromCart(){
        console.log();
    }
    showProducts(){
        console.log();
    }
}