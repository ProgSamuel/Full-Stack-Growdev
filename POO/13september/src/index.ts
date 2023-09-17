
// 1. Crie uma função que receba 2 números e retorne um objeto
// contendo a média e também um indicador booleano de
// aprovado/reprovado. Considere aprovado com média >= 6.
console.log();

import { Console, log } from "console";
import { validateHeaderValue } from "http";

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

console.log();

// 3. Crie um programa que simule uma carteira de dinheiro. Este
// programa vai precisar ter uma carteira contendo saldo, transações
// de entrada e saídas. Ou seja, será um objeto com estas
// propriedades. Depois crie uma função para lançar uma entrada e
// uma saída. Caso ao lançar uma saída e não tiver saldo, precisa dar
// um erro ou avisar.

// criar objeto contendo : saldo, transações,
// lançar saída
// verificar saída 


class carteira {
  "saldo" : number;
  "transacoes" : number;
  
  constructor(saldo = 0 , transacoes = 0) {
    this.saldo = saldo,
    this.transacoes = transacoes;

    // const result = saldo + transacoes;
    // console.log(result);
    
  }
  
  verificarSaldo():void {
      let resultado = this.saldo += this.transacoes;

      if(this.transacoes > 0) {
        console.log(`Questão 3: A sua entrada foi de ${this.transacoes}$ e o seu saldo atual é de: ${resultado}$`);
      } else{
        console.log(`Questão 3: A sua saída foi de ${this.transacoes}$ e o seu saldo atual é de: ${resultado}$`);
      }
    
  }
}

const carteiraAlice = new carteira(120, -30)
carteiraAlice.verificarSaldo();

// 4. Crie um programa para cadastrar, listar e excluir produtos de uma
// lista com tipagem de Produto.
console.log();
console.log("Questão 4");
console.log();


const produtos: Array<Produto> = []; 
let id: number = 0;

class Produto {
  nomeDoProduto: string;
  id: number;

  constructor(nomeDoProduto: string) {
    this.nomeDoProduto = nomeDoProduto;
    this.id = id++; 
  }

  cadastrar() {
    produtos.push(this); 
    console.log(`Produto cadastrado com sucesso: ${JSON.stringify(this)}`);
  }

  remover() {
    const indiceDoProduto = produtos.findIndex((produto) => produto.id === this.id);

    indiceDoProduto !== -1
    ? (
      produtos.splice(indiceDoProduto, 1),
      console.log(`O produto ${this.nomeDoProduto} foi deletado com sucesso!`)
    ) : console.log(`Produto ${this.nomeDoProduto} não encontrado.`)
    
  }
}

const prodMacarrao = new Produto("macarrão");
const prodQueijo = new Produto("queijo");

prodMacarrao.cadastrar();
prodQueijo.cadastrar();

function listar(): void {
  console.log("Lista de produtos:");
  produtos.forEach((produto) => {
    console.log(JSON.stringify(produto));
  });
}

listar();
prodMacarrao.remover();
listar();

// 5. Crie um programa para mostrar informações de usuários (User) de
// uma empresa. Crie o tipo User com as seguintes propriedades:
// nome, idade, ocupação e salário (opcional). Caso o salário do
// usuário não seja informado, mostre o valor “N/A”. Exemplo:
// a. “Daphne, 23 anos, analista de TI, salário R$ 1000”
// b. “Daphne, 23 anos, analista de TI, salário N/A”
console.log();
console.log('Questão 5');

const employes:any = []

type User = {
  name : string,
  age : (number),
  occupation: string,
  wage ?: (number)
}

const user1:User = {name:"Samuel", age: 22, occupation: "Front-End Developer", wage: 10000}
const user2:User = {name:"Victor", age: 28, occupation: "Back-End Developer", wage: 10000}
const user3:User = {name:"Juliete", age: 25, occupation: "Analista de dados"}

function displayEmployes():void{
  
  for (const e of employes) {
    e.wage === undefined? (
      console.log(`
      {
        name: '${e.name}',
        age: '${e.age}',
        occupation : '${e.occupation}',
        wage: 'N/A'
      }
      `)
      ) : console.log(e)
    }
    
  }
  
employes.push(user1, user2, user3)
displayEmployes()

// 6. Usando o contexto do exercício 6, crie um tipo de usuário que
// representa funcionários da diretoria da empresa. O tipo Diretor deve
// conter as propriedades: nome, idade, salário (opcional) e nível de
// comissionamento (numérico). Crie uma função que receba um
// Diretor e mostre suas informações. Exemplos:
// a. “Diretor(a) Daphne, 23 anos, comissão nível 5, salário R$ 1000”
// b. “Diretor(a) Daphne, 23 anos, comissão nível 5, salário N/A”

console.log('Questão 6 e 7');

type board = User & {
commission: string 
}

const user4:board = {name:"Ana", age: 40, occupation: "Diretor(a)", commission: "nivel 5"}
const user5:board = {name:"Júlia", age: 36, occupation: "Diretor(a)", wage: 11000, commission: "nivel 4"}
employes.push(user4, user5)
displayEmployes()

// 7. Crie um tipo que seja composto por um User OU por um Diretor
// usando interseção de tipos. Desenvolva uma função que receba
// uma lista desse novo tipo e, para cada item da lista, imprima:
// a. O mesmo que o exercício 5, em caso de objeto User.
// b. O mesmo que o exercício 6, em caso de objeto Diretor.




