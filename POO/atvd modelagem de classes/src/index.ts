console.log('exercise 1');

import { log } from 'console';
import {contador} from './ex1'
const contador1 = new contador(4)
contador1.incrementar()
contador1.zerar()
contador1.valor()

console.log('exercise 2');

import {ballModeling} from './ex2'
const ball1 = new ballModeling("blue", 80, 'plastic')
ball1.seeColor()
ball1.changeColor('white')

console.log('Exercise 3');
import {cc} from './ex3'
const cc1 = new cc ("pedro")
cc1.changeName('Samuel')
cc1.deposit(100000)
cc1.withdraw(20000000)
cc1.withdraw(100)

console.log('Exercise 4');
import { calculator } from './ex4';
const calculator1 = new calculator
calculator1.add(100, 100)
calculator1.subtraction(1100, 1000)
calculator1.multiplication(100,8)
calculator1.division(100,10)
calculator1.viewHistoric()

console.log('Exercise 5');
import {BombaCombustivel} from'./ex5'
const post1 = new BombaCombustivel('gasosa', 1000)
post1.abastecerPorLitro(40)
post1.abastecerPorValor(60)
post1.alterarCombustivel('cachaça')
post1.alterarValor(5.9)
post1.alterarQuantidadeCombustivel(10000)

console.log('Exercise 6');
import {car} from'./ex6'
const fusca = new car (1)
fusca.andar(10)
fusca.adicionarGasolina(100)
fusca.andar(10)
fusca.obterGasolina()

