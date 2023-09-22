export class BombaCombustivel {
    tipoCombustivel: string
    valorLitro: number = 5.5
    quantidadeCombustivel: number

    constructor(tipoCombustivel: string, quantidadeCombustivel: number){
        this.tipoCombustivel = tipoCombustivel
        this.quantidadeCombustivel = quantidadeCombustivel
    }

    abastecerPorValor(valorAAbastecer: number){
        const l = valorAAbastecer / this.valorLitro
        this.quantidadeCombustivel -= l
        l > this.quantidadeCombustivel? console.log(`Combustível insuficiente: ${(l).toFixed(1)}`):
        console.log(`Foi abastecido com ${(l).toFixed(1)}L, no valor de ${valorAAbastecer}. Resta na bomba ${(this.quantidadeCombustivel).toFixed(1)}L`);
    }
    abastecerPorLitro(qtdLitro:number){
        qtdLitro > this.quantidadeCombustivel ? console.log(`Combustível insuficiente: ${qtdLitro}`):
        (this.quantidadeCombustivel -= qtdLitro,
        console.log(`Foi abastecido com ${qtdLitro}L. Resta na bomba ${this.quantidadeCombustivel}L`));
    }
    alterarValor(newValue:number){
        this.valorLitro = newValue
        console.log(`O combustíve agora custa: R$${newValue} o litro`);
        
    }
    alterarCombustivel(novoCombustivel:string){
        this.tipoCombustivel = novoCombustivel
        console.log(`Agora o combustível é o ${novoCombustivel}`);
        
    }
    alterarQuantidadeCombustivel(novaqtdComb:number){
        this.quantidadeCombustivel = novaqtdComb
        console.log(`A bomba possui ${novaqtdComb}L de combustível`);
        
    }
}