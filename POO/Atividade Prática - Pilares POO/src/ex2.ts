class property {
    'address':string
    'price':number

    constructor(address:string, price:number){
        this.address = address,
        this.price = price
    }
}

export class newProperty extends property {
    price:number = this.price + ((25/100)*this.price)

    newPropertyPrice(){
        console.log(`The value of the property is $${this.price}`);
        
    }
}

export class oldProperty extends property {
    price:number = this.price - ((10/100)*this.price)

    oldPropertyPrice(){
        console.log(`The value of the property is $${this.price}`);
        
    }
}