console.log();
console.log('exercise 1');
import{normal, vip, cabin} from './ex1'

const ticket1 = new normal()
const ticket2 = new vip()
const ticket3 = new cabin()
ticket1.printValue()
ticket2.printValue()
ticket3.printValue()

console.log();
console.log('exercise 2');
import{newProperty, oldProperty} from './ex2'
const property1 = new newProperty('1234 Elm Street Citytown, ST 54321 United States', 3000000000)
property1.newPropertyPrice()
console.log(property1.address, property1.price);

const property2 = new oldProperty('567 Maple Avenue Mapleville, ON L4P 1A2 Canada', 350000000)
property2.oldPropertyPrice()
console.log(property2.address, property2.price);

console.log();
console.log('exercise 3');
import { Animal } from './ex3';
const cat = new Animal('cat', 'mammals', 'carnivore', 'meow')
const dog = new Animal('dog', 'mammals', 'carnivore', 'bark')
const horse = new Animal('horse', 'mammals', 'herbivores', 'whinny')
cat.speak()
dog.speak()
horse.speak()
