export class car {
    'consumo': number /* qtd em  L */
    'tanque': number=0

    constructor(consumo: number){
        this.consumo = consumo
    }
    andar(distanciaKm: number): void {
        const consumo = distanciaKm / this.consumo;
        consumo > this.tanque? console.log(`Não possui combustível sufuciente!`):
        (this.tanque -= consumo,
            console.log(`Após a viagem, o tanque terá: ${this.tanque}`)
            )
        
    }
    obterGasolina(){
        console.log(this.tanque);
        
    }
    adicionarGasolina(l:number){
        this.tanque =+ l
        console.log(`O tanque possui ${this.tanque}L`);
    }
}