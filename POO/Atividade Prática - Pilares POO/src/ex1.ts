abstract class ticket {
    'value':number = 15

    abstract printValue():void
}

export class normal extends ticket {
    printValue(): void {
        console.log(`The normal ticket price is $${this.value}`);
    }
}

export class vip extends ticket {
    printValue(): void {
       const value = this.value + ((20/100)*this.value);
        console.log(`The VIP ticket price is $${value}`);
    }
}

export class cabin extends ticket {
    printValue(): void {
        const value = this.value + ((60/100)*this.value);
        console.log(`The cabin ticket price is $${value}`);
        
    }
}