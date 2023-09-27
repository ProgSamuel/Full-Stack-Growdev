import {randomUUID} from "node:crypto"
import { user } from "./user";

export class Product {
    private id:string
    constructor(public name:string, public value:number){
        this.id = randomUUID()
    }
    show(){
        console.log(this.name);
    }
    showDetails(){
        console.log(this.name, this.value);
    }
    comment(comment:string, user:user){
        console.log(comment);
    }
}

