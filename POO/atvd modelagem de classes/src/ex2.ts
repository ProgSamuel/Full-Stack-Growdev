// 2. Crie uma classe que modele uma bola:
// a. Atributos
// i.Cor
// ii.Circunferência
// iii.Material
// b. Métodos
// i.Trocar Cor
// ii.Mostrar cor

export class ballModeling {
    "color": string;
    'circumference': number;
    'material': string;

    constructor(color: string,circuference:number, material: string){
        this.color = color;
        this.circumference = circuference;
        this.material = material;
    }

    changeColor(newColor:string):void {
        this.color = newColor;
        console.log(`The new color is ${newColor}`);
        

    }
    seeColor():void {
        console.log(`The color is ${this.color}`);
        
    }
}