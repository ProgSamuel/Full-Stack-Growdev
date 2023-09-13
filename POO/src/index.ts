console.log("Chegou uhuu")

// Crie uma função que receba 2 números e retorne a média.
let number1 = 2
let number2 = 6

function media (number1:number, number2: number) {
    const media = (number1 + number2)/2 
    console.log("A média é: " + media)
}

media(number1, number2)

// Crie uma função que receba uma nota (número), caso essa nota seja menor que 6, exiba um console dizendo reprovado.
let notaRecebida : number = 3
const meta : number = 6

function taNaMedia (notaRecebida: number, meta: number){
    if (notaRecebida >= meta){
        console.log('Aprovado')
    } else {
        console.log('Reprovado');
        
    }
}

taNaMedia(notaRecebida, meta)

