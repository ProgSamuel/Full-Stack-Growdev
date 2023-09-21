// 4. Crie uma classe para representar uma Calculadora. Esta classe
// deve conter um atributo que servirá para armazenar o histórico das
// operações e seus respectivos resultados.
// a. Esta classe deve conter as operações de somar, multiplicar,
// dividir e diminuir.
// b. Esta classe deve iniciar com o histórico vazio
// c. Esta classe deve conter uma ação para visualizar o histórico.

// let historic = []

export class calculator {
'historic': string[] = [];
constructor(){

}

add(value1:number, value2:number) :void{
    const operation = `${value1} + ${value2}`;
    const result = value1 + value2
    this.historic.push(`{${operation} = ${result}}`)
    console.log(`The result is ${result}`); 
}
subtraction(value1:number, value2:number):void{
    const operation = `${value1} - ${value2}`;
    const result = value1 - value2
    this.historic.push(`{${operation} = ${result}}`)
    console.log(`The result is ${result}`); 
}
multiplication(value1:number, value2:number):void{
    const operation = `${value1} * ${value2}`;
    const result = value1 * value2
    this.historic.push(`{${operation} = ${result}}`)
    console.log(`The result is ${result}`); 
}
division(value1:number, value2:number):void{
    const operation = `${value1} / ${value2}`;
    const result = value1 / value2
    this.historic.push(`{${operation} = ${result}}`)
    console.log(`The result is ${result}`); 
}
viewHistoric():void{
   return console.log(`${this.historic}`);
}
}