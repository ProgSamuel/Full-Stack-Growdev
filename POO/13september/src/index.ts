// console.log('oi aqui');

// 1. Crie uma função que receba 2 números e retorne um objeto
// contendo a média e também um indicador booleano de
// aprovado/reprovado. Considere aprovado com média >= 6.

let numero1: number = 5
let numero2: number = 5

interface resultado {
  media: number
  resultado: boolean
}

function soma(numero1: number, numero2: number):{media:number; aprovado:boolean} {
  let media: number = (numero1 + numero2) / 2
  const aprovado = media >=6
  return { media, aprovado}
}

const resultado1 = soma(numero1, numero2)
console.log('Questão 1');

// 2. Crie uma função que receba uma lista de objetos contendo nota e
// peso, realize a média das notas considerando o peso. Exemplos:
// Lista com 2 notas: (N1*P1) + (N2*P2) / 2 = Resultado
// Lista com 3 notas: (N1*P1) + (N2*P2) + (N3*P3) / 3 = Resultado

interface notasEPeso {
    nota: number;
    peso: number;
}

const notas:notasEPeso[] = [
    {nota:1 , peso:4 },
    {nota:2 , peso:2 },
    {nota:3 , peso:5 }
]


function calcularMediaNota (lista:notasEPeso[]) : number{

    let somaItem = 0

    for ( const item of lista) {
       somaItem =+ (item.nota * item.peso)
    }

    console.log( somaItem)
    const media = somaItem / lista.length
    
    return media
}


const resultado:number = calcularMediaNota(notas)
console.log(`Questão 2: A média é => ${resultado}`);


// 3. Crie um programa que simule uma carteira de dinheiro. Este
// programa vai precisar ter uma carteira contendo saldo, transações
// de entrada e saídas. Ou seja, será um objeto com estas
// propriedades. Depois crie uma função para lançar uma entrada e
// uma saída. Caso ao lançar uma saída e não tiver saldo, precisa dar
// um erro ou avisar.

// const carteira =  {
//     saldo: numbe
// }