export class Animal {
    name: string;
    animalClass: string;
    order: string;
    sound: string;

    constructor(name: string, animalClass: string, order: string, sound: string) {
        this.name = name;
        this.animalClass = animalClass;
        this.order = order;
        this.sound  = sound;
    }
    speak(){
        console.log(`${this.name}: ${this.sound}`);
    }
}

